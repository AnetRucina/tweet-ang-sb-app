package com.tweetapp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document("tweetReply")
public class TweetReply {
	
	@Id
	private String id;
	
	@Field("tweetMessage")
	private String tweetMessage;

	@Field("RepkyTweetTime")
	private Date RepkyTweetTime;

	@Field("tweetId")
	private String tweetId;
}
