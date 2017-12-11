using System;
using UnityEngine;
using GoogleMobileAds;
using GoogleMobileAds.Api;
using ChartboostSDK;
using UnityEngine.Advertisements;
// Example script showing how to invoke the Google Mobile Ads Unity plugin.
public class GoogleMobileAdsDemoScript : MonoBehaviour
{
	
	private BannerView bannerView;
	private InterstitialAd interstitial;
	private RewardBasedVideoAd rewardBasedVideo;
	private float deltaTime = 0.0f;
	private static string outputMessage = "";
	
	public static string OutputMessage
	{
		set { outputMessage = value; }
	}
	
	public void unityadss()
	{
		Advertisement.Show ();
	}
	
	
	void Start()
	{
		Advertisement.Initialize ("102346",false);
		RequestBanner();
		bannerView.Show();
		Chartboost.cacheInterstitial(CBLocation.Default);
		Invoke ("showschart",1f);
		// Get singleton reward based video ad reference.
		//        rewardBasedVideo = RewardBasedVideoAd.Instance;
		//
		//        // RewardBasedVideoAd is a singleton, so handlers should only be registered once.
		//        rewardBasedVideo.OnAdLoaded += HandleRewardBasedVideoLoaded;
		//        rewardBasedVideo.OnAdFailedToLoad += HandleRewardBasedVideoFailedToLoad;
		//        rewardBasedVideo.OnAdOpening += HandleRewardBasedVideoOpened;
		//        rewardBasedVideo.OnAdStarted += HandleRewardBasedVideoStarted;
		//        rewardBasedVideo.OnAdRewarded += HandleRewardBasedVideoRewarded;
		//        rewardBasedVideo.OnAdClosed += HandleRewardBasedVideoClosed;
		//        rewardBasedVideo.OnAdLeavingApplication += HandleRewardBasedVideoLeftApplication;
	}
	public void showschart(){
		Chartboost.showInterstitial(CBLocation.Default);
		
	}
	void Update()
	{
		// Calculate simple moving average for time to render screen. 0.1 factor used as smoothing
		// value.
		deltaTime += (Time.deltaTime - deltaTime) * 0.1f;
	}

	private void RequestBanner()
	{

		string adUnitId = "ca-app-p8";
		// Create a 320x50 banner at the top of the screen.
		bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Bottom);
		// Register for ad events.
		bannerView.OnAdLoaded += HandleAdLoaded;
		bannerView.OnAdFailedToLoad += HandleAdFailedToLoad;
		bannerView.OnAdLoaded += HandleAdOpened;
		bannerView.OnAdClosed += HandleAdClosed;
		bannerView.OnAdLeavingApplication += HandleAdLeftApplication;
		// Load a banner ad.
		bannerView.LoadAd(createAdRequest());
		Debug.Log ("  Test banner ads");
	}
	
	public void RequestInterstitial()
	{

		string adUnitId = "ca-app-pub-36";
		// Create an interstitial.
		interstitial = new InterstitialAd(adUnitId);
		// Register for ad events.
		interstitial.OnAdLoaded += HandleInterstitialLoaded;
		interstitial.OnAdFailedToLoad += HandleInterstitialFailedToLoad;
		interstitial.OnAdOpening += HandleInterstitialOpened;
		interstitial.OnAdClosed += HandleInterstitialClosed;
		interstitial.OnAdLeavingApplication += HandleInterstitialLeftApplication;
		// Load an interstitial ad.
		interstitial.LoadAd(createAdRequest());

		Debug.Log ("  Test interstitial ads");
	}
	
	// Returns an ad request with custom ad targeting.
	private AdRequest createAdRequest()
	{
		return new AdRequest.Builder()
			.AddTestDevice(AdRequest.TestDeviceSimulator)
				.AddTestDevice("0123456789ABCDEF0123456789ABCDEF")
				.AddKeyword("game")
				.SetGender(Gender.Male)
				.SetBirthday(new DateTime(1985, 1, 1))
				.TagForChildDirectedTreatment(false)
				.AddExtra("color_bg", "9B30FF")
				.Build();
	}
	
	private void RequestRewardBasedVideo()
	{
		#if UNITY_EDITOR
		string adUnitId = "ca-app-pub-2523586325187527/8300972498";
		#elif UNITY_ANDROID
		string adUnitId = "ca-app-pub-2523586325187527/8300972498";
		#elif UNITY_IPHONE
		string adUnitId = "ca-app-pub-2523586325187527/8300972498";
		#else
		string adUnitId = "ca-app-pub-2523586325187527/8300972498";
		#endif
		
		
		AdRequest request1 = new AdRequest.Builder().Build();
		rewardBasedVideo.LoadAd(request1, adUnitId);
		
		//        rewardBasedVideo.LoadAd(createAdRequest(), adUnitId);
	}
	
	public void ShowInterstitial()
	{
		if (interstitial.IsLoaded())
		{
			interstitial.Show();
		}
		else
		{
			Debug.Log("Interstitial is not ready yet.");
		}
	}
	
	private void ShowRewardBasedVideo()
	{
		if (rewardBasedVideo.IsLoaded())
		{
			rewardBasedVideo.Show();
		} else
		{
			Debug.Log("Reward based video ad is not ready yet.");
		}
	}
	
	#region Banner callback handlers
	
	public void HandleAdLoaded(object sender, EventArgs args)
	{
		Debug.Log("HandleAdLoaded event received.");
	}
	
	public void HandleAdFailedToLoad(object sender, AdFailedToLoadEventArgs args)
	{
		Debug.Log("HandleFailedToReceiveAd event received with message: " + args.Message);
	}
	
	public void HandleAdOpened(object sender, EventArgs args)
	{
		Debug.Log("HandleAdOpened event received");
	}
	
	void HandleAdClosing(object sender, EventArgs args)
	{
		Debug.Log("HandleAdClosing event received");
	}
	
	public void HandleAdClosed(object sender, EventArgs args)
	{
		Debug.Log("HandleAdClosed event received");
	}
	
	public void HandleAdLeftApplication(object sender, EventArgs args)
	{
		Debug.Log("HandleAdLeftApplication event received");
	}
	
	#endregion
	
	#region Interstitial callback handlers
	
	public void HandleInterstitialLoaded(object sender, EventArgs args)
	{
		Debug.Log("HandleInterstitialLoaded event received.");
	}
	
	public void HandleInterstitialFailedToLoad(object sender, AdFailedToLoadEventArgs args)
	{
		Debug.Log("HandleInterstitialFailedToLoad event received with message: " + args.Message);
	}
	
	public void HandleInterstitialOpened(object sender, EventArgs args)
	{
		Debug.Log("HandleInterstitialOpened event received");
	}
	
	void HandleInterstitialClosing(object sender, EventArgs args)
	{
		Debug.Log("HandleInterstitialClosing event received");
	}
	
	public void HandleInterstitialClosed(object sender, EventArgs args)
	{
		Debug.Log("HandleInterstitialClosed event received");
	}
	
	public void HandleInterstitialLeftApplication(object sender, EventArgs args)
	{
		Debug.Log("HandleInterstitialLeftApplication event received");
	}
	
	#endregion
	
	#region RewardBasedVideo callback handlers
	
	public void HandleRewardBasedVideoLoaded(object sender, EventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoLoaded event received.");
	}
	
	public void HandleRewardBasedVideoFailedToLoad(object sender, AdFailedToLoadEventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoFailedToLoad event received with message: " + args.Message);
	}
	
	public void HandleRewardBasedVideoOpened(object sender, EventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoOpened event received");
	}
	
	public void HandleRewardBasedVideoStarted(object sender, EventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoStarted event received");
	}
	
	public void HandleRewardBasedVideoClosed(object sender, EventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoClosed event received");
	}
	
	public void HandleRewardBasedVideoRewarded(object sender, Reward args)
	{
		string type = args.Type;
		double amount = args.Amount;
		Debug.Log("Noman HandleRewardBasedVideoRewarded event received for " + amount.ToString() + " " +
		          type);
	}
	
	public void HandleRewardBasedVideoLeftApplication(object sender, EventArgs args)
	{
		Debug.Log("HandleRewardBasedVideoLeftApplication event received");
	}
	
	#endregion
}
