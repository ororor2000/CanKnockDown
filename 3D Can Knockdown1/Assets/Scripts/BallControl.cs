using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;
using UnityEngine;

public class BallControl : MonoBehaviour
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

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface")
        {
            GameManager.BallCount += 1;

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
