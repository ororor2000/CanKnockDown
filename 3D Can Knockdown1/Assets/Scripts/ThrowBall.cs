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
    private GameObject ball;

    private float startTime;
    private float deltaTime;

    private bool freeze;
    private Vector3 start;
    private bool up;

    //only for demo for shay ///***TO BE DELETED***\\\\
    public Text points_txt;
    private int points = 0;

    private Vector3 ballStartPos;
    private int ballsCount = 0;


    //Sets the ball object
    void Start()
    {
        freeze = true;
        ball = gameObject;
        up = true;

        ballStartPos = transform.position;
    }

    public void RestartScene()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    //Updates every frame
    void Update()
    {            
        if (ball.transform.position.y < -30)
        {
            //Application.LoadLevel(Application.loadedLevel);
        }

        if (transform.position.y < -30)
        {
            Instantiate(ball, ballStartPos, Quaternion.Euler(0,0,0));

            Destroy(gameObject);
            ballsCount += 1;
        }

        if (CheckFall())
        {
            points += 1;
        }

        points_txt.text = "Score: " + points;

        if (Input.touchCount > 0)
        {
            TouchControl();
            freeze = false;
        }
        ThrowControl();
        if (freeze)
        {
            Float();
        }
    }

    public bool CheckFall()
    {
        var arr = GameObject.FindGameObjectsWithTag("Can");

        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i].transform.position.y < -30)
            {
                Destroy(arr[i]);
                return true;
            }
        }

        return false;
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

    private void Float()
    {
        if (up)
        {
            //transform.Translate(Vector3.up * (Time.deltaTime / 2 + Math.Abs(transform.position.y) + 0.05f) / 20);
            if (transform.position.y - start.y >= 1)
            {
                up = false;
            }
        }
        else
        {
            //transform.Translate(Vector3.down * (Time.deltaTime / 2 + Math.Abs(transform.position.y) + 0.05f) / 20);
            if (transform.position.y - start.y <= -1)
            {
                up = true;
            }
        }
    }

    private void ThrowControl()
    {
        if (clearToThrow && beginning.position != Vector2.zero && end.position != Vector2.zero)
        {
            Rigidbody rigid = ball.GetComponent<Rigidbody>();
            rigid.isKinematic = false;

            float angle = Vector3.Angle(beginning.position, end.position) * Mathf.Deg2Rad;
            float dis = Vector3.Distance(beginning.position, end.position);

            float velocity = dis / deltaTime;

            ///Way 1:
            float vx = velocity * (float)Math.Cos(angle);
            float vy = velocity * (float)Math.Sin(angle);

            ///Test this please, I still cant
            float deltax = end.position.x - beginning.position.x;
            float deltay = end.position.y - beginning.position.y;

            //float vx = velocity * deltax;
            //float vy = velocity * deltay;

            Vector3 velocityVector = new Vector3(0, vy, vx);

            Debug.Log("Vx: " + vx + " Vy: " + vy + " Angle(rad): " + angle + " V: " + velocity);

            velocityVector *= Time.deltaTime;

            rigid.velocity = velocityVector;

            clearToThrow = false;
        }
    }
}
