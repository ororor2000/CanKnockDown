using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuControl : MonoBehaviour
{
    public GameObject panel;
    public GameObject bt_pasue;

    public static void LoadScene(string scenename)
    {
        SceneManager.LoadScene(scenename);
    }

    public void LoadMenu()
    {
        SceneManager.LoadScene("Menu");
    }


    public void LoadAreaMenuScene()
    {
        SceneManager.LoadScene("AreasMenu");

    }

    public void LoadArea(string areaName)
    {
        SceneManager.LoadScene(areaName + "_lvl_1");
    }

    public void LoadArea_Reset(string areaName)
    {
        GameManager.SaveAreaData(areaName, -1);

        LoadScene(string.Format("{0}_lvl_1", areaName));
    }


    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
        Debug.Log("2");
    }

    public void LoadPausePanel()
    {
        ThrowBall ballControl = GameObject.FindGameObjectWithTag("Ball").GetComponent<ThrowBall>();

        if (panel.activeInHierarchy)
        {
            panel.SetActive(false);
            bt_pasue.SetActive(true);
            GameManager.Pause = false;
            Time.timeScale = 1;            
        }
        else
        {
            panel.SetActive(true);
            bt_pasue.SetActive(false);
            Time.timeScale = 0;
            GameManager.Pause = true;
            StartCoroutine(Wait(2f, () => ballControl.clearToThrow = false));
        }
    }
}
