﻿using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public TextMeshProUGUI score_txt;
    private static int score = 0;

    public TextMeshProUGUI ballCount_txt;
    private static int ballCount = 0;

    public TextMeshProUGUI end_text;
    private static bool end;

    private GameObject[] cans;

    public static int Score
    {
        get { return score; }
        set { score = value; }
    }

    public static int BallCount
    {
        get { return ballCount; }
        set { ballCount = value; }
    }

    public static bool End
    {
        get { return end; }
        set { end = value; }
    }

    // Use this for initialization
    void Start()
    {
        cans = GameObject.FindGameObjectsWithTag("Can");
        End = false;
    }

    // Update is called once per frame
    void Update()
    {
        score_txt.text = "Score: " + Score;
        ballCount_txt.text = "Ball Count: " + BallCount;

        if (score == cans.Length)
        {
            //end_text.text = "You Win";
            //End = true;
            //GetComponent<AudioSource>().Play();
        }
        else if (ballCount == 5)
        {
            //End = true;
           // end_text.text = "You Lose";
        }
        if (end && GameObject.FindGameObjectWithTag("Ball").GetComponent<Ball>().ClearToThrow)
        {
            //Time.timeScale = 0; //Stops all movement
        }
    }
}
