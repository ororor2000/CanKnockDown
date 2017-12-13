using System.Collections;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEngine;

public class ThrowBall : MonoBehaviour
{
    private Touch beginning;
    private Touch end;

    private bool clearToThrow = true;
    private GameObject ball;

    private float startTime;
    private float deltaTime;

    //Sets the ball object
    void Start()
    {
        ball = gameObject;
    }

    //Updates every frame
    void Update()
    {
        if (Input.touchCount > 0)
        {
            TouchControl();
        }
        ThrowControl();
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
            //float vx = velocity * (float)Math.Cos(angle);
            //float vy = velocity * (float)Math.Sin(angle);

            ///Test this please, I still cant
            float deltax = end.position.x - beginning.position.x;
            float deltay = end.position.y - beginning.position.y;

            float vx = velocity * deltax;
            float vy = velocity * deltay;

            Vector3 velocityVector = new Vector3(0, vy, vx);

            Debug.Log("Vx: " + vx + " Vy: " + vy + " Angle(rad): " + angle + " V: " + velocity);

            velocityVector *= Time.deltaTime;

            rigid.velocity = velocityVector;

            clearToThrow = false;
        }
    }
}
