using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Advertisements;
using UnityEngine;
using UnityEngine.Advertisements;

public class AdManager : MonoBehaviour
{
    private static Action func = null;

    public static void ShowAd(Action action)
    {
        func = action;

        if (Advertisement.IsReady() && func != null)
        {
            Advertisement.Show("", new ShowOptions() {resultCallback = AdResultHandler});
        }
    }

    private static void AdResultHandler(ShowResult result)
    {
        switch (result)
        {
           case ShowResult.Finished:
                func.Invoke();
               return;
            default:
                return;//Do Nothing
        }
    }

}
