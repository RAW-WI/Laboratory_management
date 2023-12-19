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
@WebServlet("/AddStu")   //操作起反应要改成自己的类名
public class AddStu extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
        String numID = String.valueOf(request.getParameter("numID"));
        String stuname = String.valueOf(request.getParameter("stuname"));
        String ssex = String.valueOf(request.getParameter("ssex"));
        String sage = String.valueOf(request.getParameter("sage"));
        String classs = String.valueOf(request.getParameter("classs"));
        String smajor = String.valueOf(request.getParameter("smajor"));
        String scollege = String.valueOf(request.getParameter("scollege"));
        String sentrance = String.valueOf(request.getParameter("sentrance"));
        String tellphone = String.valueOf(request.getParameter("tellphone"));
        System.out.println(stuname);
        try {
            Sql_con sql_con = new Sql_con();
            Connection con= sql_con.GetCon();

            // 插入SQL语句
            String sql = "INSERT INTO stu(sid,sname,ssex,sage,classs,smajor,scollege,sentrance,tellphone) VALUES (?,?,?,?,?,?,?,?,?)";

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, numID);
            ps.setString(2, stuname);
            ps.setString(3, ssex);
            ps.setString(4, sage);
            ps.setString(5, classs);
            ps.setString(6, smajor);
            ps.setString(7, scollege);
            ps.setString(8, sentrance);
            ps.setString(9, tellphone);
            ps.executeUpdate(); // 执行更新操作
            ps.close();// 关闭PreparedStatement
            con.close();// 关闭Connection
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}