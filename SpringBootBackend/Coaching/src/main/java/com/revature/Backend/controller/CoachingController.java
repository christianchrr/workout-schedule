package com.revature.Backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	private CoachingService service;

	@GetMapping("/users")
	public ResponseEntity<List<User>> get() {
		List<User> AllUsers = service.findAllUsers();
		return new ResponseEntity<List<User>>(AllUsers, HttpStatus.OK);
	}
	
	@GetMapping("/role/{role}")
	public ResponseEntity<List<User>> getUsersbyRole(@PathVariable("role") String role) {
		List<User> user = service.findAllUsers();
		List<User> filteredUsers = new ArrayList<User>();
		for (User value : user) {
			if (value.getRole().equals(role)) {
				filteredUsers.add(value);
			}
		}
		return new ResponseEntity<List<User>>(filteredUsers, HttpStatus.OK);
	}
	

	@PostMapping("/adduser")
	public ResponseEntity<User> save(@RequestBody User user) {
		user.setEmail(user.getEmail().toLowerCase());
		User athlete = service.addAthlete(user);
		return new ResponseEntity<User>(athlete, HttpStatus.OK);
	}
	
	@PutMapping("/updateuser")
	public ResponseEntity<User> put(@RequestBody User user) {
		User athlete = service.updateAthlete(user);
		return new ResponseEntity<User>(athlete, HttpStatus.OK);
	}

	@GetMapping("/useremail/{email}")
	public ResponseEntity<User> get(@PathVariable("email") String email) {
		User user = service.findByEmail(email);
		List<User> loginUser = new ArrayList<User>();
		loginUser.add(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);

	}

	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<List<User>> get(@PathVariable("email") String email,
			@PathVariable("password") String password) {
		User user = service.findByEmail(email);
		List<User> loginUser = new ArrayList<User>();
		if (user != null && user.getPassword().equals(password)) {
			loginUser.add(user);
		}
		return new ResponseEntity<List<User>>(loginUser, HttpStatus.OK);

	}

	@DeleteMapping("/email/{email}")
	public ResponseEntity<String> delete(@PathVariable("email") String email) {
		service.removeAthlete(email);
		return new ResponseEntity<String>("Athlete has been removed from roster.", HttpStatus.OK);
	}
}
