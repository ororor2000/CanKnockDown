#pragma strict
var buttonName : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var gui_texture : GUITexture;	
var beep : AudioClip;

static var is_sound_on:boolean=true;
static var is_music_on:boolean=true;



function OnMouseEnter(){
gui_texture.texture = rollOverTexture;

}
function OnMouseExit(){
gui_texture.texture = normalTexture;
}
function OnMouseUp(){
//gui_texture.enabled=false;

if(buttonName=="play")
Application.LoadLevel("select_scene");
if(buttonName=="moregames")
Application.OpenURL ("https://play.google.com/store/search?q=joltatech&c=apps");
if(buttonName=="gift")
Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=539843961");

//if(buttonName=="credit")

}




function Update(){
	
	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {
     //  guiTexture.enabled=false;
       gui_texture.texture = rollOverTexture;
       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
       gui_texture.texture = normalTexture;
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {
       gui_texture.texture = normalTexture;
       }
       
       

       
    } 
}

  if(Application.platform == RuntimePlatform.Android)

        {

            if (Input.GetKey(KeyCode.Escape))

            {

                Application.Quit();

                return;

            }
            
            
            if (Input.GetKey(KeyCode.Home))

            {

          //      Application.LoadLevel(levelToLoad);

                return;

            }
            
            


        }
}





