package com.tweetapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.exception.CustomException;
import com.tweetapp.model.User;
@RequestMapping("/api/v1.0/tweets")
public interface UserController {

	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@Validated @RequestBody User user) throws CustomException;
	
	@PutMapping("/login")
	public ResponseEntity<User> loginUser(@Validated @RequestBody User user) throws CustomException;
	
	@PutMapping("/forgot")
	public ResponseEntity<User> changePasswordUser(@Validated @RequestBody User user) throws CustomException;
	
	@GetMapping("/users/all")
	public ResponseEntity<List<User>> getAllUsers();
	
	@GetMapping("/user/search")
	public ResponseEntity<List<User>> searchByUser(@RequestParam(value = "userName", required = false) String userName);
}
