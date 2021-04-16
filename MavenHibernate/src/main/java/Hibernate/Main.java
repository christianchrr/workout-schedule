package Hibernate;

import org.hibernate.Session;

import AppDAO.UserDAOImpl;

public class Main {
	public static void main(String[] args) { 
		
		UserDAOImpl userdao = new UserDAOImpl(); 
		Session session = HibernateUtil.getSessionFactory().openSession(); 
		
		userdao.newUser();
		userdao.userLogin("test@mail.com", "pass");
		userdao.userLogin("test@mail.com", "banana");
		userdao.userLogin("banana", "test");
		
		//userdao.getInfo();
	}
	
}
