using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;
public class GamePlayAds : MonoBehaviour {

	// Use this for initialization
	void Start () {
//	Advertisement.Initialize ("112085",false);
	}
	
	// Update is called once per frame
	void Update () {
	

		if (PlayerPrefs.GetInt ("paused") == 1) {

			Debug.Log("Paused ad");
//			AdmobVNTIS_Interstitial._showInterstitialImmediately ();
			//Adunion4Unity.Instance.showInterstitialAd(Adunion4Unity.IAD_TYPE_GAMEPAUSE);
			PlayerPrefs.SetInt("paused",0);

				}

		if (PlayerPrefs.GetInt ("fail") == 1) {
		//	Advertisement.Show();
			print ("fail");
			//	AdmobVNTIS_Interstitial._showInterstitialImmediately ();
			//Adunion4Unity.Instance.showInterstitialAd(Adunion4Unity.IAD_TYPE_GAMEPAUSE);
			PlayerPrefs.SetInt("fail",0);
			
		}
		if (PlayerPrefs.GetInt ("complete") == 1) {
		//	Advertisement.Show();
			//	AdmobVNTIS_Interstitial._showInterstitialImmediately ();
			//Adunion4Unity.Instance.showInterstitialAd(Adunion4Unity.IAD_TYPE_GAMEPAUSE);
			PlayerPrefs.SetInt("complete",0);
			
		}
	}
}
