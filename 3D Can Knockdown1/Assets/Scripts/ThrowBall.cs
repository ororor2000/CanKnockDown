using System.Collections;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ThrowBall : MonoBehaviour
{
    private Touch beginning;
    private Touch end;

    private bool clearToThrow = true;
    private Vector3 ballStartPos;
    private GameObject ball;

    private float startTime;
    private float deltaTime;

    private bool freeze;
    private Vector3 start;
    private bool up;

    private bool ballRePos = true;

    //DEBUG
    private Vector3 mouse_start;
    private Vector3 mouse_end;


    //Sets the ball object
    void Start()
    {
        ball = gameObject;
        ballStartPos = ball.transform.position;
        up = true;
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
        if (CheckWin())
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

        if (ball.transform.position.y < -10)
        {            
            GameManager.ballCount += 1;
            //RestartScene();
            RespawnBall();
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
                Debug.Log("Down: " + mouse_start);
            }

            if (Input.GetMouseButtonUp(0))
            {
                mouse_end = Input.mousePosition;
                deltaTime = Time.time - startTime;
                Debug.Log("UP: " + mouse_end);
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
        if (clearToThrow && mouse_start != Vector3.zero && mouse_end != Vector3.zero) // && beginning.position != Vector2.zero && end.position != Vector2.zero)
        {
            Rigidbody rigid = ball.GetComponent<Rigidbody>();
            rigid.isKinematic = false;
            rigid.velocity = Vector3.zero;;

            //float angle = Vector3.Angle(beginning.position, end.position) * Mathf.Deg2Rad;
            //float dis = Vector3.Distance(beginning.position, end.position);
            Debug.Log("Down: " + mouse_start);
            Debug.Log("UP: " + mouse_end);
            Debug.Log("Time: " + deltaTime);
            
            float angle = Vector3.Angle(mouse_start, mouse_end) * Mathf.Deg2Rad;
            float dis = Vector3.Distance(mouse_start, mouse_end);            

            float velocity = dis / deltaTime;
            
            float vx = velocity * Mathf.Cos(angle);
            float vy = velocity * Mathf.Sin(angle);                      

            Vector3 velocityVector = new Vector3(0, vy, vx);
            velocityVector *= Time.deltaTime;

            Debug.Log("Vector: " + velocityVector);
            Debug.Log("Vx: " + vx + " Vy: " + vy + " Angle(rad): " + angle + " V: " + velocity);

            rigid.velocity = velocityVector;            

            clearToThrow = false;
        }
    }

    void RespawnBall()
    {
        var rigid = ball.GetComponent<Rigidbody>();

        rigid.isKinematic = true;
        rigid.velocity = Vector3.zero;

        ball.transform.position = ballStartPos;

        clearToThrow = true;

    }
}
