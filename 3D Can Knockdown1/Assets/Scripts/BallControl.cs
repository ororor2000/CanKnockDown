using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using JetBrains.Annotations;
using UnityEngine;

public class BallControl : MonoBehaviour, INotifyPropertyChanged
{

    private GameObject ball;

	// Use this for initialization
	void Start ()
    {
	    ball = GameObject.FindWithTag("Ball");	
	}
	
	// Update is called once per frame
	void Update ()
    {

		
	}    

    public event PropertyChangedEventHandler PropertyChanged;

    [NotifyPropertyChangedInvocator]
    protected virtual void OnBallFalling(string propertyName)
    {
        var handler = PropertyChanged;
        if (handler != null) handler(this, new PropertyChangedEventArgs(propertyName));
    }
}
