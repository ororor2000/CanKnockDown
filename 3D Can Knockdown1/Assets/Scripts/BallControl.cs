using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;
using UnityEngine;

public class BallControl : MonoBehaviour
{
    void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Surface" && GetComponent<Ball>().ClearToThrow)
        {
            GetComponent<Ball>().ClearToThrow = false;
            GameManager.BallCount += 1;

            StartCoroutine(Wait(2.5f, () =>
            {
                GetComponent<ThrowBall>().RespawnBall();
            }
            ));
        }
    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }
}
