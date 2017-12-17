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

    private bool clearToThrow = true;
    private Vector3 ballStartPos;
    private GameObject ball;
    private Rigidbody rigid;

    private float startTime;
    private float deltaTime;

    //DEBUG
    private Vector3 mouse_start;
    private Vector3 mouse_end;

    //Sets the ball object
    void Start()
    {
        ball = gameObject;
        ballStartPos = transform.position;
        rigid = GetComponent<Rigidbody>();
    }

    public void RestartScene()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    //Updates every frame
    void Update()
    {
        //TODO
        /*
        if (CheckWin()) ///In background control?
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

        if (ball.transform.position.y < -17)
        {
            //GameManager.BallCount += 1;
            //RestartScene(); (why?)->Debug, Was To lazy to repoosition ball
            //RespawnBall();
        }
        else if (clearToThrow)
        {

            if (Input.touchCount > 0)
            {
                //TouchControl();
            }

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
            ThrowControl();
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
    }

    private void ThrowControl()
    {
        if (clearToThrow && mouse_start != Vector3.zero && mouse_end != Vector3.zero && mouse_start != mouse_end) // && beginning.position != Vector2.zero && end.position != Vector2.zero)
        {
            //float angle = Vector3.Angle(beginning.position, end.position) * Mathf.Deg2Rad;
            //float dis = Vector3.Distance(beginning.position, end.position);

            float disx = mouse_end.x - mouse_start.x;
            float disy = mouse_end.y - mouse_start.y;

            float angle = Mathf.Atan(disy / disx);

            float dis = Vector3.Distance(mouse_start, mouse_end);

            float velocity = dis / deltaTime * Time.deltaTime;

            float vx = velocity * Mathf.Cos(angle) * Mathf.Sign(disx);
            float vy = Mathf.Abs(velocity * Mathf.Sin(angle));

            Vector3 velocityVector = new Vector3(vx, vy, 30) / 2;

            ResetValues();

            Debug.Log("Vector: " + velocityVector);
            rigid.velocity = velocityVector;
            rigid.isKinematic = false;

            clearToThrow = false;
        }
    }

    public void RespawnBall()
    {
        rigid.isKinematic = true;
        rigid.velocity = Vector3.zero;

        ball.transform.position = ballStartPos;

        clearToThrow = true;
        GameManager.clearToReset = true;
    }

    private void ResetValues()
    {
        mouse_start = Vector3.zero;
        mouse_end = Vector3.zero;
    }
}
