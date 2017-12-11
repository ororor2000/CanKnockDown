#pragma strict
var buttonName : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var gui_texture : GUITexture;	
var scenes : Texture2D[];

var select_scene_gui_texture : GUITexture;
var beep : AudioClip;

private var current_scene_index:int=0;
static var selected_scene_index:int=0;


function Start()
{
current_scene_index=0;
PlayerPrefs.SetInt("current_scene_index",current_scene_index);
}

function OnMouseEnter(){
gui_texture.texture = rollOverTexture;

}
function OnMouseExit(){
gui_texture.texture = normalTexture;
}
function OnMouseUp(){
//gui_texture.enabled=false;

select_scene();
//if(buttonName=="credit")
}

function select_scene()
{

current_scene_index=PlayerPrefs.GetInt("current_scene_index");

if(buttonName=="rightarrow")
{

current_scene_index++;
if(current_scene_index>2)
current_scene_index=2;

PlayerPrefs.SetInt("current_scene_index",current_scene_index);

Debug.Log("right  = "+current_scene_index);
}
if(buttonName=="leftarrow")
{
current_scene_index--;
if(current_scene_index<0)
current_scene_index=0;
PlayerPrefs.SetInt("current_scene_index",current_scene_index);
Debug.Log("left  = "+current_scene_index);
}
select_scene_gui_texture.texture=scenes[current_scene_index];

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





