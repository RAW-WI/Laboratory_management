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
@WebServlet("/ModifyTeach")   //操作起反应要改成自己的类名
public class ModifyTeach extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = String.valueOf(request.getParameter("id"));
        String teachname = String.valueOf(request.getParameter("teachname"));
        String sex = String.valueOf(request.getParameter("sex"));  //前端获取不到数据
        String age = String.valueOf(request.getParameter("age"));  //前端获取不到数据
        String room = String.valueOf(request.getParameter("room"));
        try {
            Sql_con sql_con = new Sql_con();
            Connection con= sql_con.GetCon();

            // 插入SQL语句
            String sql = "INSERT INTO teachers (t_ID, t_name, t_sex, t_age,t_title)" +
                    "VALUES (?, ?, ?, ?,?)" +
                    "ON DUPLICATE KEY UPDATE t_name = VALUES(t_name), t_sex = VALUES(t_sex)" +
                    ", t_age = VALUES(t_age),t_title = VALUES(t_title);";

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, id);
            ps.setString(2, teachname);
            ps.setString(3, sex);
            ps.setString(4, age);
            ps.setString(5, room);
            ps.executeUpdate(); // 执行操作
            ps.close();// 关闭PreparedStatement
            con.close();// 关闭Connection
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
