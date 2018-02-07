using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;
using UnityEngine;

public class BallControl : MonoBehaviour
{
    private GameManager game;

    private bool clearToThrow;

    void Start()
    {
        game = GameObject.FindGameObjectWithTag("Manager").GetComponent<GameManager>();
        clearToThrow = true;
    }

    void Update()
    {
        /*if (Input.GetTouch(0).phase == TouchPhase.Began && clearToThrow)
        {
            transform.position = new Vector3(TouchToWorld(Input.GetTouch(0).position), transform.position.y, transform.position.z);
        }*/
    }

    public bool ClearToThrow
    {
        get { return clearToThrow; }
        set { clearToThrow = value; }
    }

    private float TouchToWorld(Vector3 position)
    {
        float screen = Screen.width;

        return (position.x * game.WorldWidth / screen) - (game.WorldWidth / 2);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface")
        {
            Debug.Log("Fell");
            GameManager.BallCount += 1;

            StartCoroutine(Wait(2, () =>
            {
                GetComponent<ThrowBall>().RespawnBall();
            }
            ));
        }
        Debug.Log(other.name);

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
