#pragma strict


function Start () {
	
	
}

function Update () {

	

            if (Input.GetKeyUp(KeyCode.Escape))
			{
            gameObject.active=false;
            GameObject.Find("Buttons").SendMessage("resetbtn");
			all_buttns_of_mainmenu.creditOn = false;
			}
}


function OnMouseUp(){

gameObject.active=false;
GameObject.Find("Buttons").SendMessage("resetbtn");
}