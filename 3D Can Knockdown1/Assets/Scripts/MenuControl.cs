using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuControl : MonoBehaviour
{
    public static void LoadScene(string scenename)
    {
        SceneManager.LoadScene(scenename);
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
}
