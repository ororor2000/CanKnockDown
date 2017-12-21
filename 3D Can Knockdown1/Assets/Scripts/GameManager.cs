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

public enum End
{
    False = 0, Win = 1, Loss = 2
}

public class GameManager : MonoBehaviour
{
    public int BallLimit;

    #region Texts
    private TextMeshProUGUI ScoreText;
    private TextMeshProUGUI BallCountText;
    private TextMeshProUGUI EndText;
    #endregion

    #region Values
    private static int score = 0;
    private static int ballCount = 0;
    private static End end;
    #endregion

    #region Scene properties
    private static string area;
    private static string level;
    private static List<GameObject> cans;
    #endregion

    public Button retry_bt;

    public Sprite[] muteSprites;
    public Button bt_mute;

    private LevelData leveldata;

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

    public static End End
    {
        get { return end; }
        set { end = value; }
    }

    void AssignObjects()
    {
        ScoreText = GameObject.Find("ScoreText").GetComponent<TextMeshProUGUI>();
        BallCountText = GameObject.Find("BallCountText").GetComponent<TextMeshProUGUI>();
        EndText = GameObject.Find("EndText").GetComponent<TextMeshProUGUI>();
    }

    public static void UpdateValues(int state)
    {
        switch (state)
        {
            case 0:
                ballCount++;
                break;
            case 1:
                score++;
                break;
            default:
                break;
        }
    }

    private void UpdateState()
    {
        ScoreText.text = "Score: " + Score + '/' + cans.Count;
        BallCountText.text = "Ball Count: " + BallCount + "/" + BallLimit;
        if (score == cans.Count)
        {
            EndText.text = "You Win";
            End = End.Win;
            GetComponent<AudioSource>().Play();
        }
        else if (ballCount == BallLimit)
        {
            End = End.Loss;
            EndText.text = "You Lose";
        }
    }

    // Use this for initialization
    void Start()
    {
        AssignObjects();
        cans = new List<GameObject>(GameObject.FindGameObjectsWithTag("Can"));
        cans.AddRange(GameObject.FindGameObjectsWithTag("ExplosiveCan"));
        end = End.False;
        ballCount = 0;
        score = 0;
        area = GetCurrentAreaName();
        level = SceneManager.GetActiveScene().name;

        ScoreText.text = "Score: 0";
        BallCountText.text = "Ball Count: 0";
    }

    // Update is called once per frame
    void Update()
    {
        UpdateState();
        OnEnd();
    }

    void LoadNextSceneInArea()
    {
        SaveLevelData();

        string str = SceneManager.GetActiveScene().name.Split('_')[1];

        int l = int.Parse(str);
        string path = "Scenes/" + area + "/lvl_" + (l + 1);
        Debug.Log(path);
        if (SceneManager.GetSceneByPath(path).IsValid())//Not working
        {
            MenuControl.LoadScene(area + "/lvl_" + (l + 1));
        }
        else
        {
            MenuControl.LoadScene("Menus/Menu");
        }

    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }

    public static bool SaveAreaData(string fileName, int saveCode = 0 /*Save (0) or delete (-1)*/)
    {
        try
        {
            BinaryFormatter format = new BinaryFormatter();

            using (FileStream file = File.Create(Application.persistentDataPath + "/" + fileName + ".dat"))
            {
                AreaData data = new AreaData();
                if (saveCode == -1)
                {
                    data.AreaScore = 0;
                    data.AreaBallCount = 0;
                }
                else
                {
                    data.AreaScore = score;
                    data.AreaBallCount = ballCount;
                }

                format.Serialize(file, data);
                file.Close();
            }
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }

    private void OnEnd()
    {
        if (end == End.Win)
        {
            Invoke("LoadNextSceneInArea", 2f);
        }
    }

    public bool SaveLevelData()
    {
        try
        {
            BinaryFormatter formatter = new BinaryFormatter();

            FileStream file = File.Open(Application.persistentDataPath + '/' + area + '_' + level + ".dat", FileMode.OpenOrCreate);

            leveldata = new LevelData();

            leveldata.Score = score;
            leveldata.BallCount = ballCount;

            formatter.Serialize(file, leveldata); //Add check for best score

            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }

    public LevelData LoadLevelData(string area, string level)
    {
        try
        {
            string path = Application.persistentDataPath + '/' + area + '_' + level + ".dat";
            if (File.Exists(path))
            {
                BinaryFormatter formatter = new BinaryFormatter();
                FileStream file = File.Open(path, FileMode.Open);
                LevelData levelData = (LevelData)formatter.Deserialize(file);
                file.Close();
                return levelData;
            }
            else return new LevelData();
        }
        catch
        {
            return null;
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
                AreaBallCount = 0,
                AreaScore = 0
            };
        }
    }

    string GetCurrentAreaName()
    {
        return SceneManager.GetActiveScene().path.Split('/')[2];
    }

    public void RetryArea()
    {
        string areaName = GetCurrentAreaName();
        MenuControl.LoadScene(areaName + "/lvl_1");
    }

    public void RetryLevel()
    {
        end = End.False;
        MenuControl.LoadScene(area + "/" + level);
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
