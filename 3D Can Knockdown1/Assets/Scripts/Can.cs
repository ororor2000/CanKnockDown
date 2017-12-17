using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{

    void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Ball")
        {
            gameObject.GetComponent<AudioSource>().Play();
        }  
        
        if (other.gameObject.tag == "Surface")
        {
            GameManager.Score += 1;
        }

        
    }
}
