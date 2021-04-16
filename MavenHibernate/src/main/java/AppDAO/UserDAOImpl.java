package AppDAO;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import Hibernate.HibernateUtil;
import Hibernate.User;

public class UserDAOImpl implements UserDAO {
	
	public void newUser() { 
		User test = new User("test@mail.com", "pass", "athlete"); 
		Session session = HibernateUtil.getSessionFactory().openSession();
		try { 
			
			session.beginTransaction();
			session.save(test); 
			session.getTransaction().commit();
		} catch (javax.persistence.PersistenceException e) { 
			System.out.println("Username already taken!");
		}
		session.close();
	}
	
	public void userLogin (String user, String pass) { 
		
		Session session = HibernateUtil.getSessionFactory().openSession();
		
		try { 
			session.beginTransaction(); 
			User requested = (User) session.get(User.class, user);
			if (requested.getPassword().equals(pass) ) { 
				System.out.println("Logged In!");
			} else { 
				System.out.println("Invalid Password!");
			}
		} catch (java.lang.NullPointerException e) {
			System.out.println("No account associated with this username was found!");
		}
		session.close(); 
	}
	
	public void getInfo() { 
		
	}

	public void updateInfo() {
		
	}
}
