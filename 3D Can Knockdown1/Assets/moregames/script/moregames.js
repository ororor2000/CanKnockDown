#pragma strict

function Start () {

}

function Update () {
	
	
}

private var scrollViewVector : Vector2 = Vector2.zero;
var IconGame:Texture2D[];
var icon_size:float=100;

var title:Texture2D;

var fontHeading : Font;
var fontdetail : Font;
var fontcolorHeading:Color;
var fontcolorDetail:Color;


var textHeading:String[];
var textDetail:String[];
var marketLink:String[];
var i:int=0;
var scrollPos : float = 0.5;
function OnGUI () {
		// Constrain all drawing to be within a 800x600 pixel area centered on the screen.
		
		
		
scrollViewVector = GUI.BeginScrollView (new Rect (0,0,Screen.width,Screen.height), scrollViewVector, Rect (0, 0,100,(icon_size+icon_size/4)*(IconGame.length+1)+Screen.width*0.1));
		
GUI.DrawTexture(Rect(Screen.width/6.5,Screen.height/50,Screen.width*0.65,Screen.width*0.08),title,ScaleMode.ScaleToFit, true,0);
Debug.Log("IconGame.length  "+IconGame.length);

for(i=0;i<IconGame.length;i++)
{
		GUI.BeginGroup (new Rect (0,i*(icon_size+icon_size/4)+Screen.width*0.1, Screen.width, icon_size+icon_size/4));
		//////set heading font,size,color,size
	    GUI.skin.label.font = fontHeading;
	    GUI.contentColor = fontcolorHeading;
	    GUI.skin.label.fontSize = icon_size/4;
	    GUI.Label (Rect (icon_size+icon_size/4,icon_size/8, Screen.width-icon_size-icon_size/2, icon_size/2),textHeading[i]);
	    
	    //////set heading font,size,color,size
	    GUI.skin.label.font = fontdetail;
	    GUI.contentColor = fontcolorDetail;
	    GUI.skin.label.fontSize = icon_size/6.5;
	    GUI.Label (Rect (icon_size+icon_size/3,icon_size/2.5,Screen.width-Screen.width/2.4, icon_size-icon_size/3),textDetail[i]);
		// Draw a box in the new coordinate space defined by the BeginGroup.
		// Notice how (0,0) has now been moved on-screen
		
		if (GUI.Button(Rect(Screen.width*0.8,icon_size/1.9,Screen.width/7,icon_size-icon_size/1.75),"Download"))
			Application.OpenURL(marketLink[i]);
			
		//	Debug.Log("i*(icon_size+icon_size/4)  ="+icon_size*(i+1));
			
	//	GUI.Box (new Rect (0,0, Screen.width,icon_size+icon_size/4),"");
	    GUI.DrawTexture(Rect(icon_size/8,icon_size/8,icon_size,icon_size), IconGame[i], ScaleMode.ScaleToFit, true,0);
	   
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		
	}
		GUI.EndScrollView();
		
		
		if(Application.platform == RuntimePlatform.Android)
        {
          if (Input.GetKeyUp(KeyCode.Escape))

            {
           Application.LoadLevel("mainmenu 1");

            }
            }
	}


//var scrollViewVector : Vector2 = Vector2.zero;
//var innerText : String = "I am inside the ScrollView";
// 
//function OnGUI () {
//    // Begin the ScrollView
//    scrollViewVector = GUI.BeginScrollView (Rect (0, 0,Screen.width, 100), scrollViewVector, Rect (0, 0, 400, 400));
// 
//    // Put something inside the ScrollView
//    innerText = GUI.TextArea (Rect (0, 0, 400, 400), innerText);
// 
//    // End the ScrollView
//    GUI.EndScrollView();
//}