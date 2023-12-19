package com.servlet;
import com.fun.Sql_con;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/AddLadoratory")   //操作起反应要改成自己的类名
public class AddLadoratory extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
        String laboratoryName = String.valueOf(request.getParameter("laboratoryName"));
        String locations = String.valueOf(request.getParameter("locations"));
        String id = String.valueOf(request.getParameter("id"));
        System.out.println(locations);
        try {
            Sql_con sql_con = new Sql_con();
            Connection con= sql_con.GetCon();
            // 插入SQL语句
            String sql = "INSERT INTO laboratory(laboratoryName,locations,laboratoryID) VALUES (?,?,?)";
            System.out.println(locations);
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, laboratoryName);
            ps.setString(2, locations);
            ps.setString(3, id);
            ps.executeUpdate(); // 执行更新操作
            ps.close();// 关闭PreparedStatement
            con.close();// 关闭Connection
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}