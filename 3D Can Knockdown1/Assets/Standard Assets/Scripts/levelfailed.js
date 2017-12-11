#pragma strict
var levelToLoad : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var replay : GUITexture;	
var beep : AudioClip;

function OnMouseEnter(){
replay.texture = rollOverTexture;
}
function OnMouseExit(){
replay.texture = normalTexture;
}
function OnMouseUp(){
//audio.PlayOneShot(beep);
//yield new WaitForSeconds(0.35);
score.total_can_falldown=0;
score.scores=0;
//score.scores=PlayerPrefs.GetInt("Player Score");
Shooter.total_throw_ball=0;
Application.LoadLevel(levelToLoad);
GetComponent.<GUITexture>().enabled=false;
}




function Update(){
	
	if (Input.touchCount>0) {

    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && replay.HitTest(touch.position)) {

score.total_can_falldown=0;
score.scores=0;
//score.scores=PlayerPrefs.GetInt("Player Score");
Shooter.total_throw_ball=0;
Application.LoadLevel(levelToLoad);
GetComponent.<GUITexture>().enabled=false;
       }
    } 
}

  if(Application.platform == RuntimePlatform.Android)

        {

            if (Input.GetKey(KeyCode.Escape))

            {

                Application.Quit();

                return;

            }
            
            
            if (Input.GetKey(KeyCode.Home))

            {

                Application.LoadLevel(levelToLoad);

                return;

            }
            
            


        }
}





