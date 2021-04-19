package com.revature.Backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CompletedWorkouts")
public class CompletedWorkouts {
	
	@Id
	@Column(name = "id")  //make this serialized 
	private long id;

	@Column(name= "email")
	private String email;
	
	@Column(name = "day")
	private String day;
	
	@Column(name = "workout")
	private String workout;

	@Column(name = "comments")
	private String comments;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	
	
	
}
