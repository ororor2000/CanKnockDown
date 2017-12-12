#pragma strict
private var timer:float=0;;
static var islaunch_ball:boolean=false;

static var definespeed:float;
static var definepower:float;
static var timer_for_next_ball:float;
var speed:float=25;
var power:float=140;

static var click:int=0;
var swapslow: AudioClip;
var swapmediumslow: AudioClip;
var swapfast: AudioClip;
var swapmediumfast: AudioClip;

var rotationSpeed : float = 100;
var hittingbb:float=0.0;
function Start()
{
    timer=0;
    islaunch_ball=false;
}

function Update() {


    if(onbackpress.is_back_press==false){
        var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 
        var hit : RaycastHit;
        if (Physics.Raycast(ray.origin, ray.direction, hit))
        {


            // Debug.Log("no=  "+islaunch_ball);
            if(islaunch_ball)
            {
                timer+=Time.deltaTime;
                if(hit.collider.tag == ("newball"))
                    GameObject.Find("new_ball").transform.position.x=hit.point.x;



                var hitting = hit.point.x;
                //Debug.Log("hitting"+hitting);
                if(hitting <hittingbb){
                    GameObject.Find("new_ball").transform.Rotate(Vector3(0,0,rotationSpeed* Time.deltaTime));
                }
                if(hitting >hittingbb){
                    GameObject.Find("new_ball").transform.Rotate(Vector3(0,0,-rotationSpeed* Time.deltaTime));
                }
	
                hittingbb = hit.point.x;
                //	Debug.Log("hittingbb"+hittingbb);


            }
            else
            {
                //Debug.Log("timer  ="+timer);
                set_speedandpower();
                timer=0;
            }
     
            //Debug.Log("timer  =  "+timer);
        
        }
        if (Input.GetButtonDown ("Fire1"))
        {
            if(hit.collider.tag == ("newball"))
            {
        
       
                click++;
                // a++;
                // Application.LoadLevel("introduccion");
                islaunch_ball=true;
           
                //           Debug.Log("islaunch_ball  ="+islaunch_ball+" click ="+click);

        
            }
        
       
        }
    
        if(Input.GetButtonUp("Fire1"))
        {
        
            if(hit.collider.tag == ("newball")||hit.collider.tag=="ball_stand")
            {
        
                // a++;
                // Application.LoadLevel("introduccion");
                islaunch_ball=false;
                //             Debug.Log("islaunch_ball  ="+islaunch_ball);

            }
    
   
        }

  

    }
}

function set_speedandpower()
{
    if(timer<=0.5)
    {
        //if(islaunch_ball)
        // audio.PlayOneShot(swapmediumslow);
        timer_for_next_ball=0.5;
        definepower=250;
        definespeed=15;
    }
    else if(timer>0.5&&timer<=0.7)
    {
        timer_for_next_ball=0.8;
        definepower=140;
        definespeed=25;
    }
    else if(timer>0.7&&timer<=0.9)
    {
        timer_for_next_ball=1;
        definepower=100;
        definespeed=30;
    }
    else if(timer>0.9&&timer<=1.2)
    {
        timer_for_next_ball=1.2;
        definepower=60;
        definespeed=40;
    }
    else if(timer>1.2&&timer<=1.5)
    {
        timer_for_next_ball=1.5;
        definepower=45;
        definespeed=60;
    }

    else if(timer>1.5)
    {
        timer_for_next_ball=2;
        definepower=32;
        definespeed=80;
    }
}

/*
function set_speedandpower()
{


definespeed=speed;
definepower=power;




}
*/
