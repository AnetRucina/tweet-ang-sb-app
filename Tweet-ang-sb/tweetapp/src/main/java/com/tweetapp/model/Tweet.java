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
@Document("tweet")
public class Tweet {
	@Id
	private String id;

	@Field("tweetMessage")
	private String tweetMessage;

	@Field("like")
	private int like;

	@Field("tweetTime")
	private Date tweetTime;

	@Field("loginId")
	private String loginId;
}
