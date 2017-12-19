using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class RandomCanGenerator : MonoBehaviour
{
    public GameObject[] canTypes;
    //0 - normal
    //1 - explosive
    public List<GameObject> cans;

    public GameObject canHolder;
    public GameObject shelf;

    private float verticalOffset = 2.2f;
    private float horizontalOffset = 1.2f;

    private int size;

    // Use this for initialization
    void Start()
    {
        SetupNormalArcadeMode();
      /*
        cans.Add(InstantiateCan(RandomCanType(), SetOffset(0, 0)));
        cans.Add(InstantiateCan(RandomCanType(), SetOffset(-horizontalOffset, 0)));
        cans.Add(InstantiateCan(RandomCanType(), SetOffset(-2 * horizontalOffset, 0)));
        cans.Add(InstantiateCan(RandomCanType(), SetOffset(-horizontalOffset / 2, verticalOffset)));
        cans.Add(InstantiateCan(RandomCanType(), SetOffset(-horizontalOffset * 1.5f , verticalOffset)));*/
    }

    int Random(int low, int high)
    {
        return UnityEngine.Random.Range(low, high);
    }

    void SetupNormalArcadeMode()
    {
        size = GenerateNumberOfCans();

        if (size == 1 || size == 2)
        {
            for (int i = 0; i < size; i++)
            {
                cans.Add(InstantiateCan(RandomCanType(), SetOffset(-horizontalOffset * i ,0)));
            }
        }
        else
        {
            Dictionary<int, int> rows = new Dictionary<int, int>();
            List<int> rowNum = new List<int>();
            List<int> rowSize = new List<int>();

            int m = 1;
            int sum = 0;
            while (sum < size)
            {
                rowNum.Add(rows.Count);
                rowSize.Add(m);
                sum += m;
                m += 1;
            }

            rowNum.Reverse();            

            for (int i = 0; i < rowNum.Count; i++)
            {
                //cans.Add(InstantiateCan(RandomCanType(), SetOffset()));
            }
        }

    }
        
    int RandomCanType()
    {
        var arr = new[] {0, 0, 0, 0, 0, 0, 1 };

        return arr[Random(0, arr.Length)];
    }

    int GenerateNumberOfCans()
    {
        var arr = new[] {1, 2,};// 3, 6, 10};

        return arr[Random(0, arr.Length)];
    }

    GameObject InstantiateCan(int type, Vector3 offset)
    {
        GameObject can = Instantiate(canTypes[type]);
        can.name = "Can " +cans.Count.ToString();
        can.transform.SetParent(canHolder.transform);
        can.transform.position = new Vector3(0, 0, 0);
        can.transform.localPosition = offset;

        if (type == 1)
        {
            can.name = "Explosive " + can.name;
        }

        return can;
    }

    Vector3 SetOffset(float xOffset, float yOffset)
    {
        return new Vector3(0 + xOffset, 2.2f + yOffset, 0);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
