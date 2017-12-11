#pragma strict

var play	: GUITexture;
var more	: GUITexture;
var credit	: GUITexture;
var music	: GUITexture;
var sound	: GUITexture;
var gift	: GUITexture;
var back	: GUITexture;
var video	: GUITexture;

var play_texture	: Texture2D[];
var more_texture	: Texture2D[];
var credit_texture	: Texture2D[];
var music_texture 	: Texture2D[];
var sound_texture 	: Texture2D[];
var gift_texture	: Texture2D[];
var back_texture	: Texture2D[];
var video_texture	: Texture2D[];

var gameCredits	: GameObject;
static var creditOn = false;
public var unityAd : GameObject;

///////////////for music
var beep : AudioClip;
static var is_music_on:boolean=true;
static var is_first_time_move_btns=true;
//////////////for sound
static var is_sound_on:boolean=true;
private var is_go_back:boolean=true;

static var showAd:boolean=true;

function Start () {
//appname = "";
//applink = "3D Can Knockdown: Tin Shoot\nhttps://play.google.com/store/apps/details?id=com.gg.can.knockdown.striker.free";
  
	Debug.Log("C"+creditOn);
//GameObject.Find("AdvertisementManager").SendMessage("enableAds");//-----------------------------
//var admob : GameObject =new GameObject("Admob");
//admob.AddComponent("AdmobInterstitial");
Time.timeScale = 0.55;

PlayerPrefs.SetInt("first_time_activity_start",0);
is_go_back=true;
//waittimer=0;
//GameObject.Find("play").transform.position.z=-54.2517;
//////////////////////////////for music ////////////////////////////
/////////////////////////////////////////////////////////////////////
if(PlayerPrefs.GetInt("is_first_time_game_install_music")==0)
{
PlayerPrefs.SetInt("music",1);
PlayerPrefs.SetInt("is_first_time_game_install_music",1);
}


if(PlayerPrefs.GetInt("music")==0)
           {
             is_music_on=false;
              music.texture =music_texture[1];
          
           }
         else
          {
          is_music_on=true;
           music.texture = music_texture[0];
   
          }

/////////////////////////////end music

////////////////////////////for sound///////////////////////////
////////////////////////////////////////////////////////////////
if(PlayerPrefs.GetInt("is_first_time_game_install_sound")==0)
{
PlayerPrefs.SetInt("sound",1);
PlayerPrefs.SetInt("is_first_time_game_install_sound",1);
}

if(PlayerPrefs.GetInt("sound")==0)
           {
             is_sound_on=false;
             sound.texture = sound_texture[1];

           }
        else
          {
          is_sound_on=true;
               	  sound.texture = sound_texture[0];
          }


///////////////////////////////////////////////////////////////

//Time.timeScale =0.20;


}

function Update () {


//if(Input.GetMouseButtonDown(0) && credit.HitTest(Input.mousePosition))
// 			
// 			{	Debug.Log("CLICKED");
//				gameCredits.active = true;
//				back.active = true;
//				
//				creditOn = true;
//			}

//if(Input.GetMouseButtonDown(0) && gift.HitTest(Input.mousePosition))
// 			{	 
// 				GameObject.Find("giftAds").SendMessage("playAds");
// 				creditOn = false;
//				Application.LoadLevel("mainmenu 1");
//			}			



// automove_btns();
/////////////////////////
//////////////////////////

//if(is_go_back)
 //GameObject.Find("play").transform.position.z= GameObject.Find("play").transform.position.z+0.1;
//else
// GameObject.Find("play").transform.position.z= GameObject.Find("play").transform.position.z-0.1;
//if( GameObject.Find("play").transform.position.z<=-54.0063)
//is_go_back=false;
//if( GameObject.Find("play").transform.position.z>=-54.2517)
//is_go_back=true;
//if(!crdit.is_credit_model_show){
//waittimer+=Time.deltaTime;
//if(waittimer<=0.0505)
//{
////gui_texture.texture = rollOverTexture;
//if(GameObject.Find("play").transform.position.z>-54.70173)
//GameObject.Find("play").transform.position.z= GameObject.Find("play").transform.position.z-0.05;
// 	gift.texture = gift_texture[0];
//
//}
//if(waittimer>0.0505&&waittimer<=0.10)
//{
// //gui_texture.texture = normalTexture;
// if(GameObject.Find("play").transform.position.z<-54.00168)
// GameObject.Find("play").transform.position.z= GameObject.Find("play").transform.position.z+0.05;
//// Debug.Log("maximum  =  "+GameObject.Find("play").transform.position.z);
// gift.texture = gift_texture[1];
//}
//if(waittimer>0.10)
//{
//waittimer=0;
//}
//
//
//}
////////////////////////////
//////////////////////////////
//var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
//var hit : RaycastHit;
//if (Physics.Raycast(ray.origin, ray.direction, hit))
//{
////if (Input.GetButtonDown ("Fire1"))
////    {
////      //////////////////////////////////////////////////////
////      //////////////////play btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("play"))
////       {
////           if(PlayerPrefs.GetInt("sound")==1)
////           audio.PlayOneShot(beep);
////       }
////       //////////////////////////////////////////////////////
////      //////////////////more btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("more"))
////      {
//////             more_renderer.material.mainTexture=more_texture[1];
////             more.texture = more_texture[1];
////            if(PlayerPrefs.GetInt("sound")==1)
////            audio.PlayOneShot(beep);
////     
////         
////       }
////      //////////////////////////////////////////////////////
////      //////////////////credit btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("credit"))
////       {
////               if(PlayerPrefs.GetInt("sound")==1)
////               audio.PlayOneShot(beep);
//////               credit_renderer.material.mainTexture=credit_texture[1];
////			   credit.texture = credit_texture[1];				
////         
////       }
////      //////////////////////////////////////////////////////
////      //////////////////music btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("music"))
////       {
////           if(PlayerPrefs.GetInt("sound")==1)
////           audio.PlayOneShot(beep);
//////           music_renderer.material.mainTexture=music_texture[1];
////          music.texture = music_texture[1];
////        }
////       //////////////////////////////////////////////////////
////      //////////////////sound btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("sound"))
////       {
////           if(PlayerPrefs.GetInt("sound")==1)
////           audio.PlayOneShot(beep);
////   
////       }
////       
////       //////////////////////////////////////////////////////
////      //////////////////gift btn action down///////////////
////      /////////////////////////////////////////////////////
////      if(hit.collider.tag == ("gift"))
////       {
////           if(PlayerPrefs.GetInt("sound")==1)
////           audio.PlayOneShot(beep);
////          
////       }
////       
////    }//if (Input.GetButtonDown ("Fire1"))
//         
// if (Input.GetButtonUp("Fire1"))
//      {
//       //////////////////////////////////////////////////////
//      //////////////////play btn action up///////////////
//      /////////////////////////////////////////////////////
//      if(hit.collider.tag == ("play"))
//        {
// //         Debug.Log("leftup");
// Application.LoadLevel("select scene");
//       }
//       //////////////////////////////////////////////////////
//      //////////////////more btn action up///////////////
//      /////////////////////////////////////////////////////
//      if(hit.collider.tag == ("more"))
//        {
//     //   more_renderer.material.mainTexture=more_texture[0];
//        Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=902683985");
//        }
//       //////////////////////////////////////////////////////
//      //////////////////credit btn action up///////////////
//      /////////////////////////////////////////////////////
//      if(hit.collider.tag == ("credit"))
//       {
//       GameObject.Find("credits").gameObject.SendMessage("credit_menu_call");
//      // credit_renderer.material.mainTexture=credit_texture[0];
//       }  
//       //////////////////////////////////////////////////////
//      //////////////////music btn action up///////////////
//      /////////////////////////////////////////////////////  
//      if(hit.collider.tag == ("music"))
//       {
//               if(is_music_on)
//               {
//               is_music_on=false;
//               music.texture = music_texture[1];
//               PlayerPrefs.SetInt("music",0);
//               }
//               else
//               {
//               is_music_on=true;
//              music.texture = music_texture[0];
//               PlayerPrefs.SetInt("music",1);
//               }
//              
//      }
//      //////////////////////////////////////////////////////
//      //////////////////sound btn action up///////////////
//      /////////////////////////////////////////////////////
//        if(hit.collider.tag == ("sound"))
//        {
//        
//         if(is_sound_on)
//         {
//         is_sound_on=false;
////          sound_renderer.material.mainTexture=sound_texture[1];
//          sound.texture = sound_texture[1];
//         PlayerPrefs.SetInt("sound",0);
//         }
//         else
//         {
//         is_sound_on=true;
////          sound_renderer.material.mainTexture=sound_texture[0];
//          sound.texture = sound_texture[0];
//         PlayerPrefs.SetInt("sound",1);
//         }
//        
//        }
//
//          
//                           //////////////////////////////////////////////////////
//      //////////////////gift btn action up///////////////
//      /////////////////////////////////////////////////////
//      if(hit.collider.tag == ("gift"))
//       {
//       
//           Application.OpenURL ("http://ad.leadboltads.net/show_app_wall?section_id=902683985");
//       }          
////          more_renderer.material.mainTexture=more_texture[0];
//          more.texture = more_texture[0];
////          credit_renderer.material.mainTexture=credit_texture[0];
//          credit.texture = credit_texture[0];
//
//          }// if (Input.GetButtonUp("Fire1"))
//         
//      
//    
//}
		
		
//		if(Input.GetMouseButtonDown(0) && play.HitTest(Input.mousePosition))			
// 			{
//				Application.LoadLevel("select scene");
//			}
		
//if(showAd)
//{
//var admob : GameObject =new GameObject("Admob");
//admob.AddComponent("AdmobInterstitial");
//showAd = false;
//}
//onbackpress down

          	
        
     /////////////////////////for music
        
        if(is_music_on)
           {
       		music.texture = music_texture[0];
           }
        else
          {
           music.texture = music_texture[1];
          }
       ////////////////////for sound
          
          if(is_sound_on)
           {
        	sound.texture = sound_texture[0];
           }
         else
         {
        	sound.texture = sound_texture[1];
         }
         
         

if (Input.touchCount>0&&is_credit_window_show==false) {
    for (var touch : Touch in Input.touches) {
    
    ////////////////////////////
	////////////////////////touchphase start
     if (touch.phase == TouchPhase.Began){
     
         if (play.HitTest(touch.position)) {
         	
           if(PlayerPrefs.GetInt("sound")==1){
           GetComponent.<AudioSource>().PlayOneShot(beep);
           }
            play.texture = play_texture[1];
               
    
        }
       else if (more.HitTest(touch.position)) {
       		
			if(PlayerPrefs.GetInt("sound")==1){
			GetComponent.<AudioSource>().PlayOneShot(beep);
			}
      	 	more.texture = more_texture[1];
        	
       }
       
       else if (credit.HitTest(touch.position)) {
       		
       		if(PlayerPrefs.GetInt("sound")==1){
			GetComponent.<AudioSource>().PlayOneShot(beep);
			}
       		credit.texture = credit_texture[1];
       		
        }
        
		else if (music.HitTest(touch.position)) {
			 
			 if(PlayerPrefs.GetInt("sound")==1)
           	 GetComponent.<AudioSource>().PlayOneShot(beep);
           	 
           	 if(is_music_on)
               {
               is_music_on=false;
               music.texture = music_texture[1];
               PlayerPrefs.SetInt("music",0);
               }
               else
               {
               is_music_on=true;
               music.texture = music_texture[0];
               PlayerPrefs.SetInt("music",1);
               }
         }
		
		else if (sound.HitTest(touch.position)) {
		 	
		 	if(PlayerPrefs.GetInt("sound")==1){
//         	 audio.PlayOneShot(beep);
            }
            
			if(is_sound_on)
			{
			is_sound_on=false;
			sound.texture = sound_texture[1];
			PlayerPrefs.SetInt("sound",0);
			}
			else
			{
			is_sound_on=true;
			sound.texture = sound_texture[0];
			PlayerPrefs.SetInt("sound",1);
			GetComponent.<AudioSource>().PlayOneShot(beep);
			}
		}
			
			
		else if (gift.HitTest(touch.position)) {
			
			if(PlayerPrefs.GetInt("sound")==1){
            GetComponent.<AudioSource>().PlayOneShot(beep);
            }
            gift.texture = gift_texture[1];
		}
		else if (video.HitTest(touch.position)) {
			
			if(PlayerPrefs.GetInt("sound")==1){
            GetComponent.<AudioSource>().PlayOneShot(beep);
            }
            video.texture = video_texture[1];
		}
		
		else if (back.HitTest(touch.position)) {
			
			if(PlayerPrefs.GetInt("sound")==1){
            GetComponent.<AudioSource>().PlayOneShot(beep);
            }
            
             back.texture = back_texture[1];
		}
        
	}/////////////////////////
	////////////////////////////
	////////////////////////touchphase ended
    	else if (touch.phase == TouchPhase.Ended){
     
         if (play.HitTest(touch.position)) {
        	  
        	  //GameObject.Find("AdmobBanner").SendMessage("Hidebanner");
    		  Application.LoadLevel("select scene");
        }
       
		else if (more.HitTest(touch.position)) {
       
 			Application.OpenURL ("https://play.google.com you can use more game link");
 }
       
       else if (credit.HitTest(touch.position)) {
       PlayerPrefs.SetInt("share", 1);
//       			GameObject.Find("Share").SendMessage("CallSharePlug");
//       			shareText();
//				creditOn = true;
//				gameCredits.active = true;
//                is_credit_window_show=true;
       }
       
       else if (gift.HitTest(touch.position)) {
		
            Application.OpenURL("https://play.google.com/store/apps/developer?id=com.ggg.gunner.game.shooter");
//            GameObject.Find("giftAds").SendMessage("playAds");
		}
		else if (video.HitTest(touch.position)) {
		
       GameObject.Find ("Admob").SendMessage ("unityadss");
       //     unityAd.SetActive(true);
		}
       
       
       else if (back.HitTest(touch.position)) {
   			
   	
//	   			creditOn = false;
//	   			Application.LoadLevel("mainmenu 1");
		}	
		
		
				gift.texture = gift_texture[0];
                play.texture = play_texture[0];
        	    more.texture =more_texture[0];
       			credit.texture = credit_texture[0];
	   			back.texture = back_texture[0];

    }


}
}
}

//	public void shareText(){
//		//execute the below lines if being run on a Android device
//		#if UNITY_ANDROID
//		//Refernece of AndroidJavaClass class for intent
//		AndroidJavaClass intentClass = new AndroidJavaClass ("android.content.Intent");
//		//Refernece of AndroidJavaObject class for intent
//		AndroidJavaObject intentObject = new AndroidJavaObject ("android.content.Intent");
//		//call setAction method of the Intent object created
//		intentObject.Call<AndroidJavaObject>("setAction", intentClass.GetStatic<string>("ACTION_SEND"));
//		//set the type of sharing that is happening
//		intentObject.Call<AndroidJavaObject>("setType", "text/plain");
//		//add data to be passed to the other activity i.e., the data to be sent
//		intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_SUBJECT"), appname);
//		intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_TEXT"), applink);
//		//get the current activity
//		AndroidJavaClass unity = new AndroidJavaClass ("com.unity3d.player.UnityPlayer");
//		AndroidJavaObject currentActivity = unity.GetStatic<AndroidJavaObject>("currentActivity");
//		//start the activity by sending the intent data
//		currentActivity.Call ("startActivity", intentObject);
//		#endif
//		
//	}

static var is_credit_window_show:boolean=false;
function resetbtn(){
	
	yield new WaitForSeconds(0.5f);
	is_credit_window_show=false;
	creditOn = false;
}