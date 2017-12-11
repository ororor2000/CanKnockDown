
var particals_system : Transform;
var ob_partical_position:Transform;
private var theClonedExplosion : Transform;

function OnCollisionEnter (col : Collision) {

  
  if (col.gameObject.tag == "launcher"){
theClonedExplosion =Instantiate(particals_system,ob_partical_position.transform.position, transform.rotation);

////////////////////////////hahaprar
 if(Shooter.total_throw_ball>=5)
 {
 Shooter.is_last_ball_collide_with_any_can=true;
 }
  }
}