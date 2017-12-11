#pragma strict

function Start () {

}

function Update () {

}

private var scrollViewVector : Vector2 = Vector2.zero;
var IconGame:Texture2D[];
var icon_size:int=100;


var fontHeading : Font;
var fontdetail : Font;
var fontcolorHeading:Color;
var fontcolorDetail:Color;


var textHeading:String[];
var textDetail:String[];
function OnGUI () {
		// Constrain all drawing to be within a 800x600 pixel area centered on the screen.
		
		
		
		scrollViewVector = GUI.BeginScrollView (new Rect (0,0, Screen.width, icon_size+icon_size/4), scrollViewVector, Rect (0, 0, 400,icon_size+icon_size/4));
		GUI.BeginGroup (new Rect (0,0, Screen.width, icon_size+icon_size/4));
		
		
		//////set heading font,size,color,size
	    GUI.skin.label.font = fontHeading;
	    GUI.contentColor = fontcolorHeading;
	    GUI.skin.label.fontSize = icon_size/4;
	   GUI.Label (Rect (icon_size+icon_size/4,icon_size/8, Screen.width-icon_size-icon_size/2, 50),textHeading[0]);
	    
	    //////set heading font,size,color,size
	    GUI.skin.label.font = fontdetail;
	    GUI.contentColor = fontcolorDetail;
	    GUI.skin.label.fontSize = icon_size/6.5;
	    GUI.Label (Rect (icon_size+icon_size/3,icon_size/2.5,Screen.width-Screen.width/2.4, icon_size-icon_size/3),textDetail[0]);
		// Draw a box in the new coordinate space defined by the BeginGroup.
		// Notice how (0,0) has now been moved on-screen
		
		if (GUI.Button(Rect(Screen.width*0.8,icon_size/1.9,Screen.width/7,icon_size-icon_size/1.75),"Download"))
			Debug.Log("Clicked the button with text");
			
		//GUI.Box (new Rect (0,0,Screen.width, icon_size+icon_size/4),"");
	    GUI.DrawTexture(Rect(icon_size/8,icon_size/8,icon_size,icon_size), IconGame[0], ScaleMode.ScaleToFit, true,0);
	   
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		GUI.EndScrollView();
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