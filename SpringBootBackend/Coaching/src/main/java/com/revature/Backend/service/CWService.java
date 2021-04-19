package com.revature.Backend.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.revature.Backend.model.CompletedWorkouts;

public interface CWService {

	//Get all records from CompletedWorkout table
	List <CompletedWorkouts> getAllCW(); 
	
	//Get all records by a specific email
	List<CompletedWorkouts> getCWbyEmail(String email); 
	
	//Add records by specific email
	CompletedWorkouts submitCW(CompletedWorkouts cw); 
	
}
