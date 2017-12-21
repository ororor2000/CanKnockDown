using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuControl : MonoBehaviour
{
    public static void LoadScene(string scenename)
    {
        SceneManager.LoadScene("Scenes/" + scenename);
    }

    public void LoadArea_Reset(string areaName)
    {
        GameManager.SaveAreaData(areaName, -1);

        LoadScene(string.Format("/{0}/lvl_01", areaName));
    }
}
