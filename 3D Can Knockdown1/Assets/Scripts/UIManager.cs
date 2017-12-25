using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    private GameManager gameManager;
    private Vector2 screenSize;

    public Vector2 ScreenSize
    {
        get { return screenSize; }
    }

    // Use this for initialization
    void Start()
    {
        gameManager = GameObject.FindGameObjectWithTag("Manager").GetComponent<GameManager>();
        screenSize = new Vector2(Screen.width, Screen.height);
        Debug.Log(screenSize);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
