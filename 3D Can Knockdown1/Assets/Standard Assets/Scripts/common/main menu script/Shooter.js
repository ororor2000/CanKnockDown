import System.Collections.Generic;
var slowMotion:float=0.1;
var levelToLoad : String;

private var APP_IDS = new Dictionary.<String, String>();
APP_IDS["Android"] = "copy your Android RevMob App ID here";
//private var revmob:RevMob;

var sceneNo:int=1;
static var levelNo:int=1;
private var power : float = 60;
private var projectileSpeed :float=20;
static var total_throw_ball:int=0;
var total_box:int;
static var totalCan:int=10;
var gravity:float=-100;

static var waittimer:float=0;


static var scoreMultiples:int=1;

private var waittimer_for_game_complete:float=0;
static var ball_throw_per_level:int=0;
static var wait_after_lastballthrow:float=0;

static var is_game_over:boolean=false;
static var is_stone_throw:boolean=false;
static var is_game_completed:boolean=false;

static var is_new_record_found:boolean=false;
static var is_last_ball_collide_with_any_can:boolean=false;
static var is_demand_for_set_position_of_ball:boolean=false;
private var balls_for_this_level:int=0;

static var stone_throw_in_single_level:int=0;


var projectile : Rigidbody;


private var best_score:int;
var final_ball_texture : Texture2D;
var simple_ball_texture : Texture2D;
var ballModel : Renderer;
private var is_sound_on:boolean;
var swapslow: AudioClip;
var swapmediumslow: AudioClip;
var swapfast: AudioClip;
var swapmediumfast: AudioClip;

var Level_completed: AudioClip;
var Level_failed: AudioClip;

var LevelnoTexture : Texture2D[];
var levelnoObject:GameObject;
var handHelpObject:GameObject;

private var total_score:int;
var nextscene_window_open : GameObject;
static var is_show_window_nextsceneopen:boolean=false;
static var not_now_open_scene:boolean=false;
static var each_screen_score = [2000, 4000,5000, 6000];


function Start () {
    //GameObject.Find("level_completed").gameObject.SendMessage("deactivate_gameobject");
    //total_throw_ball=0;
    //total_score=PlayerPrefs.GetInt("Total Score"+sceneNo);
    //PlayerPrefs.DeleteAll();

    Time.timeScale=1;
    Physics.gravity = Vector3(0, gravity, 0);
    onbackpress.sceneno=sceneNo;
    waittimer=0;
    totalCan=total_box;
    waittimer_for_game_complete=0;
    stone_throw_in_single_level=0;
    score.total_can_falldown=0;
    ball_throw_per_level=0;
    wait_after_lastballthrow=0;

    balls_for_this_level=0;
    is_game_completed=false;
    is_new_record_found=false;
    is_stone_throw=false;
    is_game_over=false;

    is_last_ball_collide_with_any_can=false;
    is_demand_for_set_position_of_ball=false;



    if(PlayerPrefs.GetInt("sound")==0)
        is_sound_on=false;
    else
        is_sound_on=true;

    level_no_show();
    show_handHelp();
}

function Update() {
    //Time.timeScale = 0.1;

    if(not_now_open_scene==false){
        if(onbackpress.is_back_press==false)
            throw_stone();

        //print("nexts");
        next_level_load();

        next_ball_load();





        best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
	
        if(score.scores>best_score)
        {
            best_score=score.scores;
            PlayerPrefs.SetInt("BestScore"+sceneNo,best_score);
            GameObject.Find("score_board").gameObject.SendMessage("best_scoreshow");
	
            is_new_record_found=true;
        }
	
        if(is_new_record_found)
            newrecord();
	
        //Camera.main.transform.Translate(0,1,0);
        /*if(is_game_over==true)
        {
        waittimer+=Time.deltaTime;
        //Debug.Log("timer  ="+waittimer);
        if(waittimer>=3)
        {
        
        
        score.total_can_falldown=0;
        score.scores=0;
        total_throw_ball=0;
        
        score.total_can_falldown=0;
        Application.LoadLevel("level1");
        waittimer=0;
        
        
        }
        }
        */



        wait_after_lastball_throw();
        movehandhelpmodel();
        //move_level_failed();
    }
}


function throw_stone()
{


    if(total_throw_ball<5)
    {





        var hit  : RaycastHit ;
        if(throw_ball_calculation.islaunch_ball&&Input.GetButtonUp("Fire1")){
  
            //if(Physics.Raycast (ray, hit, Mathf.Infinity))

            throw_ball_calculation.islaunch_ball=false;
            var ray : Ray  = Camera .main .ScreenPointToRay (Input .mousePosition );
            if (Physics.Raycast(ray.origin, ray.direction, hit))
            {
                Debug.DrawLine(ray.origin,hit.point,Color.red);
                GameObject.Find("shooter1").SendMessage("set_speedandpower");
                power=throw_ball_calculation.definepower;
                projectileSpeed=throw_ball_calculation.definespeed;
                var instance: Rigidbody = Instantiate(projectile, transform.position,Quaternion.identity);
     
                //       Debug.Log("transform.position  ="+transform.position);
                //       Debug.Log("hit.point  ="+hit.point);
                //   GameObject.Find("new_ball").rigidbody.AddForce(( hit.point - transform.position )*power);;
                instance.AddForce(( hit.point - transform.position )*power);
                instance.velocity=projectileSpeed*Vector3(0,1,0);
                //      GameObject.Find("new_ball").rigidbody.velocity=projectileSpeed*Vector3(0,1,0);
                //      GameObject.Find("new_ball").transform.localScale=Vector3(3,3,3);
                total_throw_ball++;
                ball_throw_per_level++;
        
                balls_for_this_level++;
                is_stone_throw=true;
                stone_throw_in_single_level++;
                Debug.Log("total_throw_ball total_throw_ball =  "+total_throw_ball);
                GameObject.Find("score_board").gameObject.SendMessage("throw_stone");
                GameObject.Find("new_ball").gameObject.SendMessage("reset_position_of_ball");
        
                is_demand_for_set_position_of_ball=true;
                swap_sound();

                waittimer=0;
        
                show_window_nextsceneopen();
                if(total_throw_ball<=4)
                    instance.GetComponent.<Renderer>().material.mainTexture=simple_ball_texture;
                else
                    instance.GetComponent.<Renderer>().material.mainTexture=final_ball_texture;


            }//if(Physics.Raycast (ray, hit, Mathf.Infinity))
            // else
       



        }//if(Input.GetButtonUp("Fire1"))


    }//if(is_game_over)


    ///find out that is game over
    if(!is_game_over)
    {
        if(total_throw_ball>=5)
        {

            //Destroy( GameObject.Find("new_ball").gameObject);






            //score.total_can_falldown=0;
            //score.scores=0;
            //total_throw_ball=0;
            throw_ball_calculation.islaunch_ball=false;
            stone_throw_in_single_level=0;
            PlayerPrefs.SetInt("Player Score",score.scores);





            //////////////extreedd
        }//if(total_throw_ball>=5)


    }//if(!is_game_over)

}//throw_stone()

private var is_level_completed_sound_play=false;
////////////////////////////////
///////////////////////////////
////////////////////////////////
///////////////////////////////
///////////////////////////////next level load
//////////////////////////////
////////////////////////////////
function next_level_load()
{
    if(score.total_can_falldown>=total_box)
    {
        if(is_level_completed_sound_play==false)
        {
            //Debug.Log("sinple time open  = "+waittimer_for_game_complete);
            scores_multiple();

        }
        if(is_sound_on&&is_level_completed_sound_play==false)
        {
            GetComponent.<AudioSource>().PlayOneShot(Level_completed);
            is_level_completed_sound_play=true;
            is_game_completed=true;
        }
 

        waittimer_for_game_complete+=Time.deltaTime;
        //Debug.Log("timer  ="+waittimer);
        if(waittimer_for_game_complete>=3)
        {
            score.total_can_falldown=0;
            if(total_throw_ball>0)
                total_throw_ball--;
            levelNo++;
            waittimer_for_game_complete=0;
            Application.LoadLevel(levelToLoad);

        }


    }

}//next_level_load()


///////////////////////////
///////////////////////////
///////////////////////////next ball load

/////////////////////////////////////////
function next_ball_load()
{


    if(total_throw_ball<5)
    {

        if(is_demand_for_set_position_of_ball&&total_throw_ball<=4)
        {
            GameObject.Find("new_ball").gameObject.SendMessage("reset_position_of_ball");
            is_demand_for_set_position_of_ball=false;
            setballmovements.is_setposition_of_ball=true;




        }//if(is_demand_for_set_position_of_ball)

        if(total_throw_ball<4)
            ballModel.material.mainTexture=simple_ball_texture;
        else
            ballModel.material.mainTexture=final_ball_texture;
    }

}//next_ball_load()


static var is_move_levelfailed:boolean=false;


function wait_after_lastball_throw()
{

    if(!is_game_over&&is_game_completed==false)
    {
        if(is_last_ball_collide_with_any_can)
        {

            waittimer+=Time.deltaTime;
            if(waittimer>=10)
            {
                score.total_can_falldown=0;
                waittimer=0;
                is_game_over=true;
            }
        }//if(is_last_ball_collide_with_any_can)

        else if(total_throw_ball>=5)
        {

            waittimer+=Time.deltaTime;
            if(waittimer>=5)
            {
                score.total_can_falldown=0;
                waittimer=0;
                if(!is_last_ball_collide_with_any_can)
                    is_game_over=true;
            }
        }

        if(is_game_over)
        {

            if(is_sound_on)
                GetComponent.<AudioSource>().PlayOneShot(Level_failed);

            //GameObject.FindWithTag("replay").guiTexture.enabled=true;
            GameObject.Find("levelfailed").gameObject.SendMessage("best_score_show");
            GameObject.Find("levelfailed").gameObject.SendMessage("totalscore_show");
            //GameObject.Find("levelfailed").transform.position=Vector3(22.24615,41.87138,12.034);
            GameObject.Find("levelfailed").gameObject.SendMessage("play");

            is_move_levelfailed=true;
            //if(GameObject.Find("levelfailed").transform.position.y>1.496796)
            //GameObject.Find("levelfailed").transform.position.y= handhelp.transform.position.y+0.1;
        }


    }//if(is_game_over)
}//wait_after_lastball_throw()


function move_level_failed()
{
    if(is_move_levelfailed)
        if(GameObject.Find("levelfailed").transform.position.x>1.496796)
            GameObject.Find("levelfailed").transform.position.x= GameObject.Find("levelfailed").transform.position.x-0.5;

}

function newrecord()
{
    if(GameObject.Find("newrecord").transform.position.z<=94)
        GameObject.Find("newrecord").transform.position.z= GameObject.Find("newrecord").transform.position.z+3;

}




function swap_sound()
{
    power=throw_ball_calculation.definepower;
 
 
    if(is_sound_on){
        if(power==250||power==140)
            GetComponent.<AudioSource>().PlayOneShot(swapmediumslow);
    else  if(power==100)
        GetComponent.<AudioSource>().PlayOneShot(swapmediumfast);
    else  if(power==60||power==45)
        GetComponent.<AudioSource>().PlayOneShot(swapmediumslow);
    else  if(power==32)
        GetComponent.<AudioSource>().PlayOneShot(swapslow);
    }
 

    // audio.PlayOneShot(swapmediumslow);
}

function scores_multiple()
{




    //Debug.Log("score.total_can_falldown= "+score.total_can_falldown+"  totalCan=  "+totalCan+"   ball_throw_per_level= "+ball_throw_per_level);
    if(ball_throw_per_level>1)
    {
        scoreMultiples=1;
    }
    if(ball_throw_per_level==1&&scoreMultiples<9)
    {
        scoreMultiples++;
    }

}


private var mod1:GameObject;
private var mod2:GameObject;
private var mod3:GameObject;
private var mod4:GameObject;
private var mod5:GameObject;
private var mod6:GameObject;
function level_no_show()
{
    if(sceneNo==1)
        show_level_no_scene1();
    if(sceneNo==2)
        show_level_no_scene2();
    if(sceneNo==3)
        show_level_no_scene3();
    if(sceneNo==4)
        show_level_no_scene4();
}
function show_level_no_scene1()
{
    if(levelNo<=5)
    {
        //Debug.Log("1");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-1];
    }
    else if(levelNo>5&&levelNo<=10)
    {
        //Debug.Log("6");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-3.671444,83.88792,97.0463),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-6];

    }
    else if(levelNo>10&&levelNo<=15)
    {
        //Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-3.671444,83.88792,97.0463),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(8.63786,83.88792,97.0463),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-11];
    }
    else if(levelNo>15&&levelNo<=20)
    {
        //Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-3.671444,83.88792,97.0463),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(8.63786,83.88792,97.0463),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-16.50935,76.1657,97.0463),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-16];
    }

    else if(levelNo>20&&levelNo<=25)
    {
        //Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-3.671444,83.88792,97.0463),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(8.63786,83.88792,97.0463),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-16.50935,76.1657,97.0463),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(-3.671444,76.1657,97.0463),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-21];
    }
    else if(levelNo>25&&levelNo<=30)
    {
        //Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-16.50935,83.88792,97.0463),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-3.671444,83.88792,97.0463),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(8.63786,83.88792,97.0463),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-16.50935,76.1657,97.0463),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(-3.671444,76.1657,97.0463),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod6= Instantiate(levelnoObject,Vector3(8.63786,76.1657,97.0463),Quaternion.identity);
        mod6.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-26];
    }
}




function show_level_no_scene2()
{
    if(levelNo<=5)
    {
        Debug.Log("1");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-1];
    }
    else if(levelNo>5&&levelNo<=10)
    {
        Debug.Log("6");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(27.94358,-36.12883,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-6];

    }
    else if(levelNo>10&&levelNo<=15)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(27.94358,-36.12883,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(40.02477,-36.12883,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-11];
    }
    else if(levelNo>15&&levelNo<=20)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(27.94358,-36.12883,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(40.02477,-36.12883,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(15.86239,-43.47758,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-16];
    }

    else if(levelNo>20&&levelNo<=25)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(27.94358,-36.12883,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(40.02477,-36.12883,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(15.86239,-43.47758,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(27.94358,-43.47758,96.52193),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-21];
    }
    else if(levelNo>25&&levelNo<=30)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(15.86239,-36.12883,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(27.94358,-36.12883,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(40.02477,-36.12883,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(15.86239,-43.47758,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(27.94358,-43.47758,96.52193),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod6= Instantiate(levelnoObject,Vector3(40.02477,-43.47758,96.52193),Quaternion.identity);
        mod6.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-26];
    }
}

function show_level_no_scene3()
{
    if(levelNo<=5)
    {
        Debug.Log("1");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-1];
    }
    else if(levelNo>5&&levelNo<=10)
    {
        Debug.Log("6");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-18.10117,-22.70735,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-6];

    }
    else if(levelNo>10&&levelNo<=15)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-18.10117,-22.70735,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-5.970985,-22.70735,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-11];
    }
    else if(levelNo>15&&levelNo<=20)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-18.10117,-22.70735,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-5.970985,-22.70735,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-30.23136,-29.808,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-16];
    }

    else if(levelNo>20&&levelNo<=25)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-18.10117,-22.70735,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-5.970985,-22.70735,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-30.23136,-29.808,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(-18.10117,-29.808,96.52193),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-21];
    }
    else if(levelNo>25&&levelNo<=30)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-30.23136,-22.70735,96.52193),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-18.10117,-22.70735,96.52193),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-5.970985,-22.70735,96.52193),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(-30.23136,-29.808,96.52193),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(-18.10117,-29.808,96.52193),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod6= Instantiate(levelnoObject,Vector3(-5.970985,-29.808,96.52193),Quaternion.identity);
        mod6.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-26];
    }
}


function show_level_no_scene4()
{
    if(levelNo<=5)
    {
        Debug.Log("1");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-1];
    }
    else if(levelNo>5&&levelNo<=10)
    {
        Debug.Log("6");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-14.2762,118.2591,96.17793),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-6];

    }
    else if(levelNo>10&&levelNo<=15)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-14.2762,118.2591,96.17793),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-1.710201,118.2591,96.17793),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-11];
    }
    else if(levelNo>15&&levelNo<=20)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-14.2762,118.2591,96.17793),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-1.710201,118.2591,96.17793),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(10.8558,118.2591,96.17793),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-16];
    }

    else if(levelNo>20&&levelNo<=25)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-14.2762,118.2591,96.17793),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-1.710201,118.2591,96.17793),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(10.8558,118.2591,96.17793),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(22.70381,118.2591,96.17793),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-21];
    }
    else if(levelNo>25&&levelNo<=30)
    {
        Debug.Log("12");
        mod1 = Instantiate(levelnoObject,Vector3(-27.91928,118.2591,96.17793),Quaternion.identity);
        mod1.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod2= Instantiate(levelnoObject,Vector3(-14.2762,118.2591,96.17793),Quaternion.identity);
        mod2.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod3= Instantiate(levelnoObject,Vector3(-1.710201,118.2591,96.17793),Quaternion.identity);
        mod3.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod4= Instantiate(levelnoObject,Vector3(10.8558,118.2591,96.17793),Quaternion.identity);
        mod4.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod5= Instantiate(levelnoObject,Vector3(22.70381,118.2591,96.17793),Quaternion.identity);
        mod5.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[4];
        mod6= Instantiate(levelnoObject,Vector3(35.26981,118.2591,96.17793),Quaternion.identity);
        mod6.GetComponent.<Renderer>().material.mainTexture=LevelnoTexture[levelNo-26];
    }
}
private var handhelp:GameObject;
private var is_hand_created:boolean=false;
function show_handHelp()
{
    if(levelNo==1)
    {
        handhelp= Instantiate(handHelpObject,Vector3(0.483556,21.2562,-52.49283),Quaternion.identity);
        is_hand_created=true;
    }

}

function movehandhelpmodel()
{
    if(levelNo==1&&is_hand_created)
    {
        if(handhelp.transform.position.y<24.06278)
            handhelp.transform.position.y= handhelp.transform.position.y+0.05;
        else
            handhelp.transform.position.y=21.2562;
        if(throw_ball_calculation.islaunch_ball)
            handhelp.transform.position.x=30;

    }
}

function show_window_nextsceneopen()
{

    total_score=PlayerPrefs.GetInt("Total Score"+sceneNo);
    Debug.Log("total score  = "+(total_score+score.scores)+"each_screen_score[sceneNo-1]=  "+each_screen_score[sceneNo-1]);
    if((total_score+score.scores)>=each_screen_score[sceneNo-1])
    {
        if(!is_show_window_nextsceneopen&&sceneNo<4){
            //onbackpress.is_back_press=true;
            var instance: GameObject = Instantiate(nextscene_window_open,Vector3(1.2,32,-52.66117),Quaternion.identity);
            is_show_window_nextsceneopen=true;
            not_now_open_scene=true;
            nextsceneplayscenewindow.sceneno=sceneNo+1;
        }
    }

}