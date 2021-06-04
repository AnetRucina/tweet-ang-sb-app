package com.tweetapp.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Consumer {
	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;
	
	@KafkaListener(topics = "tweet_message", groupId = "group_id")
	public void consume(String message){
	System.out.println(message);
	}
}
