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

    private bool respawning;

    public float vz;

    public float z;

    private bool clearToThrow = true;
    private Vector3 ballStartPos;
    private Rigidbody rigid;

    private float startTime;
    private float deltaTime;

    //DEBUG
    private Vector3 mouse_start;
    private Vector3 mouse_end;

    public Vector3 ballthrowposition;

    //Sets the ball object
    void Start()
    {
        ballStartPos = transform.position;
        rigid = GetComponent<Rigidbody>();
        RespawnBall();
    }

    //Updates every frame
    void Update()
    {
        if (respawning)
        {
            transform.position = new Vector3(transform.position.x, transform.position.y, z);
            if (transform.position.x > 0)
            {
                ReadyToThrow();
            }
        }
        else if (clearToThrow && !GameManager.End)
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

        if (Input.GetTouch(0).phase == TouchPhase.Ended)
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
            float dis = Vector3.Distance(beginning.position, end.position);

            float disx = end.position.x - beginning.position.x;
            float disy = end.position.y - beginning.position.y;

            float angle = Mathf.Atan(disy / disx);
            float velocity = dis / deltaTime * Time.deltaTime;
            float vx = velocity * Mathf.Cos(angle) * Mathf.Sign(disx);
            float vy = Mathf.Abs(velocity * Mathf.Sin(angle));

            Vector3 velocityVector = new Vector3(vx, vy < 45 ? vy : 45, vz * 3) / 3;
            ResetValues();

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

            float angle = Mathf.Atan(disy / disx);
            float dis = Vector3.Distance(mouse_start, mouse_end);
            float velocity = dis / deltaTime * Time.deltaTime;

            float vx = velocity * Mathf.Cos(angle) * Mathf.Sign(disx);
            float vy = Mathf.Abs(velocity * Mathf.Sin(angle));

            Vector3 velocityVector = new Vector3(vx, vy < 40 ? vy : 40, vz * 3) / 3;

            ResetValues();

            rigid.velocity = velocityVector;
            rigid.isKinematic = false;

            clearToThrow = false;
        }
    }

    public void RespawnBall()
    {
        transform.position = ballStartPos;
        transform.rotation = new Quaternion();
        rigid.velocity = new Vector3();
        rigid.velocity = new Vector3(5, 0, 0);

        respawning = true;

        GetComponent<Ball>().ClearToThrow = true;
    }

    private void ReadyToThrow()
    {
        rigid.velocity = Vector3.zero;
        transform.position = ballthrowposition;
        rigid.isKinematic = true;
        respawning = false;
        clearToThrow = true;
    }

    private void ResetValues()
    {
        beginning.position = Vector3.zero;
        end.position = Vector3.zero;

        mouse_start = Vector3.zero;
        mouse_end = Vector3.zero;
    }
}
