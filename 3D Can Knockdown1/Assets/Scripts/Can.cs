using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{
    private bool fell;
    private AudioSource source;

    private AudioClip[] clips;    

    private void Start()
    {
        fell = false;
        source = GetComponent<AudioSource>();
        //AudioClip clip = AssetDatabase.LoadAssetAtPath<AudioClip>("Audio/MetalHit");

        //Debug.Log(clip.length);
    }

    void SwitchClip(string clipName)
    {
        //AudioClip clip = AssetDatabase.LoadAssetAtPath<AudioClip>("Audio/MetalHit");
    }

    void OnCollisionEnter(Collision collision)
    {
        source.volume = Mathf.Abs(collision.relativeVelocity.magnitude / (collision.relativeVelocity.magnitude - 1));//Add range of sounds so it wouldnt sound the same all the time.
        source.Play();
    }

    void OnTriggerEnter(Collider other)
    {
        Debug.Log(other.name);
        if (other.gameObject.tag == "Surface" && !fell)
        {
            GameManager.Score++;
            fell = true;
        }
    }
}
