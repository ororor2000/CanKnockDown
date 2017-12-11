#pragma strict

var speed : float = 0.1;


function Start () {

}

function Update () {
		
		if (Input.touchCount > 0 && 
		  Input.GetTouch(0).phase == TouchPhase.Moved) {
		
			// Get movement of the finger since last frame
			var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
			
			// Move object across XY plane
			transform.Translate (-touchDeltaPosition.x * speed, 0, 0);
		}

//	if (Input.touchCount>0 && Input.GetTouch(0).phase==TouchPhase.Ended) {
//    
//    var touchDelta : Vector2; = Input.GetTouch(0).deltaPosition;
//    
//    if (touchDelta.x>1) {
//    	Debug.Log("touchDelta"+touchDelta);
//    	transform.Translate (touchDelta.x * speed, 0, 0);
//    	GameObject.Find("menu").SendMessage("rightarrow");
//    } //This was a flick to the left with magnitude of 5 or more
//    
//    if (touchDelta.x<-1) {
//    	 Debug.Log("touchDelta"+touchDelta);
//    	 transform.Translate(-touchDelta.x * speed, 0, 0);
//    	 GameObject.Find("menu").SendMessage("leftarrow");
//    } //This was a flick to the right with magnitude of 5 or more
//	}	

}
