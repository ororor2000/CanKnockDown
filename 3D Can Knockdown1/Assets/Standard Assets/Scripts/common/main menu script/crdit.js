#pragma strict
static var is_credit_model_show:boolean=false;
var gameobject_mainmenu:GameObject;
var Directional_light:GameObject;
var credit_p:GameObject;
function Start () {
is_credit_model_show=false;
}

function Update () {
if(is_credit_model_show)
{
set_position_of_credit_model();


////onbackpress down
  if(Application.platform == RuntimePlatform.Android)

        {
            if (Input.GetKey(KeyCode.Escape))

            {
            throw_stones.timer=0;
is_credit_model_show=false;
credit_p.transform.position=Vector3(-0.229269,-38.64478,-16.00513);
//Directional_light.transform.Rotate(Vector3(-27.12477,-113.5311,-124.6378));
Directional_light.GetComponent.<Light>().intensity=0.5;
gameobject_mainmenu.transform.position=Vector3(5.985736,24.55884,19.1217);

                return;

            }
            
            
        
            
            


        }

}
}

function credit_menu_call()
{
is_credit_model_show=true;
gameobject_mainmenu.transform.position=Vector3(10,10,10);
Directional_light.GetComponent.<Light>().intensity=0;

}

function set_position_of_credit_model()
{

if(credit_p.transform.position.y<77.66246)
{
credit_p.transform.position.y=credit_p.transform.position.y+20*Time.deltaTime;
}
else
credit_p.transform.position.y=-39;

}

 
