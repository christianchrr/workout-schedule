package com.revature.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Backend.model.User;
import com.revature.Backend.service.CoachingService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CoachingController {
	
	@Autowired
	CoachingService service; 
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> get() { 
		List<User> AllUsers = service.findAllUsers(); 
		return new ResponseEntity<List<User>>(AllUsers, HttpStatus.OK);
	}
	
	@PostMapping("/adduser")
	public ResponseEntity<User> save(@RequestBody User user) { 
		User athlete = service.addAthlete(user); 
		return new ResponseEntity<User>(athlete, HttpStatus.OK) ;
	}
	
	@GetMapping("/users/{email}")
	public ResponseEntity<User> get(@PathVariable("email") String email) { 
		User user = service.findByEmail(email); 
		return new ResponseEntity<User>(user, HttpStatus.OK) ;
	}
	
	@DeleteMapping("/users/{email}")
	public ResponseEntity<String> delete(@PathVariable("email") String email) { 
		service.removeAthlete(email);
		return new ResponseEntity<String>("Athlete has been removed from roster.", HttpStatus.OK);  
	}
}
