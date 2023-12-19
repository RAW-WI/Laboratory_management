package com.fun;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Sql_con {
    public Connection GetCon() throws ClassNotFoundException, SQLException {
        String url = "jdbc:mysql://localhost:3306/laboratory?serverTimezone=GMT%2B8";
        String username = "root";
        String password = "123456";
        String str = "NYC";
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection(url, username, password);
        return con;
    }
}
