#pragma strict

var grillSound : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col : Collision){

	if(col.gameObject.tag == "newball"){
	
		GetComponent.<AudioSource>().PlayOneShot(grillSound);
		Debug.Log("PLAYED");
	}

}