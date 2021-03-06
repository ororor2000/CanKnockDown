﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class CanExplosion : MonoBehaviour
{
    public GameObject explosionEffect;
    private bool exploded;


    //[SerializeField] Needed?
    private float force = 70f;
    [SerializeField]
    private float radius = 5f;

    private bool fell;

    // Use this for initialization
    void Start()
    {
        exploded = false;
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

                if (rb != null && nearObj.GetComponent<CanExplosion>() == null)
                {
                    rb.AddExplosionForce(force, transform.position, radius);
                }               
            }

            var collidersToExplode = Physics.OverlapSphere(transform.position, 0.5f);

            foreach (var nearObj in collidersToExplode)
            {
                CanExplosion explosion = nearObj.GetComponent<CanExplosion>();
                var rb = nearObj.GetComponent<Rigidbody>();

                if (explosion != null)
                {              
                    rb.AddExplosionForce(force, transform.position, radius);      
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

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Surface" && !fell)
        {
            GameManager.Score += 1;
            fell = true;
            exploded = true;
        }
    }
}