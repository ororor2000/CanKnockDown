using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    private bool clearToThrow;

    void Start()
    {
        clearToThrow = true;
    }

    public bool ClearToThrow
    {
        get { return clearToThrow; }
        set { clearToThrow = value; }
    }
}
