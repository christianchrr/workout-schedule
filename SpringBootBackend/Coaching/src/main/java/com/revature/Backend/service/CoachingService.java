package com.revature.Backend.service;

import java.util.List;

import com.revature.Backend.model.User;

public interface CoachingService {

	List <User> findAllUsers(); 

	
	User addAthlete(User user); 
	
	User findByEmail(String email);
	
	void removeAthlete(String email);




}
