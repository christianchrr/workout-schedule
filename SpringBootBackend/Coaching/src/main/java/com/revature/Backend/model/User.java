package com.revature.Backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="Users")
public class User {
	
	@Id
	@Column(name = "email")
	private String email;
	
	@Column(name = "pass")
	private String password;
	
	@Column(name = "role")
	private String role;
	
	@Column(name = "firstname")
	private String fname; 
	
	@Column(name = "lastname")
	private String lname; 
	
	@Column(name = "dateofbirth")
	private String dob;

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public String getRole() {
		return role;
	}

	public String getFname() {
		return fname;
	}

	public String getLname() {
		return lname;
	}


	public String getDob() {
		return dob;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}


	
	

}
