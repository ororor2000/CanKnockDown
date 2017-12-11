using UnityEngine;
using System.Collections;

public class newadd : MonoBehaviour {
	public string zoneId;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnGUI(){
		if (GUI.Button (new Rect (Screen.width * 0.2f, Screen.height * 0.2f, Screen.width * 0.2f, Screen.height * 0.2f), "Show ad")) {
//			UnityAdsHelper.ShowAd(zoneId);
		}
	}
}
