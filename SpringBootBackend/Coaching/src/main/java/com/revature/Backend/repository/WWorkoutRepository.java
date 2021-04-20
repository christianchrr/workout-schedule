package com.revature.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.Backend.model.CompletedWorkouts;
import com.revature.Backend.model.WeeklyWorkouts;

public interface WWorkoutRepository extends JpaRepository<WeeklyWorkouts, Long> {

	@Query(value = "SELECT * FROM Weekly_Workouts WHERE Weekly_Workouts.day = :day",
			nativeQuery = true)
	List<WeeklyWorkouts> getByDay(@Param("day") String day);
	
}
