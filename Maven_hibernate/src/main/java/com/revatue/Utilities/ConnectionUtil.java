package com.revatue.Utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.postgresql.Driver;


public class ConnectionUtil {
	private ConnectionUtil() {
		super();
	}

	public static Connection getConnection() throws SQLException {
		
		Driver postgresDriver= new Driver();
		
		DriverManager.registerDriver(postgresDriver);

		String url = System.getenv("db_url");
		String username = System.getenv("db_username");
		String password = System.getenv("db_password");

		Connection con = DriverManager.getConnection(url, username, password);

		return con;
	}
}
