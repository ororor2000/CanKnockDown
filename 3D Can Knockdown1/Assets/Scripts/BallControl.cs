using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;
using UnityEngine;

public class BallControl : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface" && GetComponent<Ball>().ClearToThrow)
        {
            GetComponent<Ball>().ClearToThrow = false;
            GameManager.BallCount += 1;

           
            GetComponent<Ball>().MoveToNextLevel = true;           

            StartCoroutine(Wait(2, () =>
            {
                GetComponent<ThrowBall>().RespawnBall();
            }
            ));
        }
    }

    void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "ExplosiveCan")
        {
            other.gameObject.GetComponent<CanExplosion>().Explode();
        }
    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }
}
