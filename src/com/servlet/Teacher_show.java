package com.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fun.date_show;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/teacher_show")
public class Teacher_show extends HttpServlet {
    public Teacher_show() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at:").append(request.getContextPath());
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8"); // 设置响应内容类型为HTML

        String labora_delete_in_val = request.getParameter("address");
        String V_class = request.getParameter("class");
        date_show date_show = new date_show();
        System.out.println("获取数据：" + labora_delete_in_val);
        System.out.println("获取数据：" + V_class);
        List<String[]> resultArray;
        if (labora_delete_in_val.equals("all")) {
            try {
                resultArray = date_show.show_teacher_log();
                ObjectMapper objectMapper = new ObjectMapper();
                String jsonResult = objectMapper.writeValueAsString(resultArray);
//            Gson gson = new Gson();
//            String json = gson.toJson(resultArray);
//            response.setContentType("application/json");
//            // Send JSON response to the client
                response.getWriter().write(jsonResult);
                response.getWriter().close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        } else if (labora_delete_in_val.equals("t_title")) {
            try {
                resultArray = date_show.show_teacher_log(V_class);
                ObjectMapper objectMapper = new ObjectMapper();
                String jsonResult = objectMapper.writeValueAsString(resultArray);
//            Gson gson = new Gson();
//            String json = gson.toJson(resultArray);
//            response.setContentType("application/json");
//            // Send JSON response to the client
                response.getWriter().write(jsonResult);
                response.getWriter().close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
    }


}
