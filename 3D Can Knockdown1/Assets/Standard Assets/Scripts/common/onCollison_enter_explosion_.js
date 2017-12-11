var power : float;
var radius : float;
var upModifier : float;
var particals_system : Transform;
private var theClonedExplosion : Transform;
var ob_partical_position:Transform;
function add_explosion()
{
  var explosionPos : Vector3 = transform.position;
    //var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
  theClonedExplosion = GameObject.Instantiate(particals_system,ob_partical_position.transform.position, transform.rotation);
  
  
//    for(var i:int=1;i<=5;i++)
 //   {
 //   GameObject.Find("can_"+i).rigidbody.AddExplosionForce(power, explosionPos, radius,upModifier);
 //   }
 
 
 for(var can : GameObject in GameObject.FindGameObjectsWithTag("can"))
 {
 can.GetComponent.<Rigidbody>().AddExplosionForce(power, explosionPos, radius,upModifier);
 }
 for(var can : GameObject in GameObject.FindGameObjectsWithTag("extra"))
 {
 can.GetComponent.<Rigidbody>().AddExplosionForce(power, explosionPos, radius,upModifier);
 }
  for(var can : GameObject in GameObject.FindGameObjectsWithTag("Explosion_can"))
 {
 can.GetComponent.<Rigidbody>().AddExplosionForce(power, explosionPos, radius,upModifier);
 }
   for(var ball : GameObject in GameObject.FindGameObjectsWithTag("launcher"))
 {
 ball.GetComponent.<Rigidbody>().AddExplosionForce(power, explosionPos, radius,upModifier);
 }

      Destroy(gameObject);
}
function OnCollisionEnter (col : Collision) {

  
  if (col.gameObject.tag == "launcher"){
 add_explosion();
 /////////////haya par
  if(Shooter.total_throw_ball>=5)
 {
Shooter.is_last_ball_collide_with_any_can=true;
 }
  }
}



/*
var power : float;
var radius : float;
var upModifier : float;
var particals_system : Transform;
private var theClonedExplosion : Transform;

function add_explosion()
{
  var explosionPos : Vector3 = transform.position;
    var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
  theClonedExplosion = GameObject.Instantiate(particals_system,transform.position, transform.rotation);
    for (var hit : Collider in colliders) {
        if (!hit)
            continue;
        
      //  if (hit.rigidbody)
       //    hit.rigidbody.AddExplosionForce(power, explosionPos, radius,upModifier);
          GameObject.FindWithTag("can").rigidbody.AddExplosionForce(power, explosionPos, radius,upModifier);
    }
      Destroy(gameObject);
}
function OnCollisionEnter (col : Collision) {

  
  if (col.gameObject.tag == "launcher"){
 add_explosion();
  }
}

*/