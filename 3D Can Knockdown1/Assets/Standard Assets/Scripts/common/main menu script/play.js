#pragma strict
var buttonName : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var gui_texture : GUITexture;	
var beep : AudioClip;

static var is_sound_on:boolean=true;
static var is_music_on:boolean=true;
static var waittimer:float=0;

function OnMouseEnter(){
gui_texture.texture = rollOverTexture;
 if(PlayerPrefs.GetInt("sound")==1)
 GetComponent.<AudioSource>().PlayOneShot(beep);

Debug.Log("PlayerPrefs.GetInt(sound)=  "+PlayerPrefs.GetInt("sound"));
}
function OnMouseExit(){
gui_texture.texture = normalTexture;
}
function OnMouseUp(){
//gui_texture.enabled=false;
GetComponent.<AudioSource>().PlayOneShot(beep);
if(buttonName=="play")
Application.LoadLevel("select scene");
if(buttonName=="gift")
Application.OpenURL ("https://play.google.com/store/apps/developer?id=GameChief");

//if(buttonName=="credit")

}
function Start () {

}

function Update () {
waittimer+=Time.deltaTime;
Time.timeScale=0.25;
if(waittimer<=0.5)
{
gui_texture.texture = rollOverTexture;
}
if(waittimer>0.5&&waittimer<=1)
{
gui_texture.texture = normalTexture;
}
if(waittimer>1)
{
waittimer=0;
}











	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {
        if(PlayerPrefs.GetInt("sound")==1)
        GetComponent.<AudioSource>().PlayOneShot(beep);
       
     //  guiTexture.enabled=false;
      // gui_texture.texture = rollOverTexture;
       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
      // gui_texture.texture = normalTexture;
      if(buttonName=="play")
      Application.LoadLevel("select scene");
      if(buttonName=="gift")
Application.OpenURL ("https://play.google.com/store/apps/developer?id=GameChief");
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {
      // gui_texture.texture = normalTexture;
       }
       
       

       
    } 
}
}