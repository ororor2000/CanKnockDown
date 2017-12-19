using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
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

    public AreaData data;

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

        if (LoadData("TestArea") != null)
        {
            data = LoadData("TestArea");
        }
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
            SaveData(GetCurrentAreaName());

            StartCoroutine(Wait(2, () =>
            {
                SceneManager.LoadScene("lvl_test_02");
            }));
        }
    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }

    public bool SaveData(string fileName, int saveCode = 0)
    {
        try
        {
            BinaryFormatter format = new BinaryFormatter();

            using (FileStream file = File.Create(Application.persistentDataPath + "/" + fileName + ".dat"))
            {
                AreaData data = new AreaData();

                if (saveCode == -1)
                {
                    data.score = 0;
                    data.ballCount = 0;
                }
                else
                {
                    data.score = score;
                    data.ballCount = ballCount;
                }

                format.Serialize(file, data);
                file.Close();
            }

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public AreaData LoadData(string fileName)
    {
        if (File.Exists(Application.persistentDataPath + "/" + fileName + ".dat"))
        {
            BinaryFormatter format = new BinaryFormatter();

            using (FileStream file = File.Open(Application.persistentDataPath + "/" + fileName + ".dat", FileMode.Open))
            {
                AreaData data = new AreaData();

                data = (AreaData)format.Deserialize(file);

                return data;
            }
        }

        return null;
    }

    string GetCurrentAreaName()
    {
        string[] arr = SceneManager.GetActiveScene().name.Split('_');

       // string str = arr[1];

        //str = str.Replace(str[0], str[0].ToString().ToUpper().ToCharArray()[0]);

        return "";
    }

    public void RetryArea()
    {
        string areaName = GetCurrentAreaName();

        SaveData(GetCurrentAreaName(), -1);

        SceneManager.LoadScene("lvl_" + areaName + "_01");
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
