using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Can : MonoBehaviour
{
    private void Update()
    {
        if (transform.position.y < -20)
        {
            GameManager.Score += 1;
            Destroy(gameObject);
        }
    }
}
