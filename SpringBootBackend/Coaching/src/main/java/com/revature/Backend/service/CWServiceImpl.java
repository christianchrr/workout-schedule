package com.revature.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.revature.Backend.model.CompletedWorkouts;
import com.revature.Backend.model.User;
import com.revature.Backend.repository.CWorkoutRepository;

@Service
public class CWServiceImpl implements CWService {

	@Autowired
	CWorkoutRepository cwrepo; 
	
	@Override
	public List<CompletedWorkouts> getAllCW() {
		return cwrepo.findAll(); 
	}

	public List<CompletedWorkouts> getCWbyEmail(String email) {
		return cwrepo.getCWbyEmail(email); 
	}

	@Override
	public CompletedWorkouts submitCW(CompletedWorkouts cw) {
		cwrepo.save(cw);
		return cw; 
	}

}
