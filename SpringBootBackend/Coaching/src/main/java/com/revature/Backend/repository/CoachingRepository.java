package com.revature.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Backend.model.User;

@Repository
public interface CoachingRepository extends JpaRepository<User, String> {
	
	

}
