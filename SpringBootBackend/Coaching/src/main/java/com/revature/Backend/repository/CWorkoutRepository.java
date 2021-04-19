package com.revature.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.Backend.model.CompletedWorkouts;
import com.revature.Backend.model.WeeklyWorkouts;

public interface CWorkoutRepository extends JpaRepository<CompletedWorkouts, Long> {
	
	@Query(value = "SELECT * FROM Completed_Workouts WHERE Completed_Workouts.email = :email",
			nativeQuery = true)
	List<CompletedWorkouts> getCWbyEmail(@Param("email") String email); 
	
}

