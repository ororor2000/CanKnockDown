using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    private bool clearToThrow;
    private bool moveToNextLevel;

    void Start()
    {
        clearToThrow = true;
        moveToNextLevel = false;
    }

    public bool ClearToThrow
    {
        get { return clearToThrow; }
        set { clearToThrow = value; }
    }

    public bool MoveToNextLevel
    {
        get { return moveToNextLevel; }
        set { moveToNextLevel = value; }
    }
}
