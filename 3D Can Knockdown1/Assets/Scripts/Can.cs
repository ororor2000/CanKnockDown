using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag.Equals("GameController"))
        {
            Destroy(gameObject);
            Debug.Log("Fell");
            GameManager.score += 1;
        }
    }
}
