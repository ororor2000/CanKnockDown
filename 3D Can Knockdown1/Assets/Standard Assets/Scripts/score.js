#pragma strict
static var scores:int=0;        //total score
var sceneNo:int=1;
static var total_can_falldown:int=0;  //can who touch the ground
var Cross_good_texture : Texture2D[];
var Cross_good_render : Renderer;
var Numbers_texture:Texture2D[];      //scores reprezent on board
var Numbers_renderer:Renderer[];
var bestscore_renderer:Renderer[];
var ScoreMultiplier_texture : Texture2D[];
var ScoreMultiplier_renderer:Renderer;

private var best_score:int=0;
function Start () {


throw_stone();
showscore();
//total_can_falldown=0;

	
//	PlayerPrefs.SetInt("best Score",0);
	
	best_scoreshow();
	
	
	ScoreMultiplier_renderer.material.mainTexture = ScoreMultiplier_texture[Shooter.scoreMultiples-1];
}


function throw_stone()
{
Cross_good_render.material.mainTexture = Cross_good_texture[Shooter.total_throw_ball];
} 

private var ans:int;
private var a:int;
private var b:int;
private var c:int;
private var d:int;
function showscore()
{

showscore_level2();

if(sceneNo==1)
showscore_level1();
else if(sceneNo==2)
showscore_level2();
else if(sceneNo==3)
showscore_level3();
else if(sceneNo==4)
showscore_level4();

}
///////////////////////////////////
////////////////////////////////////
/////////////best score///////////////


function best_scoreshow()
{

if(sceneNo==1)
best_scoreshow_level1();
else if(sceneNo==2)
best_scoreshow_level2();
else if(sceneNo==3)
best_scoreshow_level3();
else if(sceneNo==4)
best_scoreshow_level4();


}


function showscore_level1()
{

//Debug.Log("total score =  "+scores);

//Debug.Log("show score");
//total_can_falldown++;
//scores=scores+TriggerZone.scoreMultiples;
if(scores<=9)
{

Numbers_renderer[0].material.mainTexture=Numbers_texture[scores];
Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=10&&scores<=99)
{

ans=scores/10;
a=scores-ans*10;
b=ans;
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);

Numbers_renderer[1].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);

Numbers_renderer[2].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;





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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];
Numbers_renderer[3].material.mainTexture=Numbers_texture[d];






Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);
Numbers_renderer[3].transform.localPosition=Vector3(46.75629,54,50.32404);


Numbers_renderer[3].GetComponent.<Renderer>().enabled=true;

}


}





function showscore_level2()
{

//Debug.Log("total score =  "+scores);

//Debug.Log("show score");
//total_can_falldown++;
//scores=scores+TriggerZone.scoreMultiples;
if(scores<=9)
{

Numbers_renderer[0].material.mainTexture=Numbers_texture[scores];
Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=10&&scores<=99)
{

ans=scores/10;
a=scores-ans*10;
b=ans;
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];






Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);

Numbers_renderer[1].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);

Numbers_renderer[2].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;





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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];
Numbers_renderer[3].material.mainTexture=Numbers_texture[d];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);
Numbers_renderer[3].transform.localPosition=Vector3(46.75629,54,50.32404);


Numbers_renderer[3].GetComponent.<Renderer>().enabled=true;





}


	



}
////////////////////////////////////show score level 33333333333333333333333333
function showscore_level3()
{

//Debug.Log("total score =  "+scores);

//Debug.Log("show score");
//total_can_falldown++;
//scores=scores+TriggerZone.scoreMultiples;
if(scores<=9)
{

Numbers_renderer[0].material.mainTexture=Numbers_texture[scores];
Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=10&&scores<=99)
{

ans=scores/10;
a=scores-ans*10;
b=ans;
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];






Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);

Numbers_renderer[1].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);

Numbers_renderer[2].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;





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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];
Numbers_renderer[3].material.mainTexture=Numbers_texture[d];







Numbers_renderer[0].transform.localPosition=Vector3(56.85913,54,50.32404);
Numbers_renderer[1].transform.localPosition=Vector3(53.51802,54,50.32404);
Numbers_renderer[2].transform.localPosition=Vector3(50.04518,54,50.32404);
Numbers_renderer[3].transform.localPosition=Vector3(46.75629,54,50.32404);


Numbers_renderer[3].GetComponent.<Renderer>().enabled=true;





}


	



}


function showscore_level4()
{

//Debug.Log("total score =  "+scores);
if(scores<=9)
{

Numbers_renderer[0].material.mainTexture=Numbers_texture[scores];
Numbers_renderer[0].transform.localPosition=Vector3(60.92648,50,50.32405);
Numbers_renderer[1].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(scores>=10&&scores<=99)
{

ans=scores/10;
a=scores-ans*10;
b=ans;
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];







Numbers_renderer[0].transform.localPosition=Vector3(60.92648,50,50.32405);
Numbers_renderer[1].transform.localPosition=Vector3(55.04732,50,50.32405);
Numbers_renderer[1].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[2].GetComponent.<Renderer>().enabled=false;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;
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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];







Numbers_renderer[0].transform.localPosition=Vector3(60.92648,50,50.32405);
Numbers_renderer[1].transform.localPosition=Vector3(55.04732,50,50.32405);
Numbers_renderer[2].transform.localPosition=Vector3(48.22686,50,50.32405);
Numbers_renderer[2].GetComponent.<Renderer>().enabled=true;
Numbers_renderer[3].GetComponent.<Renderer>().enabled=false;





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
Numbers_renderer[0].material.mainTexture=Numbers_texture[a];
Numbers_renderer[1].material.mainTexture=Numbers_texture[b];
Numbers_renderer[2].material.mainTexture=Numbers_texture[c];
Numbers_renderer[3].material.mainTexture=Numbers_texture[d];






Numbers_renderer[0].transform.localPosition=Vector3(60.92648,50,50.32405);
Numbers_renderer[1].transform.localPosition=Vector3(55.04732,50,50.32405);
Numbers_renderer[2].transform.localPosition=Vector3(48.22686,50,50.32405);
Numbers_renderer[3].transform.localPosition=Vector3(42.35084,50,50.32405);
Numbers_renderer[3].GetComponent.<Renderer>().enabled=true;





}


	



}



////////////////////////best score show level 1
function best_scoreshow_level1()
{



best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
Debug.Log("total score =  "+best_score);
if(best_score<=9)
{

bestscore_renderer[0].material.mainTexture=Numbers_texture[best_score];
bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=10&&best_score<=99)
{

ans=best_score/10;
a=best_score-ans*10;
b=ans;
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);

bestscore_renderer[2].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;





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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];
bestscore_renderer[3].material.mainTexture=Numbers_texture[d];






bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);
bestscore_renderer[3].transform.localPosition=Vector3(44.66977,58.9,50.32404);


bestscore_renderer[3].GetComponent.<Renderer>().enabled=true;





}


}







///////////////////////////////////////
/////////////////////////////////////best score for level 2
function best_scoreshow_level2()
{

best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
Debug.Log("total score =  "+best_score);
if(best_score<=9)
{

bestscore_renderer[0].material.mainTexture=Numbers_texture[best_score];
bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=10&&best_score<=99)
{

ans=best_score/10;
a=best_score-ans*10;
b=ans;
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);

bestscore_renderer[2].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;





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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];
bestscore_renderer[3].material.mainTexture=Numbers_texture[d];






bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);
bestscore_renderer[3].transform.localPosition=Vector3(44.66977,58.9,50.32404);


bestscore_renderer[3].GetComponent.<Renderer>().enabled=true;





}


}



//////////////////////////////////////
/////////////////////////////////////best score for level 3
function best_scoreshow_level3()
{

best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
Debug.Log("total score =  "+best_score);
if(best_score<=9)
{

bestscore_renderer[0].material.mainTexture=Numbers_texture[best_score];
bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=10&&best_score<=99)
{

ans=best_score/10;
a=best_score-ans*10;
b=ans;
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);

bestscore_renderer[1].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];







bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);

bestscore_renderer[2].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;





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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];
bestscore_renderer[3].material.mainTexture=Numbers_texture[d];






bestscore_renderer[0].transform.localPosition=Vector3(56.08075,58.9,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(52.10265,58.9,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(48.70205,58.9,50.32404);
bestscore_renderer[3].transform.localPosition=Vector3(44.66977,58.9,50.32404);
bestscore_renderer[3].GetComponent.<Renderer>().enabled=true;





}


}
///////////////best score show level4
////////////////////////
//////////////////////////
function best_scoreshow_level4()
{



best_score=PlayerPrefs.GetInt("BestScore"+sceneNo);
//Debug.Log("total score =  "+best_score);
if(best_score<=9)
{

bestscore_renderer[0].material.mainTexture=Numbers_texture[best_score];
bestscore_renderer[0].transform.localPosition=Vector3(60.63898,62.1,50.32404);
bestscore_renderer[1].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
}
else if(best_score>=10&&best_score<=99)
{

ans=best_score/10;
a=best_score-ans*10;
b=ans;
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];







bestscore_renderer[0].transform.localPosition=Vector3(60.63898,62.1,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(54.25963,62.1,50.32404);
bestscore_renderer[1].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[2].GetComponent.<Renderer>().enabled=false;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;
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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];







bestscore_renderer[0].transform.localPosition=Vector3(60.63898,62.1,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(54.25963,62.1,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(47.94835,62.1,50.32404);
bestscore_renderer[2].GetComponent.<Renderer>().enabled=true;
bestscore_renderer[3].GetComponent.<Renderer>().enabled=false;





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
bestscore_renderer[0].material.mainTexture=Numbers_texture[a];
bestscore_renderer[1].material.mainTexture=Numbers_texture[b];
bestscore_renderer[2].material.mainTexture=Numbers_texture[c];
bestscore_renderer[3].material.mainTexture=Numbers_texture[d];






bestscore_renderer[0].transform.localPosition=Vector3(60.63898,62.1,50.32404);
bestscore_renderer[1].transform.localPosition=Vector3(54.25963,62.1,50.32404);
bestscore_renderer[2].transform.localPosition=Vector3(47.94835,62.1,50.32404);
bestscore_renderer[3].transform.localPosition=Vector3(42.03931,62.1,50.32404);
bestscore_renderer[3].GetComponent.<Renderer>().enabled=true;





}


}