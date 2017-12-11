#pragma strict



var buttonName : String;
var SoundOn : Texture2D;
var SoundOff : Texture2D;
var gui_texture : GUITexture;	
var beep : AudioClip;

static var is_sound_on:boolean=true;


static var waittimer:float=0;

function OnMouseEnter(){

 if(PlayerPrefs.GetInt("sound")==1)
GetComponent.<AudioSource>().PlayOneShot(beep);


}
function OnMouseExit(){

}
function OnMouseUp(){
//gui_texture.enabled=false;


if(is_sound_on)
{
is_sound_on=false;
gui_texture.texture=SoundOff;
PlayerPrefs.SetInt("sound",0);
}
else
{
is_sound_on=true;
gui_texture.texture=SoundOn;
PlayerPrefs.SetInt("sound",1);
}

if(buttonName=="play")
Application.LoadLevel("select_scene");
if(buttonName=="gift")
Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=539843961");

//if(buttonName=="credit")

}
function Start () {

if(PlayerPrefs.GetInt("is_first_time_game_install_sound")==0)
{
PlayerPrefs.SetInt("sound",1);
PlayerPrefs.SetInt("is_first_time_game_install_sound",1);
}

if(PlayerPrefs.GetInt("sound")==0)
           {
             is_sound_on=false;
             gui_texture.texture=SoundOff;

           }
        else
          {
          is_sound_on=true;
          gui_texture.texture=SoundOn;
          }
}

function Update () {




if(is_sound_on)
{

gui_texture.texture=SoundOn;
}
else
{

gui_texture.texture=SoundOff;
}






	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {
  if(PlayerPrefs.GetInt("sound")==1)
GetComponent.<AudioSource>().PlayOneShot(beep);
       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
        if(is_sound_on)
           {
             is_sound_on=false;
             gui_texture.texture=SoundOff;
             PlayerPrefs.SetInt("sound",0);
           }
        else
          {
          is_sound_on=true;
          gui_texture.texture=SoundOn;
          PlayerPrefs.SetInt("sound",1);
          }
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {

       }
       
       

       
    } 
}
}