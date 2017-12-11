#pragma strict



var buttonName : String;
var MusicOn : Texture2D;
var MusicOff : Texture2D;
var gui_texture : GUITexture;	
var beep : AudioClip;




static var waittimer:float=0;


static var is_music_on:boolean=true;
function OnMouseEnter(){

 if(PlayerPrefs.GetInt("sound")==1)
GetComponent.<AudioSource>().PlayOneShot(beep);


}
function OnMouseExit(){

}
function OnMouseUp(){
//gui_texture.enabled=false;


if(is_music_on)
{
is_music_on=false;
gui_texture.texture=MusicOff;
PlayerPrefs.SetInt("music",0);
}
else
{
is_music_on=true;
gui_texture.texture=MusicOn;
PlayerPrefs.SetInt("music",1);
}

if(buttonName=="play")
Application.LoadLevel("select_scene");
if(buttonName=="gift")
Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=539843961");

//if(buttonName=="credit")

}
function Start () {


if(PlayerPrefs.GetInt("is_first_time_game_install_music")==0)
{
PlayerPrefs.SetInt("music",1);
PlayerPrefs.SetInt("is_first_time_game_install_music",1);
}


if(PlayerPrefs.GetInt("music")==0)
           {
             is_music_on=false;
             gui_texture.texture=MusicOff;
          
           }
        else
          {
          is_music_on=true;
          gui_texture.texture=MusicOn;
   
          }

}

function Update () {





if(is_music_on)
           {
       
             gui_texture.texture=MusicOn;
           }
        else
          {
          
          gui_texture.texture=MusicOff;
          }





	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {
  if(PlayerPrefs.GetInt("sound")==1)
GetComponent.<AudioSource>().PlayOneShot(beep);
       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
        if(is_music_on)
           {
             is_music_on=false;
             gui_texture.texture=MusicOff;
             PlayerPrefs.SetInt("music",0);
           }
        else
          {
          is_music_on=true;
          gui_texture.texture=MusicOn;
          PlayerPrefs.SetInt("music",1);
          }
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {

       }
       
       

       
    } 
}
}