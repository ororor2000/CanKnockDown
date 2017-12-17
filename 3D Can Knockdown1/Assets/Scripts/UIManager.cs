using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    private GameManager gameManager;
    private Vector3 screenSize;

	// Use this for initialization
	void Start ()
    {
        gameManager = GameObject.FindGameObjectWithTag("Manager").GetComponent<GameManager>();
        screenSize = new Vector3(Screen.width, Screen.height);
	}
	
	// Update is called once per frame
	void Update ()
    {
		
	}
}
