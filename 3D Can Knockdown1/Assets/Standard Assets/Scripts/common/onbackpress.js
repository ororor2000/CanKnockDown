#pragma strict

var yes_texture:Texture2D[];      //scores reprezent on board
var yes_renderer:Renderer;

var no_texture:Texture2D[];      //scores reprezent on board
var no_renderer:Renderer;

var scene_name:String;
var Soundbtn: AudioClip;

static var is_back_press:boolean;

private var is_nobtn_press:boolean;
private var total_score:int;

private var is_sound_on:boolean;
private var is_music_on:boolean;
static var sceneno:int=1;

public var yes : GameObject;
public var no : GameObject ;
public var unityAd : GameObject ;
public static var ads: boolean = false;

var escape = false;



function Start () {
PlayerPrefs.SetInt("paused",0);
//GameObject.Find("AdvertisementManager").SendMessage("enableAds");//-------------------------------
yes = GameObject.Find("yes");
no = GameObject.Find("no");
yes.SetActive(false);
no.SetActive(false);
is_back_press=false;
is_nobtn_press=false;

if(PlayerPrefs.GetInt("sound")==0)
is_sound_on=false;
else
is_sound_on=true;

if(PlayerPrefs.GetInt("music")==0)
is_music_on=false;
else
is_music_on=true;


//if(!audio.playOnAwake) {
if(is_music_on)
   GetComponent.<AudioSource>().Play(); // Play the clip if it wasn't set to play on awake
    //    }
}

function Update () {


if(is_back_press&&Shooter.is_game_over==false)
{

yes_no_come_front();
}

if(is_nobtn_press)
{
yes_no_come_back();
}

var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 
var hit : RaycastHit;
if (Physics.Raycast(ray.origin, ray.direction, hit))
{
if (Input.GetButtonDown ("Fire1"))
    {
        
         
//         var admob : GameObject = new GameObject("Admob");
         
          if(hit.collider.tag == ("back"))
         {
         if(is_sound_on)
         GetComponent.<AudioSource>().PlayOneShot(Soundbtn);
         is_nobtn_press = false;
        is_back_press=true;
        if(ads){
        PlayerPrefs.SetInt("paused",1);
           GameObject.Find ("Admob").SendMessage ("ShowInterstitial");
        ads = false;
        }
        else{
        GameObject.Find ("Admob").SendMessage ("ShowInterstitial");
//        unityAd.SetActive(true);
        ads = true;
        }
//		Adunion4Unity.Instance.showInterstitialAd(Adunion4Unity.IAD_TYPE_GAMEPAUSE);
//        GameObject.Find("backPress").SendMessage("playAds");
        Debug.Log("send");
         }
         
         if(hit.collider.tag == ("replay"))
         {
         if(is_sound_on)
         GetComponent.<AudioSource>().PlayOneShot(Soundbtn);
         score.total_can_falldown=0;
         score.scores=0;
//score.scores=PlayerPrefs.GetInt("Player Score");
          Shooter.total_throw_ball=0;
          Application.LoadLevel(scene_name);
          Shooter.scoreMultiples=1;
          Shooter.levelNo=1;
          //var admob : GameObject = new GameObject("Admob");
		  //admob.AddComponent("AdmobInterstitial");
          //GameObject.Find("rePlayAds").SendMessage("playAds");
          Debug.Log("send");
         }
         
         
        if(hit.collider.tag == ("yes"))
        {
        if(is_sound_on)
        GetComponent.<AudioSource>().PlayOneShot(Soundbtn);
        
       yes_renderer.GetComponent.<Renderer>().material.mainTexture=yes_texture[1];
         
         }
         if(hit.collider.tag == ("no"))
         {
         if(is_sound_on)
         GetComponent.<AudioSource>().PlayOneShot(Soundbtn);
 		 no_renderer.GetComponent.<Renderer>().material.mainTexture=no_texture[1];
         
//         GameObject.Find("AdvertisementManager").SendMessage("disableAds");//----------------------------------
         }
         
        }
        
        
        if (Input.GetButtonUp("Fire1"))
        {
        if(hit.collider.tag == ("yes"))
        {
  
  
		total_score=PlayerPrefs.GetInt("Total Score"+sceneno);
		
		PlayerPrefs.SetInt("Total Score"+sceneno,total_score+score.scores);
		total_score=PlayerPrefs.GetInt("Total Score"+sceneno);
		if(total_score>=9999)
		{
		PlayerPrefs.SetInt("Total Score"+sceneno,9999);
		}

//      Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=902683985");
		score.total_can_falldown=0;
		score.scores=0;
//		score.scores=PlayerPrefs.GetInt("Player Score");
		Shooter.total_throw_ball=0;
		Shooter.total_throw_ball=0;
		Shooter.scoreMultiples=1;
		is_nobtn_press=false;
		PlayerPrefs.SetInt("paused",0);
		
		Application.LoadLevel("select scene");
         
         }
         if(hit.collider.tag == ("no"))
         {
		 PlayerPrefs.SetInt("paused",0);
         is_back_press=false;
         is_nobtn_press=true;
         
         }
         
		 yes_renderer.GetComponent.<Renderer>().material.mainTexture=yes_texture[0];
		 no_renderer.GetComponent.<Renderer>().material.mainTexture=no_texture[0];
        }
}






////onbackpress down
  if(Application.platform == RuntimePlatform.Android||RuntimePlatform.WindowsEditor)
        {	
         
        
          if (Input.GetKeyUp(KeyCode.Escape))
			{
			
			GameObject.Find ("Admob").SendMessage ("ShowInterstitial");
            if(is_sound_on)
           		GetComponent.<AudioSource>().PlayOneShot(Soundbtn);
            if(is_back_press==false)
             {
            	is_back_press=true;
//            	yes_no_come_back();
            }
            else
            {
            	is_back_press=false;
            	is_nobtn_press=true;
            }  
             
            if(Shooter.is_game_over==true)
            {
                score.total_can_falldown=0;
         		score.scores=0;

				Shooter.total_throw_ball=0;
				Shooter.total_throw_ball=0;
				Shooter.scoreMultiples=1;
				Application.LoadLevel("select scene");
             }
                return;
            }
                 
        }

}

function yes_no_come_front()
{
yes.SetActive(true);
no.SetActive(true);
//if( GameObject.Find("yes").transform.position.x<=-8.909096)
// GameObject.Find("yes").transform.position.x= GameObject.Find("yes").transform.position.x+0.8;
// if( GameObject.Find("no").transform.position.x<=-8.909096)
// GameObject.Find("no").transform.position.x= GameObject.Find("no").transform.position.x+0.8;

}

function yes_no_come_back()
{
yes.SetActive(false);
no.SetActive(false);
//if( GameObject.Find("yes").transform.position.x>=-16)
// GameObject.Find("yes").transform.position.x= GameObject.Find("yes").transform.position.x-0.8;
// if( GameObject.Find("no").transform.position.x>=-16)
// {
// GameObject.Find("no").transform.position.x= GameObject.Find("no").transform.position.x-0.8;
//}
//
//else
//is_nobtn_press=false;

}