using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public TextMeshProUGUI score_txt;
    private static int score = 0;

    public TextMeshProUGUI ballCount_txt;
    private static int ballCount = 0;

    public TextMeshProUGUI end_text;
    private static bool end;

    public Button retry_bt;

    List<GameObject> cans;

    public Sprite[] muteSprites;
    public Button bt_mute;

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
        cans = new List<GameObject>(GameObject.FindGameObjectsWithTag("Can"));
        cans.AddRange(GameObject.FindGameObjectsWithTag("ExplosiveCan"));
        End = false;
    }

    // Update is called once per frame
    void Update()
    {
        score_txt.text = "Score: " + Score;
        ballCount_txt.text = "Ball Count: " + BallCount;

        if (score == cans.Count)
        {
            end_text.text = "You Win";
            End = true;
            GetComponent<AudioSource>().Play();
        }
        else if (ballCount == 5)
        {
            End = true;
            end_text.text = "You Lose";
            retry_bt.enabled = true;
        }
        if (end && GameObject.FindGameObjectWithTag("Ball").GetComponent<Ball>().ClearToThrow)
        {
            Time.timeScale = 0; //Stops all movement
        }
    }

    public void Retry()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    public void MuteSwitch()
    {
        AudioListener.volume = 1 - AudioListener.volume;

        if (bt_mute.GetComponent<Image>().sprite == muteSprites[0])
        {
            bt_mute.GetComponent<Image>().sprite = muteSprites[1];
        }
        else
        {
            bt_mute.GetComponent<Image>().sprite = muteSprites[0];
        }
    }  
}
