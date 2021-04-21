package com.revature.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.Backend.model.User;

public interface CoachingRepository extends JpaRepository<User, String> {
	
	@Query(value = "SELECT pass FROM Users WHERE Users.email = :email", nativeQuery = true)
	String recoverPass(@Param ("email") String email);

}
