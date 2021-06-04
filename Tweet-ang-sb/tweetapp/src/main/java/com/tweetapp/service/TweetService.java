package com.tweetapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.TweetReply;


public interface TweetService {

	public List<Tweet> getAllTweets();

	public List<Tweet> getAllTweets(String loginId);

	public List<Tweet> postTweets(String loginId, Tweet tweet);

	public Tweet updateTweet(String tweetId, String loginId,Tweet tweet);

	public Tweet likeTweet(String tweetId, String loginId);

	public List<Tweet> deleteTweet(String tweetId, String loginId);

	public List<TweetReply> replyTweet(String tweetId, String loginId, TweetReply tweetReply);

	public List<TweetReply> getTweetReplies(String tweetId);

}
