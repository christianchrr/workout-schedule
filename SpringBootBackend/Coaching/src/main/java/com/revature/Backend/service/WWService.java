package com.revature.Backend.service;

import java.util.List;

import com.revature.Backend.model.WeeklyWorkouts;

public interface WWService {
	
	//Add a workout
	WeeklyWorkouts addNewWorkout(WeeklyWorkouts workout); 
	
	//get all  records from Weekly Workouts table
	List<WeeklyWorkouts> getAllWeekly(); 
	
	//update a record from weekly workouts table
	WeeklyWorkouts updateWW(WeeklyWorkouts ww); 

}
