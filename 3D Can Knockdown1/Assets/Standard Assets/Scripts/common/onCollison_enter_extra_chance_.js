var particals_system : Transform;
private var theClonedExplosion : Transform;
var ob_partical_position:Transform;
var ExtraEffect : Rigidbody;



function OnCollisionEnter (col : Collision) {

  
  if (col.gameObject.tag == "launcher"){
 theClonedExplosion =Instantiate(particals_system,ob_partical_position.transform.position, Quaternion.Euler(0, 180, 0));
 if(Shooter.total_throw_ball>0)
Shooter.total_throw_ball--;
 if(Shooter.total_throw_ball>0)
Shooter.total_throw_ball--;
GameObject.Find("score_board").gameObject.SendMessage("throw_stone");
 Destroy(gameObject);
  var instance: Rigidbody = Instantiate(ExtraEffect, ob_partical_position.transform.position,Quaternion.Euler(0, 180, 0));
  
 instance.velocity=100*Vector3(0,1,0);

  }
}