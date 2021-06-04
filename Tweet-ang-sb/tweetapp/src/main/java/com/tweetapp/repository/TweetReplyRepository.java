package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.model.TweetReply;

public interface TweetReplyRepository extends MongoRepository<TweetReply, String>{ 
	
	List<TweetReply> findByTweetId(String tweetId);

}
