using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{
    private bool fell;

    private void Start()
    {
        fell = false;
    }

    void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Ball")
        {
            GetComponent<AudioSource>().Play();
        }  
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface" && !fell)
        {
            GameManager.Score += 1;
            fell = true;
        }
    }
}
