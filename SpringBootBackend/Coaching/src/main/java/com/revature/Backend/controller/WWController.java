package com.revature.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Backend.model.CompletedWorkouts;
import com.revature.Backend.model.User;
import com.revature.Backend.model.WeeklyWorkouts;
import com.revature.Backend.service.CWService;
import com.revature.Backend.service.WWService;

//==========================  WeeklyWorkouts' controller  ===================
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class WWController {
	
	@Autowired
	private WWService weeklyservice; 
	
	@Autowired
	private CWService compservice; 
	
	@GetMapping("/workouts")
	public ResponseEntity<List<WeeklyWorkouts>> getwork() {
		List<WeeklyWorkouts> workouts = weeklyservice.getAllWeekly();
		return new ResponseEntity<List<WeeklyWorkouts>>(workouts, HttpStatus.OK);
	}
	
	@PostMapping("/workouts/add")
	public ResponseEntity<WeeklyWorkouts> addnew(@RequestBody WeeklyWorkouts workout) { 
		WeeklyWorkouts newwork = weeklyservice.addNewWorkout(workout);
		return new ResponseEntity<WeeklyWorkouts>(newwork, HttpStatus.OK);
	}
	
	@PutMapping("/workouts/update")
	public ResponseEntity<WeeklyWorkouts> put(@RequestBody WeeklyWorkouts ww) {
		WeeklyWorkouts updated = weeklyservice.updateWW(ww);
		return new ResponseEntity<WeeklyWorkouts>(updated, HttpStatus.OK);
	}

	
	@GetMapping("/compworkouts")
	public ResponseEntity<List<CompletedWorkouts>> getcomp() { 
		List<CompletedWorkouts> completed = compservice.getAllCW(); 
		return new ResponseEntity<List<CompletedWorkouts>>(completed, HttpStatus.OK);
	}
	
	@GetMapping("/compworkouts/{email}")
	public ResponseEntity<List<CompletedWorkouts>> getcompbyemail(@PathVariable("email") String email) { 
		List<CompletedWorkouts> cws = compservice.getCWbyEmail(email);
		return new ResponseEntity<List<CompletedWorkouts>>(cws, HttpStatus.OK); 
	}
	
	@PostMapping("/users/submitcw")
	public ResponseEntity<CompletedWorkouts> save(@RequestBody CompletedWorkouts cw) {
		CompletedWorkouts completed = compservice.submitCW(cw);
		return new ResponseEntity<CompletedWorkouts>(completed, HttpStatus.OK);
	}
	

}
