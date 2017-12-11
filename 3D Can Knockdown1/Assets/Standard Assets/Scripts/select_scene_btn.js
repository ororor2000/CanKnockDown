#pragma strict
var gui_texture : GUITexture;	
var select_scene_gui_texture : GUITexture;
var beep : AudioClip;

private var current_scene_index:int;
static var selected_scene_index:int=0;
private var unlock_scene:int=0;


function Start()
{
current_scene_index=PlayerPrefs.GetInt("current_scene_index");
unlock_scene=PlayerPrefs.GetInt("unlock_scene");
}
function OnMouseUp(){
//gui_texture.enabled=false;

select_scene();
//if(buttonName=="credit")
}

function select_scene()
{

current_scene_index=PlayerPrefs.GetInt("current_scene_index");
selected_scene_index=current_scene_index;
Debug.Log("unlock_scene = "+unlock_scene);


if(selected_scene_index<=unlock_scene)
{
Application.LoadLevel("level1");
}
//Print("selected_scene_index = "+selected_scene_index);
}

function Update(){
	
	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {


       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
        select_scene();
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {

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





