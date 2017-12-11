#pragma strict
var yes_texture:Texture2D[];      //scores reprezent on board
var yes_renderer:Renderer;

private var is_press_next_scene_btn:boolean=false;


var no_texture:Texture2D[];      //scores reprezent on board
var no_renderer:Renderer;
static var sceneno:int=1;
private var total_score:int;

static var waittimer:float=0;
function Start () {

}
function Update () {



var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 
var hit : RaycastHit;
if (Physics.Raycast(ray.origin, ray.direction, hit))
{
if (Input.GetButtonDown ("Fire1"))
    {
    
    
     
          if(hit.collider.tag == ("nextsceneplay"))
         {
          yes_renderer.GetComponent.<Renderer>().material.mainTexture=yes_texture[1];
         }
    
              if(hit.collider.tag == ("notnowplaynextscene"))
         {
         no_renderer.GetComponent.<Renderer>().material.mainTexture=no_texture[1];
        
         }
    
    
    }
    
    
    if (Input.GetButtonUp ("Fire1"))
    {
    
    
     
          if(hit.collider.tag == ("nextsceneplay"))
         {
         
         
         total_score=PlayerPrefs.GetInt("Total Score"+(sceneno-1));
Debug.Log("aaaaaaaaaaaaatotal score  = "+total_score+"sceneno"+sceneno);

PlayerPrefs.SetInt("Total Score"+(sceneno-1),total_score+score.scores);
total_score=PlayerPrefs.GetInt("Total Score"+(sceneno-1));
if(total_score>=9999)
{
PlayerPrefs.SetInt("Total Score"+(sceneno-1),9999);
}
total_score=PlayerPrefs.GetInt("Total Score"+(sceneno-1));

         Debug.Log("aaaaaaaaaatotal score  = "+total_score);
         is_press_next_scene_btn=true;
         Shooter.not_now_open_scene=false;
         Shooter.levelNo=1;
         
         score.total_can_falldown=0;
         score.scores=0;
//score.scores=PlayerPrefs.GetInt("Player Score");
          Shooter.total_throw_ball=0;
     
         Shooter.scoreMultiples=1;
         
         
    // .    
         }
    
              if(hit.collider.tag == ("notnowplaynextscene"))
         {
          transform.position=Vector3(100,23.77863,-52.66117);
          
          Shooter.not_now_open_scene=false;
         }
         no_renderer.GetComponent.<Renderer>().material.mainTexture=no_texture[0];
        yes_renderer.GetComponent.<Renderer>().material.mainTexture=yes_texture[0];
    
    }
    
    }
    
    

if(is_press_next_scene_btn)
{
waittimer+=Time.deltaTime;
if(waittimer>=0.5)
{

Application.LoadLevel("s"+sceneno+"_level1");

}
}


}