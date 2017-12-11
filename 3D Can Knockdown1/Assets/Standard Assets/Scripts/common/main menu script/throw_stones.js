#pragma strict

var StartingPosition : Transform[];
var EndingPosition : Transform[];
var Power:int[];
var speed:int[];
var projectile : Rigidbody;
private var waittimer:float=0;

private var random:int;
private var random_powerandspeed:int;
private var is_shoot_ball:boolean=false;

var simple_ball_texture : Texture2D[];
var _light:GameObject;
static var timer:float=0;


function Start () {
waittimer=0;
timer=0;
is_shoot_ball=false;
}

function Update () {


//all_buttns_of_mainmenu.creditOn = true;

if(crdit.is_credit_model_show==false)
{

waittimer+=Time.deltaTime;
if(waittimer>6)
{
if(all_buttns_of_mainmenu.creditOn == false){
waittimer=0;
Application.LoadLevel("mainmenu 1");
}

Debug.Log("random ="+random);
}
if(is_shoot_ball==false)
{
random=Random.Range(0, 6);

is_shoot_ball=true;
var instance: Rigidbody = Instantiate(projectile, StartingPosition[random].position,Quaternion.identity);
random_powerandspeed=Random.Range(0, 6);

 instance.AddForce(( EndingPosition[random].position  - StartingPosition[random].position )*Power[random_powerandspeed]);
 instance.velocity=speed[random_powerandspeed]*Vector3(0,1,0);
 instance.GetComponent.<Renderer>().material.mainTexture=simple_ball_texture[random_powerandspeed];
}


















//////////////////////
/////////////////////
////////////////////
///////////////////
//////////////////
}


if(timer<1)
{
timer+=Time.deltaTime;
 
}   
//        if(timer>=0.3)
//{
//
//  if(Application.platform == RuntimePlatform.Android)
//        {
//        
//        if (Input.GetKeyDown(KeyCode.Escape)){}
//          	if (Input.GetKeyUp(KeyCode.Escape)) {  
////			Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=902683985");  
//			Application.Quit();}
//
//}
//        }
}

