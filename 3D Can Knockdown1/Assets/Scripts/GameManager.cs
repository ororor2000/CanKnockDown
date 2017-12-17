using System.Collections;
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

    public TextMeshProUGUI text;
    public static bool clearToReset = true;

    public static int Score
    {
        get
        {
            return score;
        }

        set
        {
            score = value;
        }
    }

    public static int BallCount
    {
        get
        {
            return ballCount;
        }

        set
        {
            ballCount = value;
        }
    }

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {            
        score_txt.text = "Score: " + Score;
        ballCount_txt.text = "Ball Count: " + BallCount;

        if (score == 5)
        {
            text.text = "You Win";
            //GetComponent<AudioSource>().Play();
        }
        else if (ballCount == 5)
        {
            text.text = "You Lose";
        }
    }
}
