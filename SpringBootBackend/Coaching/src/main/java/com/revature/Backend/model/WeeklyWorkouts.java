package com.revature.Backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="WeeklyWorkouts")
public class WeeklyWorkouts {
	
	@Id
	@Column(name = "id") //make this serialized 
	private long id;
	
	@Column(name = "day")
	private String day;
	
	@Column(name = "workout")
	private String workout;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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
	
	
}
