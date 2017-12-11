



var buttonName : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var gui_texture : GUITexture;	
var ButtonSound : AudioClip;
var gameobject_mainmenu:GameObject;
static var is_sound_on:boolean=true;
static var is_music_on:boolean=true;


static var waittimer:float=0;


function OnMouseEnter(){
gui_texture.texture = rollOverTexture;
      if(PlayerPrefs.GetInt("sound")==1)
       GetComponent.<AudioSource>().PlayOneShot(ButtonSound);
       Debug.Log("PlayerPrefs.GetInt(sound)=  "+PlayerPrefs.GetInt("sound"));
}
function OnMouseExit(){
gui_texture.texture = normalTexture;
}
function OnMouseUp(){
//gui_texture.enabled=false;

if(buttonName=="credit")
GameObject.Find("credits").gameObject.SendMessage("credit_menu_call");
if(buttonName=="more")
Application.OpenURL ("https://play.google.com/store/apps/developer?id=joltatech.com");

//if(buttonName=="credit")

}
function Start () {
if(PlayerPrefs.GetInt("sound")==0)
is_sound_on=false;
else
is_sound_on=true;


//gameobject_mainmenu.transform.position=Vector3(10,10,10);
}

function Update () {












	if (Input.touchCount>0) {
    for (var touch : Touch in Input.touches) {
       if (touch.phase == TouchPhase.Began && gui_texture.HitTest(touch.position)) {
     //  guiTexture.enabled=false;
       gui_texture.texture = rollOverTexture;
       if(PlayerPrefs.GetInt("sound")==1)
       GetComponent.<AudioSource>().PlayOneShot(ButtonSound);
       }
       
       if(touch.phase==TouchPhase.Ended&&gui_texture.HitTest(touch.position))
       {
       gui_texture.texture = normalTexture;
       if(buttonName=="credit")
GameObject.Find("credits").gameObject.SendMessage("credit_menu_call");
if(buttonName=="more")
Application.OpenURL ("https://play.google.com/store/apps/developer?id=joltatech.com");
       
       }
       
        if(touch.phase==TouchPhase.Moved&&gui_texture.HitTest(touch.position))
       {
       gui_texture.texture = normalTexture;
       }
       
       

       
    } 
}
}