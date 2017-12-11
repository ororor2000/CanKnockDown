#pragma strict
var SoundTable : AudioClip;
var SoundWall: AudioClip;
var SoundMirror: AudioClip;
private var is_sound_on:boolean;
var Sound_Explosion: AudioClip;
var Sound_bonus: AudioClip;
var Sound_grill: AudioClip;
var Sound_window: AudioClip;
function Start () {
if(PlayerPrefs.GetInt("sound")==0)
is_sound_on=false;
else
is_sound_on=true;
}

function Update () {

}



function OnCollisionEnter(col : Collision){

  if(col.transform.tag == "frontwall")
 {
  if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(SoundWall);

 }


  if(col.transform.tag == "table")
 {
  if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(SoundTable);

 }
  if(col.transform.tag == "Explosion_can")
 {
if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(Sound_Explosion);
}

  if(col.transform.tag == "extra")
 {
if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(Sound_bonus);
}

  if(col.transform.tag == "grill")
 {
if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(Sound_grill);
}

  if(col.transform.tag == "window")
 {
if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(Sound_window);
}

}