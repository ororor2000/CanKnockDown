#pragma strict
var yes_texture:Texture2D[];      //scores reprezent on board
var yes_renderer:Renderer[];


var no_texture:Texture2D[];      //scores reprezent on board
var no_renderer:Renderer[];

var lock_renderer:Renderer;
var lock_gameobject:Transform;


var left_renderer:Renderer;
var right_renderer:Renderer;
var scene_renderer:Renderer;

var left_arrow_Texture : Texture2D[];
var right_arrow_Texture : Texture2D[];
var Scene_normal_Texture : Texture2D[];
var Scene_rollover_Texture : Texture2D[];

var ButtonSound : AudioClip;

private var can_open_scene:boolean=true;
private var current_scene_index:int=0;
static var selected_scene_index:int=0;


private var variable_andle:float=0;
private var is_touchonscreen:boolean=false;

private var can_be_moved:boolean=false;


var selectscene:GameObject;

var left:GameObject;
var right:GameObject;


var textHints : GUIText;
var  Score_get_for_next_scene:int[];


private var is_sound_on:boolean;
private var unlock_scene:int=0;
private var open_scene_no:int=1;

var lock_texture : Texture2D[];

var finish_first= false;

var back : GUITexture;


function Start () {

//GameObject.Find("AdvertisementManager").SendMessage("enableAds");//-------------------

Time.timeScale=1;

Shooter.levelNo=1;
total_score=PlayerPrefs.GetInt("Total Score"+1);
left_renderer.transform.localPosition=Vector3(-32,-65,50);
//left_renderer.transform.localPosition=Vector3(-29,-57.83068,0);
//left_renderer.material.mainTexture=left_arrow_Texture[1];

if(PlayerPrefs.GetInt("sound")==0)
is_sound_on=false;
else
is_sound_on=true;

can_open_scene=true;
PlayerPrefs.SetInt("unlockscene"+1,1);
//PlayerPrefs.SetInt("unlockscene"+2,0);
//PlayerPrefs.SetInt("unlockscene"+3,0);
//PlayerPrefs.SetInt("unlockscene"+4,0);

textHints.GetComponent.<GUIText>().text="Points: "+total_score+"/"+Score_get_for_next_scene[0];

lock_renderer.GetComponent.<Renderer>().enabled=false;
lock_renderer.transform.localPosition.z=7;
//lock_renderer.animation.Play("slide4");

//yield WaitForSeconds(0.3);




//PlayerPrefs.SetInt("Total Score"+1,0);
//PlayerPrefs.SetInt("Total Score"+2,0);
//PlayerPrefs.SetInt("Total Score"+3,0);
//PlayerPrefs.SetInt("Total Score"+4,0);
openScenewindowshow(1);

finish_first= true;


}

function Update () {

//if(Input.GetMouseButtonDown(0) && back.HitTest(Input.mousePosition))
// 			
// 			{
//				Application.LoadLevel("mainmenu 1");
//			}


var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 
var hit : RaycastHit;
if (Physics.Raycast(ray.origin, ray.direction, hit))
{

if (Input.GetButtonDown ("Fire1"))
    {
    can_be_moved=false;
    is_touchonscreen=true;
    variable_andle=hit.point.x;
          if(hit.collider.tag == ("left"))
          {	
			if(finish_first == true){
			leftarrow();
			finish_first=false;
          	}
          }
          
         if(hit.collider.tag == ("right")){	
         	
			if(finish_first == true){
          		rightarrow();
          		finish_first=false;
          	}
          }
          
          
           if(hit.collider.tag == ("selectscene"))
         {
if(is_sound_on)
GetComponent.<AudioSource>().PlayOneShot(ButtonSound);
  //        Debug.Log("selectscene");
          scene_renderer.material.mainTexture=Scene_rollover_Texture[current_scene_index];
          }

         
         }
         
         
         
         if (Input.GetButtonUp("Fire1"))
    {
    
    can_be_moved=false;
    transform.eulerAngles = new Vector3(0,0 ,0);
    is_touchonscreen=false;
          if(hit.collider.tag == ("left"))
          {
 //         Debug.Log("leftup");
          }
         if(hit.collider.tag == ("right"))
         {

 //         Debug.Log("rightup");
          }
          
         if(hit.collider.tag == ("selectscene"))
         {select_scene();
//
  //        Debug.Log("selectsceneup");
          }
//
 //        Debug.Log("up");
         
         
         
         
         left_renderer.material.mainTexture=left_arrow_Texture[0];
         right_renderer.material.mainTexture=right_arrow_Texture[0];
         
         scene_renderer.material.mainTexture=Scene_normal_Texture[current_scene_index];
         }
         
         
         
      
         if(is_touchonscreen)
         {
         
         if(variable_andle-hit.point.x>5||variable_andle-hit.point.x<-5){
         
         can_be_moved=true;
        
         
         }
         }
         
         
         if(can_be_moved)
         {
          if(hit.point.x<30&&hit.point.x>-30)
         {
          transform.eulerAngles = new Vector3(0,hit.point.x ,0);
         }
         }

    
}

////onbackpress down
	//var admob : GameObject =new GameObject("Admob");
  if(Application.platform == RuntimePlatform.Android)
        {
           if (Input.GetKeyUp(KeyCode.Escape)) {
		   //admob.AddComponent("AdmobInterstitial");
           Application.LoadLevel("mainmenu 1"); 
           }
        }
        
        
    if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
    
    
     if (touch.phase == TouchPhase.Began){
     
         if (back.HitTest(touch.position)) {
        // var admob : GameObject =new GameObject("Admob");
		 //admob.AddComponent("AdmobInterstitial");
		 all_buttns_of_mainmenu.showAd = true;
		 Application.LoadLevel("mainmenu 1");
		}

	else if (touch.phase == TouchPhase.Ended){
     
         if (back.HitTest(touch.position)) {
        	  
//        	  Application.LoadLevel("mainmenu 1");
        	}
   		}
}
}
}

}

private var total_score:int;
private var sceneno:int;

function leftarrow()
{
left_renderer.material.mainTexture=left_arrow_Texture[1];

if(is_sound_on)
GetComponent.<AudioSource>().PlayOneShot(ButtonSound);

scene_renderer.GetComponent.<Animation>().Play("slide4");
lock_renderer.GetComponent.<Animation>().Play("slide4");
yield WaitForSeconds(1);
scene_renderer.GetComponent.<Animation>().Play("slide3");
yield WaitForSeconds(0.2);
finish_first = true;

current_scene_index--;
if(current_scene_index<0)
current_scene_index=0;
PlayerPrefs.SetInt("current_scene_index",current_scene_index);

scene_renderer.material.mainTexture=Scene_normal_Texture[current_scene_index];
sceneno=current_scene_index+1;



left_renderer.transform.localPosition=Vector3(-32,-65,50);


if(sceneno==1)
{
left_renderer.transform.localPosition=Vector3(-32,-65,50);

right_renderer.transform.localPosition=Vector3(32,-65,0);

}
else if(sceneno==2||sceneno==3)
{
left_renderer.transform.localPosition=Vector3(-32,-65,0);
right_renderer.transform.localPosition=Vector3(32,-65,0);

}
else if(sceneno==4)
{
left_renderer.transform.localPosition=Vector3(-32,-65,0);
right_renderer.transform.localPosition=Vector3(32,-65,0);
}
total_score=PlayerPrefs.GetInt("Total Score"+sceneno);



Debug.Log("obtotal_score = "+sceneno);
check_lockand_unlock_scene(sceneno,total_score);
openScenewindowshow(sceneno);
textHints.GetComponent.<GUIText>().text="Points:"+total_score+"/"+Score_get_for_next_scene[current_scene_index];
}

function rightarrow()
{

if(is_sound_on)
GetComponent.<AudioSource>().PlayOneShot(ButtonSound);
//Animations
scene_renderer.GetComponent.<Animation>().Play("slide2");
lock_renderer.GetComponent.<Animation>().Play("slide2");
right_renderer.material.mainTexture=right_arrow_Texture[1];
yield WaitForSeconds(1);
scene_renderer.GetComponent.<Animation>().Play("Slide");
yield WaitForSeconds(0.2);
finish_first = true;
current_scene_index++;
if(current_scene_index>3)
current_scene_index=3;

PlayerPrefs.SetInt("current_scene_index",current_scene_index);

scene_renderer.material.mainTexture=Scene_normal_Texture[current_scene_index];
sceneno=current_scene_index+1;


///////////////////////////
if(sceneno==1)
{
left_renderer.transform.localPosition=Vector3(-32,-65,50);

right_renderer.transform.localPosition=Vector3(32,-65,0);
}
else if(sceneno==2||sceneno==3)
{
left_renderer.transform.localPosition=Vector3(-32,-65,0);
right_renderer.transform.localPosition=Vector3(32,-65,0);

}
else if(sceneno==4)
{
left_renderer.transform.localPosition=Vector3(-32,-65,0);
right_renderer.transform.localPosition=Vector3(32,-65,50);
}
///////////////////////////


total_score=PlayerPrefs.GetInt("Total Score"+sceneno);
check_lockand_unlock_scene(sceneno,total_score);
Debug.Log("obtotal_score = "+sceneno);
openScenewindowshow(sceneno);
textHints.GetComponent.<GUIText>().text="Points:"+total_score+"/"+Score_get_for_next_scene[current_scene_index];;
}


function select_scene()
{
if(can_open_scene)
{
Application.LoadLevel("s"+open_scene_no+"_level1");
}
}

var scorrrr:int;

function check_lockand_unlock_scene(objsceneno:int,obtotal_score:int)
{

if(obtotal_score>=Score_get_for_next_scene[current_scene_index])
{
scorrrr=objsceneno+1;
PlayerPrefs.SetInt("unlockscene"+scorrrr,1);
//Debug.Log("obtotal_score = "+objsceneno+"= "+obtotal_score+" required score for next level  = "+Score_get_for_next_scene[current_scene_index]);

//can_open_scene=true;
//lock_renderer.renderer.enabled=false;
}

if(PlayerPrefs.GetInt("unlockscene"+objsceneno)==1)
{
lock_renderer.transform.localPosition.z=7;
//unlock_renderer.renderer.material=lock_texture[objsceneno];
lock_renderer.GetComponent.<Renderer>().enabled=false;


//lock_renderer.animation.Play("UnLock");
//yield WaitForSeconds(0.3);


can_open_scene=true;
open_scene_no=objsceneno;
}
else
{
//lock_renderer.transform.localPosition.z=-7;
can_open_scene=false;
//lock_renderer.material.mainTexture = lock_texture[current_scene_index];

lock_renderer.GetComponent.<Renderer>().enabled=true;//
//yield WaitForSeconds(0.5);
lock_renderer.GetComponent.<Animation>().Play("Lock");
}
}


function openScenewindowshow(objsceneno:int)
{
total_score=PlayerPrefs.GetInt("Total Score"+objsceneno);
if(total_score<=Score_get_for_next_scene[objsceneno-1])
Shooter.is_show_window_nextsceneopen=false;
else
Shooter.is_show_window_nextsceneopen=true;

}