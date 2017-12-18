using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CanExplosion : MonoBehaviour
{
    public GameObject explosionEffect;
    private bool exploded;

    private Vector3 startPos;

    [SerializeField]
    private float force = 70f;
    [SerializeField]
    private float radius = 5f;

    private bool fell;

    // Use this for initialization
    void Start()
    {
        exploded = false;
        startPos = transform.position;
        fell = false;
    }

    // Update is called once per frame
    void Update()
    {
        //
    }

    public void Explode()
    {
        if (!exploded)
        {
            GetComponent<AudioSource>().enabled = true;
            GetComponent<AudioSource>().Play();
            exploded = true;

            var obj = Instantiate(explosionEffect, transform.position, transform.rotation);

            var colliders = Physics.OverlapSphere(transform.position, radius);

            foreach (var nearObj in colliders)
            {
                Rigidbody rb = nearObj.GetComponent<Rigidbody>();
                CanExplosion explosion = nearObj.GetComponent<CanExplosion>();

                if (rb != null)
                {
                    rb.AddExplosionForce(force, transform.position, radius);
                }

                if (explosion != null)
                {
                    explosion.Explode();
                }
            }

            Destroy(gameObject.GetComponent<MeshCollider>());
            Destroy(gameObject.GetComponent<MeshRenderer>());
            GameManager.Score += 1;

            StartCoroutine(Wait(5, () =>
            {
                Destroy(obj);
            }));
        }
    }

    IEnumerator Wait(float sec, System.Action action)
    {
        yield return new WaitForSeconds(sec);
        action();
    }

    void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Surface" && !fell)
        {
            GameManager.Score += 1;
            fell = true;
            exploded = true;
        }
    }
}