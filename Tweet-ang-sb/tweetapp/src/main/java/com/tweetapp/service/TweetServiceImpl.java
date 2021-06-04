package com.tweetapp.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.TweetappApplication;
import com.tweetapp.kafka.Producer;
import com.tweetapp.model.Tweet;
import com.tweetapp.model.TweetReply;
import com.tweetapp.repository.TweetReplyRepository;
import com.tweetapp.repository.TweetRepository;

@Service
public class TweetServiceImpl implements TweetService{
	
	private static Log log = LogFactory.getLog(TweetappApplication.class);
	@Autowired
	Producer producer;
	@Autowired
	private TweetRepository tweetRepository;
	
	@Autowired
	private TweetReplyRepository tweetReplyRepository;

	@Override
	public List<Tweet> getAllTweets() {
		// TODO Auto-generated method stub
		log.info("get all the tweetts!");
		return tweetRepository.findAll();
	}

	@Override
	public List<Tweet> getAllTweets(String loginId) {
		// TODO Auto-generated method stub
		log.info("get all the tweets of a user!");
		return tweetRepository.findByLoginId(loginId);
	}

	@Override
	public List<Tweet> postTweets(String loginId, Tweet tweet) {
		// TODO Auto-generated method stub
		tweet.setLoginId(loginId);
		tweet.setTweetTime(new Date());
		tweet.setLike(0);
		tweetRepository.save(tweet);
		log.info("post tweet of a user!");
		producer.sendMessage(tweet.getTweetMessage());
		
		return tweetRepository.findByLoginId(loginId);
	}

	@Override
	public Tweet updateTweet(String tweetId, String loginId,Tweet tweet) {
		// TODO Auto-generated method stub
		Optional<Tweet> existingTweet=tweetRepository.findById(tweetId);
		existingTweet.get().setTweetMessage(tweet.getTweetMessage());
		existingTweet.get().setTweetTime(new Date());
		log.info("update tweets of a user!");
		return tweetRepository.save(existingTweet.get());
	}

	@Override
	public Tweet likeTweet(String tweetId, String loginId) {
		// TODO Auto-generated method stub
		Optional<Tweet> existingTweet=tweetRepository.findById(tweetId);
		existingTweet.get().setLike(existingTweet.get().getLike()+1);
		log.info("like the tweet of a user!");
		return tweetRepository.save(existingTweet.get());
	}

	@Override
	public List<Tweet> deleteTweet(String tweetId, String loginId) {
		// TODO Auto-generated method stub
	tweetRepository.deleteById(tweetId);
	log.info("delete a tweet!");
	return tweetRepository.findByLoginId(loginId);
	
	}

	@Override
	public List<TweetReply> replyTweet(String tweetId, String loginId, TweetReply tweetReply) {
		// TODO Auto-generated method stub
		System.out.print(tweetReply.getTweetMessage());
		tweetReply.setRepkyTweetTime(new Date());
		tweetReply.setTweetId(tweetId);
		tweetReplyRepository.save(tweetReply);
		log.info("post a reply for a tweet!");
		return tweetReplyRepository.findByTweetId(tweetId);
	}

	@Override
	public List<TweetReply> getTweetReplies(String tweetId) {
		// TODO Auto-generated method stub
		log.info("get all the replies of a tweet by user!");
		return tweetReplyRepository.findByTweetId(tweetId);
	}

}
