package com.revature.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.Backend.model.WeeklyWorkouts;

public interface WWorkoutRepository extends JpaRepository<WeeklyWorkouts, Long> {
// please check this ^^^^^^^^^
}
