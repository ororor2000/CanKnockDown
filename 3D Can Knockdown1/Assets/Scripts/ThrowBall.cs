using System.Collections;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using UnityEngine;

public class ThrowBall : MonoBehaviour
{
    private Touch begining;
    private Touch end;

    private bool clearToThrow = true;
    private GameObject ball;

    private float startTime;
    private float deltaTime;

    // Use this for initialization
    void Start()
    {
        ball = GameObject.Find("Ball");

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.touchCount > 0)
        {
            if (Input.GetTouch(0).phase == TouchPhase.Began)
            {
                begining = Input.GetTouch(0);

                startTime = Time.time;
            }

            if (Input.GetTouch(0).phase == TouchPhase.Ended)
            {
                end = Input.GetTouch(0);

                deltaTime = Time.time - startTime;
            }
        }

        Vector2 zero = new Vector2(0f, 0f);

        if (clearToThrow && begining.position != zero && end.position != zero)
        {
            Rigidbody rigid = ball.GetComponent<Rigidbody>();

            float angle = Vector3.Angle(begining.position, end.position) * Mathf.Deg2Rad;
            float dis = Vector3.Distance(begining.position, end.position);

            float velocity = dis / deltaTime;

            float vx = velocity * (float)Math.Cos(angle);
            float vy = velocity * (float)Math.Sin(angle);

            Vector3 velocityVector = new Vector3(0, vy, vx);

            Debug.Log("Vx: " + vx + " Vy: " + vy + " Angle(rad): " + angle + " V: " + velocity);

            velocityVector *= Time.deltaTime;

            rigid.velocity = velocityVector;

            clearToThrow = false;
        }
    }
}
