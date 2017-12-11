#pragma strict


/*
function OnTriggerEnter(col : Collider)
{
if(col.gameObject.tag=="can")
{
//Debug.Log("enter");
score.scores++;
score.total_can_falldown++;
GameObject.Find("blackboard").gameObject.SendMessage("showscore");
Destroy(gameObject);
}
}


*/
private var total_score:int;

var is_collide_with_ground:boolean=false;
var SoundCollisionWithGround : AudioClip;
var SoundCollisionWithWall: AudioClip;
var SoundCollisionWithball: AudioClip;
var is_fall_down_from_table:boolean=false;
private var is_sound_on:boolean;
static var currentSceneno:int;
private var is_scene_start_with_slow_motion_timer:boolean=false;
private var waittimer:float=0;
function Start () {
if(PlayerPrefs.GetInt("sound")==0)
is_sound_on=false;
else
is_sound_on=true;
}


function Update()
{

if(transform.position.y<=-15&&!is_fall_down_from_table)
{
is_fall_down_from_table=true;



score.total_can_falldown++;
score.scores=score.scores+Shooter.scoreMultiples;
//set_total_score();

GameObject.Find("score_board").gameObject.SendMessage("showscore");

}



if(is_scene_start_with_slow_motion_timer)
{
Time.timeScale=0.25;
waittimer+=Time.deltaTime;
if(waittimer>=0.5)
{

Time.timeScale=1;
is_scene_start_with_slow_motion_timer=false;
waittimer=0;
}
}



}

function OnCollisionEnter(col : Collision){
 if(!is_collide_with_ground)
  if(col.transform.tag == "ground")
 {
 if(is_sound_on)
 GetComponent.<AudioSource>().PlayOneShot(SoundCollisionWithGround);
is_collide_with_ground=true;



//Destroy(gameObject);
 }







 
 if(col.transform.tag == "launcher")
 {
 if(is_sound_on)
  GetComponent.<AudioSource>().PlayOneShot(SoundCollisionWithball);
  if(Shooter.total_throw_ball==5)
  is_scene_start_with_slow_motion_timer=true;

 }
}

function set_total_score()
{
total_score=PlayerPrefs.GetInt("Total Score"+currentSceneno);

PlayerPrefs.SetInt("Total Score"+currentSceneno,total_score+score.scores);
total_score=PlayerPrefs.GetInt("Total Score"+currentSceneno);
if(total_score>=9999)
{
PlayerPrefs.SetInt("Total Score"+currentSceneno,9999);
//total_score=PlayerPrefs.GetInt("Total Score"+currentSceneno);
}
}
