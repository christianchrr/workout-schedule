package AppDAO;

import org.hibernate.Session;

public interface UserDAO {
	public void newUser();
	public void userLogin(String email, String pass); 
	public void updateInfo(); 
	public void getInfo(); 
}
