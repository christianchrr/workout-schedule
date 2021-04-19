package com.revature.Backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="WeeklyWorkouts")
public class WeeklyWorkouts {
	
	@Id
	@Column(name = "wid") 
	@GeneratedValue(
			strategy=GenerationType.AUTO,
			generator="native")
	@GenericGenerator(
			name = "native",
			strategy = "native")
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
