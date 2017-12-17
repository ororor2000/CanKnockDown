using System.Collections;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Events;

public class ThrowBall : MonoBehaviour
{
    private Touch beginning;
    private Touch end;

    public float z;

    private bool clearToThrow = true;
    private Vector3 ballStartPos;
    private Rigidbody rigid;

    private float startTime;
    private float deltaTime;

    //DEBUG
    private Vector3 mouse_start;
    private Vector3 mouse_end;

    //Sets the ball object
    void Start()
    {
        ballStartPos = transform.position;
        rigid = GetComponent<Rigidbody>();
    }

    //Updates every frame
    void Update()
    {
        //TODO
        /*
        if (CheckWin()) ///In background control? 17/12 - Exists, delete?
        {
            Print("You Won");
            EndGame And Move To Next Level
        }
         * 
        if (GameManager.ballCount > z) where z = predetermined number unique for a each level
        {
            //EndLevel() = Lost            
        }
        */
        if (GetComponent<Ball>().ClearToThrow && !GameManager.End)
        {

            if (Input.touchCount > 0)
            {
                TouchControl();
            }
            else
            {
                MouseControl();
            }            
        }

    }

    private void TouchControl()
    {
        if (Input.GetTouch(0).phase == TouchPhase.Began)
        {
            beginning = Input.GetTouch(0);
            startTime = Time.time;
        }

        if (Input.GetTouch(0).phase == TouchPhase.Ended || Input.GetMouseButtonUp(0))
        {
            end = Input.GetTouch(0);
            deltaTime = Time.time - startTime;
        }

        TouchThrowControl();
    }

    private void TouchThrowControl()
    {
        if (clearToThrow && beginning.position != Vector2.zero && end.position != Vector2.zero && beginning.position != end.position)
        {
            //float angle = Vector3.Angle(beginning.position, end.position) * Mathf.Deg2Rad;
            float dis = Vector3.Distance(beginning.position, end.position);

            float disx = end.position.x - beginning.position.x;
            float disy = end.position.y - beginning.position.y;

            float angle = Mathf.Atan(disy / disx);

            float velocity = dis / deltaTime * Time.deltaTime;

            float vx = velocity * Mathf.Cos(angle) * Mathf.Sign(disx);
            float vy = Mathf.Abs(velocity * Mathf.Sin(angle));

            Vector3 velocityVector = new Vector3(vx, vy, z) / 2;

            ResetValues();

            Debug.Log("Vector: " + velocityVector);
            rigid.velocity = velocityVector;
            rigid.isKinematic = false;

            clearToThrow = false;
        }
    }

    private void MouseControl()
    {
        if (Input.GetMouseButtonDown(0))
        {
            mouse_start = Input.mousePosition;
            startTime = Time.time;
        }

        if (Input.GetMouseButtonUp(0))
        {
            mouse_end = Input.mousePosition;
            deltaTime = Time.time - startTime;
        }

        MouseThrowControl();
    }

    private void MouseThrowControl()
    {
        if (clearToThrow && mouse_start != Vector3.zero && mouse_end != Vector3.zero && mouse_start != mouse_end)
        {
            float disx = mouse_end.x - mouse_start.x;
            float disy = mouse_end.y - mouse_start.y;

            float angle = Mathf.Atan2(disy, disx);
            float dis = Vector3.Distance(mouse_start, mouse_end);
            Debug.Log("alpha: " + angle + " Dis: " + dis);

            float velocity = dis / deltaTime * Time.deltaTime;

            float vx = velocity * Mathf.Cos(angle) * Mathf.Sign(disx);
            float vy = Mathf.Abs(velocity * Mathf.Sin(angle));

            Vector3 velocityVector = new Vector3(vx, vy, z) / 2;
            Debug.Log("Vector: " + velocityVector);

            ResetValues();

            rigid.velocity = velocityVector;
            rigid.isKinematic = false;

            clearToThrow = false;
        }
    }

    public void RespawnBall()
    {
        rigid.isKinematic = true;
        rigid.velocity = Vector3.zero;

        transform.position = ballStartPos;

        clearToThrow = true;
        GetComponent<Ball>().ClearToThrow = true;
    }

    private void ResetValues()
    {
        beginning.position = Vector3.zero;
        end.position = Vector3.zero;

        mouse_start = Vector3.zero;
        mouse_end = Vector3.zero;
    }
}
