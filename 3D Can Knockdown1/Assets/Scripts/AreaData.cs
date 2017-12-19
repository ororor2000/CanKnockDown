using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class AreaData
{
    public float totalScore;
    public float totalBallCount;
    //public List<LevelData> levels;
}

[Serializable]
public class LevelData
{
    public float score;
    public float ballcount;
}
