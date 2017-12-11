var posCam1 : Transform;
var posCam2 : Transform;
 
var positionCurrent : Transform;
 
var object_position : GameObject;
 
var speedAdjust : float;


static var is_setposition_of_ball:boolean=true;

function Start()
{
is_setposition_of_ball=true;
}
function moveball (){

     
     if(is_setposition_of_ball)
     {
     GameObject.Find("new_ball").transform.position.x= GameObject.Find("new_ball").transform.position.x-0.1;
    if(GameObject.Find("new_ball").transform.position.x<=0)
    {
    is_setposition_of_ball=false;

    }
    }
    else
    {
    
    }
}

function Update () {
    moveball();
}


function reset_position_of_ball()
{


if(is_setposition_of_ball==false)
{
 GameObject.Find("new_ball").transform.position=posCam1.transform.position;;

}


 
}
