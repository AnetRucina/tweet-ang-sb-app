package com.tweetapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.model.Tweet;
import com.tweetapp.model.TweetReply;


@RequestMapping("/api/v1.0/tweets")
public interface TweetController {
	
	@GetMapping("/all")
	public  ResponseEntity<List<Tweet>> getAllTweets();
	
	@GetMapping("/{loginId}")
	public  ResponseEntity<List<Tweet>> findTweetByUser(@PathVariable("loginId") String loginId);
	
	@PostMapping("/{loginId}/add")
	public ResponseEntity<List<Tweet>> postTweets(@PathVariable("loginId") String loginId
									,@RequestBody Tweet tweet);
	
	@PutMapping("/{loginId}/update/{tweetId}")
	public  ResponseEntity<Tweet> updateTweet(@PathVariable("tweetId") String tweetId,
							@PathVariable("loginId") String loginId,
							@RequestBody Tweet tweet);
	
	@DeleteMapping("/{loginId}/delete/{tweetId}")
	public ResponseEntity<List<Tweet>> deleteTweet(@PathVariable("tweetId") String tweetId,
							@PathVariable("loginId") String loginId);
	
	@PutMapping("/{loginId}/like/{tweetId}")
	public ResponseEntity<Tweet> likeTweet(@PathVariable("tweetId") String tweetId,
							@PathVariable("loginId") String loginId);
	
	
	@PostMapping("/{loginId}/reply/{tweetId}")
	public  ResponseEntity<List<TweetReply>> replyTweet(@PathVariable("tweetId") String tweetId,
							@PathVariable("loginId") String loginId,@RequestBody TweetReply TweetReply);
	
	@GetMapping("/reply/{tweetId}")
	public  ResponseEntity<List<TweetReply>> getreplyTweet(@PathVariable("tweetId") String tweetId);


}
