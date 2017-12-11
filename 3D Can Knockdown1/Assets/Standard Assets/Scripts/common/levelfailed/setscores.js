#pragma strict


static var scores:int=0;         //total score

var sceneNo:int=1;
var scene_name:String="s1_level1";
static var total_can_falldown:int=0;  //can who touch the ground
var best_score_texture:Texture2D[];      //scores reprezent on board
var best_score_renderer:Renderer[];
var totalscore_renderer:Renderer[];

var tryagain_selector : Texture2D[];

private var best_score:int;
private var total_score:int;


var tryAgain_texture : Renderer;
private var waittimer:float=0;
var forHeyzAds : boolean = false;
 
var unityAds : GameObject;

function Start () {
//GameObject.Find ("Admob").SendMessage ("unitysrart");
//var admob : GameObject = new GameObject("Admob");
//admob.AddComponent("AdmobInterstitial");
GameObject.Find("levelfailed").transform.position=Vector3(162.4392,41.87138,9.705078);
forHeyzAds = false;
//best_score_show();
//total_can_falldown=0;

	
//	PlayerPrefs.SetInt("best Score",0);
	
//	totalscore_show();
}



function Update () {

if(Shooter.is_game_over)
{
waittimer+=Time.deltaTime;
//Debug.Log("waittimer = "+waittimer);
if(waittimer<=0.5)
{
tryAgain_texture.material.mainTexture=tryagain_selector[0];

}
else if(waittimer>0.5&&waittimer<=1)
{
tryAgain_texture.material.mainTexture=tryagain_selector[1];

}
else if(waittimer>1)
waittimer=0;
ShowAdd();
}

var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 
var hit : RaycastHit;
if (Physics.Raycast(ray.origin, ray.direction, hit))
{
 if (Input.GetButtonDown ("Fire1"))
    {
        if(hit.collider.tag == ("tryagain"))
        {
     //   unityAds.SetActive(false);
        forHeyzAds = false;
    Application.LoadLevel(Application.loadedLevel);
    //this//    Application.LoadLevel(scene_name);
        score.total_can_falldown=0;
score.scores=0;
//score.scores=PlayerPrefs.GetInt("Player Score");
Shooter.total_throw_ball=0;
Shooter.scoreMultiples=1;
Shooter.is_move_levelfailed=false;
Shooter.levelNo=1;

//GameObject.Find("rePlayAds").SendMessage("playAds");
Debug.Log("send");
        }
        }
}
}

function ShowAdd()
{
	
		if(!forHeyzAds)
		{

			 GameObject.Find ("Admob").SendMessage ("ShowInterstitial");
			forHeyzAds = true;
		}

	
}

function play(){
	
	GetComponent.<Animation>().Play("FailSlide");
}

private var ans:int;
private var a:int;
private var b:int;
private var c:int;
private var d:int;

function best_score_show()
{

best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
	//PlayerPrefs.SetInt("BestScore",0);
	
//	Debug.Log("best scorescores scores =  "+best_score);
	if(score.scores>best_score)
	{
	best_score=score.scores;
	PlayerPrefs.SetInt("BestScore"+sceneNo,best_score);
	}

scores=best_score;

if(scores<=9)
{

best_score_renderer[0].material.mainTexture=best_score_texture[scores];
best_score_renderer[0].transform.localPosition=Vector3(0.8197556,-20.33636,-49.12275);
best_score_renderer[1].GetComponent.<Renderer>().enabled=false;
best_score_renderer[2].GetComponent.<Renderer>().enabled=false;
best_score_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=10&&scores<=99)
{

ans=scores/10;
a=scores-ans*10;
b=ans;
best_score_renderer[0].material.mainTexture=best_score_texture[a];
best_score_renderer[1].material.mainTexture=best_score_texture[b];

best_score_renderer[0].transform.localPosition=Vector3(0.8197556,-20.33636,-49.12275);

best_score_renderer[1].transform.localPosition=Vector3(-0.4584789,-20.33636,-49.12275);
best_score_renderer[1].GetComponent.<Renderer>().enabled=true;
best_score_renderer[2].GetComponent.<Renderer>().enabled=false;
best_score_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=100&&scores<=999)
{
ans=scores;
c=ans/100;
ans=ans-c*100;
b=ans/10;
ans=ans-b*10;
a=ans;
//Debug.Log("a = "+a+" b = "+b+" c = "+c);
best_score_renderer[0].material.mainTexture=best_score_texture[a];
best_score_renderer[1].material.mainTexture=best_score_texture[b];
best_score_renderer[2].material.mainTexture=best_score_texture[c];

best_score_renderer[0].transform.localPosition=Vector3(0.8197556,-20.33636,-49.12275);
best_score_renderer[1].transform.localPosition=Vector3(-0.4584789,-20.33636,-49.12275);
best_score_renderer[2].transform.localPosition=Vector3(-1.821932,-20.33636,-49.12275);

best_score_renderer[2].GetComponent.<Renderer>().enabled=true;
best_score_renderer[3].GetComponent.<Renderer>().enabled=false;

}
else if(scores>=1000&&scores<=9999)
{
ans=scores;
d=ans/1000;
ans=ans-d*1000;
c=ans/100;
ans=ans-c*100;
b=ans/10;
ans=ans-b*10;
a=ans;
//Debug.Log("a = "+a+" b = "+b+" c = "+c);
best_score_renderer[0].material.mainTexture=best_score_texture[a];
best_score_renderer[1].material.mainTexture=best_score_texture[b];
best_score_renderer[2].material.mainTexture=best_score_texture[c];
best_score_renderer[3].material.mainTexture=best_score_texture[d];

best_score_renderer[0].transform.localPosition=Vector3(0.8197556,-20.33636,-49.12275);
best_score_renderer[1].transform.localPosition=Vector3(-0.4584789,-20.33636,-49.12275);
best_score_renderer[2].transform.localPosition=Vector3(-1.821932,-20.33636,-49.12275);
best_score_renderer[3].transform.localPosition=Vector3(-3.142776,-13.37005,-49.12275);

best_score_renderer[3].GetComponent.<Renderer>().enabled=true;

}

}
///////////////////////////////////
////////////////////////////////////
/////////////best score///////////////

function totalscore_show()
{

total_score=PlayerPrefs.GetInt("Total Score"+sceneNo);

PlayerPrefs.SetInt("Total Score"+sceneNo,total_score+score.scores);
total_score=PlayerPrefs.GetInt("Total Score"+sceneNo);
if(total_score>=9999)
{
PlayerPrefs.SetInt("Total Score"+sceneNo,9999);
total_score=PlayerPrefs.GetInt("Total Score"+sceneNo);
}

best_score=total_score;

//Debug.Log("total score =  "+total_score);
if(best_score<=9)
{

totalscore_renderer[0].material.mainTexture=best_score_texture[best_score];
totalscore_renderer[0].transform.localPosition=Vector3(2.743881,-23.65994,-50.3671);
totalscore_renderer[1].GetComponent.<Renderer>().enabled=false;
totalscore_renderer[2].GetComponent.<Renderer>().enabled=false;
totalscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=10&&best_score<=99)
{

ans=best_score/10;
a=best_score-ans*10;
b=ans;
totalscore_renderer[0].material.mainTexture=best_score_texture[a];
totalscore_renderer[1].material.mainTexture=best_score_texture[b];

totalscore_renderer[0].transform.localPosition=Vector3(2.743881,-23.65994,-50.3671);

totalscore_renderer[1].transform.localPosition=Vector3(1.354198,-23.65994,-50.3671);

totalscore_renderer[1].GetComponent.<Renderer>().enabled=true;
totalscore_renderer[2].GetComponent.<Renderer>().enabled=false;
totalscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=100&&best_score<=999)
{
ans=best_score;
c=ans/100;
ans=ans-c*100;
b=ans/10;
ans=ans-b*10;
a=ans;
//Debug.Log("a = "+a+" b = "+b+" c = "+c);
totalscore_renderer[0].material.mainTexture=best_score_texture[a];
totalscore_renderer[1].material.mainTexture=best_score_texture[b];
totalscore_renderer[2].material.mainTexture=best_score_texture[c];

totalscore_renderer[0].transform.localPosition=Vector3(2.743881,-23.65994,-50.3671);

totalscore_renderer[1].transform.localPosition=Vector3(1.354198,-23.65994,-50.3671);


totalscore_renderer[2].transform.localPosition=Vector3(-0.001958847,-23.65994,-50.3671);

totalscore_renderer[2].GetComponent.<Renderer>().enabled=true;
totalscore_renderer[3].GetComponent.<Renderer>().enabled=false;

}
else if(best_score>=1000&&best_score<=9999)
{
ans=best_score;
d=ans/1000;
ans=ans-d*1000;
c=ans/100;
ans=ans-c*100;
b=ans/10;
ans=ans-b*10;
a=ans;
//Debug.Log("a = "+a+" b = "+b+" c = "+c);
totalscore_renderer[0].material.mainTexture=best_score_texture[a];
totalscore_renderer[1].material.mainTexture=best_score_texture[b];
totalscore_renderer[2].material.mainTexture=best_score_texture[c];
totalscore_renderer[3].material.mainTexture=best_score_texture[d];

totalscore_renderer[0].transform.localPosition=Vector3(2.743881,-23.65994,-50.3671);

totalscore_renderer[1].transform.localPosition=Vector3(1.354198,-23.65994,-50.3671);

totalscore_renderer[2].transform.localPosition=Vector3(-0.001958847,-23.65994,-50.3671);

totalscore_renderer[3].transform.localPosition=Vector3(-1.44524,-23.65994,-50.3671);

totalscore_renderer[3].GetComponent.<Renderer>().enabled=true;

}

}