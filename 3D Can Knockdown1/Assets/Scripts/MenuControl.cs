using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuControl : MonoBehaviour
{
    public void LoadScene(string scenename)
    {
        SceneManager.LoadScene("Scenes/" + scenename);
    }

    public void LoadArea_Reset(string areaName)
    {
        GameManager.SaveData(areaName, -1);

        LoadScene(string.Format("lvl_{0}_01", areaName));
    }
}
