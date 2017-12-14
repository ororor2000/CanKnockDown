using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public Text score_txt;
    public static int score = 0;

    public Text ballCount_txt;
    public static int ballCount = 0;

	// Use this for initialization
	void Start ()
    {
		
	}
	
	// Update is called once per frame
	void Update ()
	{
	    score_txt.text = "Score: " + score;
	    ballCount_txt.text = "Ball Count: " + ballCount;
	}
}
