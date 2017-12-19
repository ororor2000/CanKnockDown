using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
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

        data = LoadData(GetCurrentAreaName());

        GetCurrentAreaName();
    }

    // Update is called once per frame
    void Update()
    {
        score_txt.text = "Score: " + Score;
        ballCount_txt.text = "Ball Count: " + BallCount;

        Debug.Log(data.totalScore);
        if (score == cans.Count + data.totalScore)
        {
            end_text.text = "You Win";
            End = true;
            GetComponent<AudioSource>().Play();
        }
        else if (ballCount == 5)
        {
            End = true;
            end_text.text = "You Lose";
        }
        if (end && GameObject.FindGameObjectWithTag("Ball").GetComponent<Ball>().ClearToThrow && GameObject.FindGameObjectWithTag("Ball").GetComponent<Ball>().MoveToNextLevel)
        {
            StartCoroutine(Wait(2, () =>
            {
                LoadNextSceneInArea();
            }));
        }
    }

    void LoadNextSceneInArea()
    {
        SaveData(GetCurrentAreaName());
   
        string str = SceneManager.GetActiveScene().name.Split('_')[2];

        int l = int.Parse(str);

        Debug.Log(l);

        SceneManager.LoadScene("lvl_" + GetCurrentAreaName() + "_0" + (l + 1));
    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }
    
    public static bool SaveData(string fileName, int saveCode = 0)
    {
        try
        {
            BinaryFormatter format = new BinaryFormatter();

            using (FileStream file = File.Create(Application.persistentDataPath + "/" + fileName + ".dat"))
            {
                AreaData data = new AreaData();
                if (saveCode == -1)
                {
                    data.totalScore = 0;
                    data.totalBallCount = 0;
                }
                else
                {
                    data.totalScore = score;
                    data.totalBallCount = ballCount;
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
        else
        {
            return new AreaData
            {
                totalBallCount = 0,
                totalScore = 0
            };
        }        
    }

    string GetCurrentAreaName()
    {        
        string str = SceneManager.GetActiveScene().name.Split('_')[1];

        StringBuilder builder = new StringBuilder();

        for (int i = 0; i < str.Length; i++)
        {
            if (i == 0)
            {
                builder.Append(str[i].ToString().ToUpper());
            }
            else
            {
                builder.Append(str[i]);
            }
        }
                
        return builder.ToString();
    }

    public void RetryArea()
    {
        string areaName = GetCurrentAreaName();

        end = false;
        score = 0;
        ballCount = 0;

        SaveData(GetCurrentAreaName());
        Debug.Log("Saved Empty");
               
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
