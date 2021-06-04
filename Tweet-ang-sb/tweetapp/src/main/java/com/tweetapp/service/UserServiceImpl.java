package com.tweetapp.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.TweetappApplication;
import com.tweetapp.exception.CustomException;
import com.tweetapp.model.User;
import com.tweetapp.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService{
	private static Log log = LogFactory.getLog(TweetappApplication.class);
	@Autowired
	private UserRepository userRepository;

	@Override
	public User registerUser(User user) throws CustomException {
		User existingUserEmail=userRepository.findByEmail(user.getEmail());
		User existingUserLoginId=userRepository.findByLoginId(user.getLoginId());
		if(existingUserEmail!=null && existingUserLoginId!=null)
			throw new CustomException("User with the above email and login Id exists");
		if(existingUserEmail!=null)
			throw new CustomException("User with the above email exists");
		if(existingUserLoginId!=null)
			throw new CustomException("User with the above login Id exists");	
		log.info("Inside register User!");
		return userRepository.save(user);
	}

	@Override
	public User loginUser(User user) throws CustomException {
		User existingUser=userRepository.findByLoginId(user.getLoginId());
		log.info("Inside login User!");
		if(existingUser!=null) {
			if(existingUser.getPassword().equals(user.getPassword())) {
				existingUser.setLogin(true);
				return userRepository.save(existingUser);
			}else {
				throw new CustomException("Invalid Password");
			}
		}else {
			throw new CustomException("User doesnt exists.Please Register to login");
		}
		
	}

	@Override
	public User changePasswordUser(User user) throws CustomException {
		// TODO Auto-generated method stub
		log.info("change password!");
		User existingUser=userRepository.findByLoginId(user.getLoginId());
		if(existingUser!=null) {
			existingUser.setPassword(user.getPassword());
			return userRepository.save(existingUser);
		}else {
			throw new CustomException("User doesnt exists.Please Register to login");
		}
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		log.info("get all users!");
		return userRepository.findAll();
	}

	@Override
	public List<User> searchByUser(String userName) {
		// TODO Auto-generated method stub
		log.info("Search by username!");
		return userRepository.findByFirstNameRegex(userName+".*");
	}

}
