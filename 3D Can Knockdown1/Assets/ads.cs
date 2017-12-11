using UnityEngine;
using System.Collections;

public class ads : MonoBehaviour {
	static bool isAdShow = true;
	string appname = "";
	string applink = "3D Can Knockdown: Tin Shoot\nhttps://play.google.com/store/apps/details?id=com.gg.can.knockdown.striker.free";
	// Use this for initialization
	void Start () {
//		AdmobVNTIS_Interstitial._showInterstitialImmediately ();
		if (ads.isAdShow) {
			Debug.Log("Show ads");
					//	AdmobVNTIS_Interstitial._showInterstitialImmediately ();
						//Adunion4Unity.Instance.showInterstitialAd (Adunion4Unity.IAD_TYPE_GAMESTART);
						ads.isAdShow = false;
				}
		//Adunion4Unity.Instance.preloadBannerAd();
		Debug.Log ("banner");
		//Adunion4Unity.Instance.showBannerAd(Adunion4Unity.BAD_POS_BOTTOM_CENTER);

	}
	
	// Update is called once per frame
	void Update () {

			//back press
			if (Input.GetKeyUp(KeyCode.Escape))
			{	
			//Adunion4Unity.Instance.showInterstitialAd(Adunion4Unity.IAD_TYPE_GAMEEXIT);
					Application.Quit();
				
			}

	if (PlayerPrefs.GetInt ("share") == 1) {
			shareText();
			PlayerPrefs.SetInt("share",0);
				}
	}
	public void shareText(){
		//execute the below lines if being run on a Android device
		#if UNITY_ANDROID
		//Refernece of AndroidJavaClass class for intent
		AndroidJavaClass intentClass = new AndroidJavaClass ("android.content.Intent");
		//Refernece of AndroidJavaObject class for intent
		AndroidJavaObject intentObject = new AndroidJavaObject ("android.content.Intent");
		//call setAction method of the Intent object created
		intentObject.Call<AndroidJavaObject>("setAction", intentClass.GetStatic<string>("ACTION_SEND"));
		//set the type of sharing that is happening
		intentObject.Call<AndroidJavaObject>("setType", "text/plain");
		//add data to be passed to the other activity i.e., the data to be sent
		intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_SUBJECT"), appname);
		intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_TEXT"), applink);
		//get the current activity
		AndroidJavaClass unity = new AndroidJavaClass ("com.unity3d.player.UnityPlayer");
		AndroidJavaObject currentActivity = unity.GetStatic<AndroidJavaObject>("currentActivity");
		//start the activity by sending the intent data
		currentActivity.Call ("startActivity", intentObject);
		#endif
		
	}
}
