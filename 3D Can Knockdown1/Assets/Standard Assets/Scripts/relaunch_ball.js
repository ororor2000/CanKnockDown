#pragma strict
var ballTexture:Texture2D;
var ballFinalTexture:Texture2D;
var BallRenderer:Renderer;
function OnCollisionEnter (col : Collision) {

  
  ///////////////////yaha par
if(Shooter.total_throw_ball<5)
{
  if (col.gameObject.tag == "ground"){
  

  //   GameObject.Find("new_ball").transform.position=Vector3(-0.2351856,35.56264,-51.45734);
     

     Shooter.is_demand_for_set_position_of_ball=false;
     Shooter.waittimer=0;

  if(Shooter.total_throw_ball<4)
  BallRenderer.material.mainTexture=ballTexture;
  else
  BallRenderer.material.mainTexture=ballFinalTexture;
  }
  
 //   if (col.gameObject.tag == "ball_stand"){
 // GameObject.Find("new_ball").transform.position=Vector3(-0.2351856,20.90785,-51.45734);

 // }
}


}