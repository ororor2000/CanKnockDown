using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class AreaData
{
    private float areascore;
    private float areaBallCount;

    public float AreaScore
    {
        get { return areascore; }
        set { areascore = value; }
    }
    public float AreaBallCount
    {
        get { return areaBallCount; }
        set { areaBallCount = value; }
    }
}

[Serializable]
public class LevelData
{


    private float score;

    private float ballcount;

    public LevelData() { score = 0; ballcount = 0; }

    public LevelData(float score, float ballcount)
    {
        this.score = score;
        this.ballcount = ballcount;
    }

    public float Score
    {
        get { return score; }
        set { score = value; }
    }
    public float BallCount
    {
        get { return ballcount; }
        set { ballcount = value; }
    }
}
