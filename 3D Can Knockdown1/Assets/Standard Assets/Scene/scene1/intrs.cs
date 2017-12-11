using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;
public class intrs : MonoBehaviour {

	// Use this for initialization
	void Start () {
	//
	//	Advertisement.Show ();
		Invoke ("shows",1.0f);

	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void shows(){
		GameObject.Find ("Admob").SendMessage ("ShowInterstitial");
	}
}
