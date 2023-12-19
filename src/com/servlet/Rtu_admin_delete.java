package com.servlet;

import com.fun.delete_fun;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/Rtu_admin_delete")
public class Rtu_admin_delete extends HttpServlet {
    public Rtu_admin_delete(){
        super();
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at:").append(request.getContextPath());
        doPost(request,response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8"); // 设置响应内容类型为HTML
        String[] Rtu_admin_delete_in_val = request.getParameterValues("dataToProcess[]");
        delete_fun _delete_fun = new delete_fun();
        try {
            _delete_fun.fun_admin_delete(Rtu_admin_delete_in_val);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
