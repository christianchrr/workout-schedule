package com.revature.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.Backend.model.User;
import com.revature.Backend.repository.CoachingRepository;

@Service
public class CoachingServiceImpl implements CoachingService {
	
	@Autowired
	CoachingRepository repository; 
	
	@Override
	public List<User> findAllUsers() {
		return repository.findAll();
	}
	

	@Override
	public User addAthlete(User user) {
		repository.save(user);
		return user; 
	}

	@Override
	public User findByEmail(String email) {
		if (repository.findById(email).isPresent()) { 
			return repository.findById(email).get(); 
		}
		//implement exceptions!!
		return null; 
	}

	@Override
	public void removeAthlete(String email) {
		User removed = findByEmail(email);
		repository.delete(removed);
	}


	
	@Override
	public User updateAthlete(User user) {
		User FoundUser = repository.findById(user.getEmail()).get();
		FoundUser.setFname(user.getFname());
		FoundUser.setLname(user.getLname());
		FoundUser.setPassword(user.getPassword());
		FoundUser.setRole(user.getRole());
		return repository.save(FoundUser);
	}
	
	
	
	




}
