#pragma strict

var power : float = 1000;
var projectile : Rigidbody;
var projectileSpeed :float=20;
function Start () {
var instance: Rigidbody = Instantiate(projectile, transform.position,transform.rotation);

instance.AddForce(Vector3(0,0,1)*power);
instance.velocity=Vector3(0,0,1)*projectileSpeed;
}

function Update () {

}