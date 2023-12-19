package com.servlet;
import com.fun.Sql_con;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
@WebServlet("/ModifyLabor")   //操作起反应要改成自己的类名
public class ModifyLabor extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String laboratoryName = String.valueOf(request.getParameter("laboratoryName"));
        String locations = String.valueOf(request.getParameter("locations"));
        String id = String.valueOf(request.getParameter("id"));

        try {
            Sql_con sql_con = new Sql_con();
            Connection con= sql_con.GetCon();

            // 插入SQL语句
            String sql = "INSERT INTO laboratory (laboratoryName, locations, laboratoryID)" +
                    "VALUES (?, ?, ?)" +
                    "ON DUPLICATE KEY UPDATE laboratoryName = VALUES(laboratoryName), locations = VALUES(locations);";

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, laboratoryName);
            ps.setString(2, locations);
            ps.setString(3, id);
            ps.executeUpdate(); // 执行操作
            ps.close();// 关闭PreparedStatement
            con.close();// 关闭Connection
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
