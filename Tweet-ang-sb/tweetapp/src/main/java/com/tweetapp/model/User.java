package com.tweetapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document("user")
public class User {
	
	@Id
	private String id;
	
	@Field("firstName")
	private String firstName;

	@Field("lastName")
	private String lastName;

	@Indexed(name = "email")
	private String email;

	@Indexed(name = "loginId")
	private String loginId;

	@Field("password")
	private String password;

	@Field("confirmPassword")
	private String confirmPassword;

	@Field("contactNumber")
	private long contactNumber;

	@Field("isLogin")
	private boolean isLogin = false;
}
