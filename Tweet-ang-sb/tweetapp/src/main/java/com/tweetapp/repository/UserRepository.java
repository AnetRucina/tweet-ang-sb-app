package com.tweetapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tweetapp.model.User;
@Repository
public interface UserRepository extends MongoRepository<User, String>{
	
	public List<User> findAll();

	public List<User> findByFirstNameRegex(String userName);
	
	public User findByEmail(String email);
	
	public User findByLoginId(String loginId);
	
	public Optional<User> findById(String Id);
	
	

	
}
