using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CanExplosion : MonoBehaviour
{
    public GameObject explosionEffect;
    private bool exploded;

    private Vector3 startPos;

    // Use this for initialization
    void Start()
    {
        exploded = false;
        startPos = transform.position;
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
            GameManager.Score += 1;
            exploded = true;
            Instantiate(explosionEffect, transform.position, transform.rotation);

            var colliders = Physics.OverlapSphere(transform.position, 5f);

            foreach (var nearObj in colliders)
            {
                Rigidbody rb = nearObj.GetComponent<Rigidbody>();
                CanExplosion explosion = nearObj.GetComponent<CanExplosion>();

                if (rb != null)
                {
                    rb.AddExplosionForce(700f, transform.position, 5f);
                }

                if (explosion != null)
                {
                    explosion.Explode();
                }

                Destroy(nearObj);
            }

            Destroy(gameObject);
        }
    }
}
