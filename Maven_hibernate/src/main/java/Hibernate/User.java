package Hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "Users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	@Column(name = "email") 
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "roll")
	private String roll;
	
	@Column(name = "firstname")
	private String fname; 
	
	@Column(name = "lastname")
	private String lname; 
	
	@Column(name = "phonenumber")
	private String phone; 
	
	@Column(name = "dateofbirth")
	private String dob; 
	
	public User(String email, String password, String roll) { 
		this.email = email; 
		this.password = password; 
		this.roll = roll; 
	}
	
	//GETTERS// 
	
	public String getEmail() { 
		return email; 
	}
	
	public String getPassword() { 
		return password;  
	}
	
	public String getRoll() { 
		return roll; 
	}
	
	public String getFname() { 
		return fname; 
	}
	
	public String getLname() { 
		return lname; 
	}
	
	public String getPhone() { 
		return phone; 
	}
	
	public String getDob() { 
		return dob; 
	}
	
	//SETTERS//
	
	public void setEmail(String email) { 
		this.email = email; 
	}
	
	public void setPassword(String newpass) { 
		this.password = newpass;
	}
	
	public void setRoll(String roll) { 
		this.roll = roll; 
	}

	public void setFname(String firstname) { 
		this.fname = firstname; 
	}
	
	public void setLname(String lastname) { 
		this.lname = lastname;
	}
	
	public void setPhone(String phonenum) { 
		this.phone = phonenum; 
	}
	
	public void setDob (String date) { 
		this.dob = date; 
	}
}

