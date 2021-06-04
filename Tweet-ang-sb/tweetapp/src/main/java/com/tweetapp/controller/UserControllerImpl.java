package com.tweetapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.exception.CustomException;
import com.tweetapp.model.User;
import com.tweetapp.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserControllerImpl implements UserController{
	
	@Autowired
	private UserService userService;

	@Override
	public ResponseEntity<User> registerUser(User user) throws CustomException {
		// TODO Auto-generated method stub
	 return new ResponseEntity<>(userService.registerUser(user), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> loginUser(User user) throws CustomException {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(userService.loginUser(user), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> changePasswordUser(User user) throws CustomException {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(userService.changePasswordUser(user), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<User>> getAllUsers() {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<User>> searchByUser(String userName) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(userService.searchByUser(userName), HttpStatus.OK);
	}

}
