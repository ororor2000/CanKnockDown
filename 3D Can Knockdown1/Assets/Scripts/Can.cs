using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{

    void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Ball")
        {
            gameObject.GetComponent<AudioSource>().Play();
        }    
    }

    private void Update()
    {
        if (transform.position.y < -20)
        {
            GameManager.Score += 1;
            Destroy(gameObject);
        }
    }
}
