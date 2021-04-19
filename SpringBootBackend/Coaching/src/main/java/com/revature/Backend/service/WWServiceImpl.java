package com.revature.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.Backend.model.User;
import com.revature.Backend.model.WeeklyWorkouts;
import com.revature.Backend.repository.WWorkoutRepository;

@Service
public class WWServiceImpl implements WWService {

	@Autowired
	WWorkoutRepository wwrepo; 
	
	@Override
	public WeeklyWorkouts addNewWorkout(WeeklyWorkouts workout) {
		wwrepo.save(workout);
		return workout;
	}
	
	@Override
	public List<WeeklyWorkouts> getAllWeekly() {
		return wwrepo.findAll();
	}
	
	@Override
	public WeeklyWorkouts updateWW(WeeklyWorkouts ww) { 
		WeeklyWorkouts updatedww = wwrepo.findById(ww.getId()).get();
		updatedww.setDay(ww.getDay());
		updatedww.setWorkout(ww.getWorkout());
		return wwrepo.save(updatedww);
	}

	

}
