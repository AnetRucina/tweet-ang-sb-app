package com.tweetapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.TweetReply;
import com.tweetapp.model.User;
import com.tweetapp.service.TweetService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TweetControllerImpl implements TweetController {
	
	@Autowired
	private TweetService tweetService;

	@Override
	public ResponseEntity<List<Tweet>> getAllTweets() {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.getAllTweets(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<Tweet>> findTweetByUser(String loginId) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.getAllTweets(loginId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<Tweet>> postTweets(String loginId, Tweet tweet) {
		return new ResponseEntity<>(tweetService.postTweets(loginId,tweet), HttpStatus.OK);
		
	}

	@Override
	public ResponseEntity<Tweet> updateTweet(String tweetId, String loginId,Tweet tweet) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.updateTweet(tweetId,loginId,tweet), HttpStatus.OK);
		
	}

	@Override
	public ResponseEntity<List<Tweet>> deleteTweet(String tweetId, String loginId) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.deleteTweet(tweetId,loginId),HttpStatus.OK);
		
	}

	@Override
	public ResponseEntity<Tweet> likeTweet(String tweetId, String loginId) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.likeTweet(tweetId,loginId), HttpStatus.OK);
		
	}

	@Override
	public ResponseEntity<List<TweetReply>> replyTweet(String tweetId, String loginId, TweetReply TweetReply) {
		
		return new ResponseEntity<>(tweetService.replyTweet(tweetId,loginId,TweetReply), HttpStatus.OK);
		// TODO Auto-generated method stub
		
	}

	@Override
	public ResponseEntity<List<TweetReply>> getreplyTweet(String tweetId) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(tweetService.getTweetReplies(tweetId), HttpStatus.OK);
	}

}
