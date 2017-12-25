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

    void OnCollisionEnter(Collision collision)
    {
        GetComponent<AudioSource>().volume = Mathf.Abs(collision.relativeVelocity.magnitude / (collision.relativeVelocity.magnitude - 1));//Add range of sounds so it wouldnt sound the same all the time.
        GetComponent<AudioSource>().Play();
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface" && !fell)
        {
            GameManager.Score++;
            fell = true;
        }
    }
}
