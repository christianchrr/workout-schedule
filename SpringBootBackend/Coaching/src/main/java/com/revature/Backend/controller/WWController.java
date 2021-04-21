package com.revature.Backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

	//===============================================================================================
	
	@GetMapping("/compworkouts")
	public ResponseEntity<List<CompletedWorkouts>> getcomp() {
		List<CompletedWorkouts> completed = compservice.getAllCW(); 
		return new ResponseEntity<List<CompletedWorkouts>>(completed, HttpStatus.OK);
	}
	
	@GetMapping("/compworkouts/{email}")
	public ResponseEntity<List<CompletedWorkouts>> getcompbyemail(@PathVariable("email") String email) { 
		List<CompletedWorkouts> cws = compservice.getCWbyEmail(email);
		
		Inflater inflater = new Inflater(); 
		for (int i = 0; i < cws.size(); i++) {
			byte[] bytes = cws.get(i).getImg();
			inflater.setInput(bytes);
			ByteArrayOutputStream ostream = new ByteArrayOutputStream(bytes.length);
			byte[] buffer = new byte[1024];
			try { 
				while (!inflater.finished()) { 
					int count = inflater.inflate(buffer); 
					ostream.write(buffer,0,count); 
				}
			ostream.close(); 
			} catch (IOException e) {} catch (DataFormatException d) {}
			String template = "data:image/png;base64,"; 
			String fixing = ostream.toString(); 
			template.concat(fixing); 
			cws.get(i).setImg(fixing.getBytes()); 
			//cws.get(i).setImg(ostream.toByteArray());     
		}
		return new ResponseEntity<List<CompletedWorkouts>>(cws, HttpStatus.OK); 
	}
	
	@PostMapping("/users/submitcw")
	public ResponseEntity<CompletedWorkouts> save(
			@RequestParam ("email") String email, 
			@RequestParam("submission") MultipartFile file,
			@RequestParam("day") String day, 
			@RequestParam("comments") String comments,
			@RequestParam("workout") String workout) throws IOException {
		
		CompletedWorkouts cw = new CompletedWorkouts(); 
	
		Deflater def = new Deflater(); 
		def.setInput(file.getBytes()); 
		def.finish(); 
		
		ByteArrayOutputStream ostream = new ByteArrayOutputStream(file.getBytes().length); 
		byte[] buffer = new byte[1024]; 
		while (!def.finished()) { 
			int count = def.deflate(buffer); 
			ostream.write(buffer, 0, count); 
		}
		try { 
			ostream.close(); 
		} catch (IOException e) {} 
		
		byte[] compressed = ostream.toByteArray(); 
		
		cw.setComments(comments); 
		cw.setDay(day); 
		cw.setEmail(email); 
		cw.setWorkout(workout); 
		cw.setImg(compressed);
		CompletedWorkouts completed = compservice.submitCW(cw);
		return new ResponseEntity<CompletedWorkouts>(completed, HttpStatus.OK);
	}
	

}
