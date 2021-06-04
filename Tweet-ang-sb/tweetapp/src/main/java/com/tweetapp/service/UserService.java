package com.tweetapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tweetapp.exception.CustomException;
import com.tweetapp.model.User;
public interface UserService {

	public User registerUser(User user) throws CustomException;

	public User loginUser(User user) throws CustomException;

	public User changePasswordUser(User user) throws CustomException;

	public List<User> getAllUsers();

	public List<User> searchByUser(String userName);

}
