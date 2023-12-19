package com.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fun.delete_fun;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
@WebServlet("/stu_delete")
public class Stu_delete extends HttpServlet {
    public Stu_delete(){
        super();
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at:").append(request.getContextPath());
        doPost(request,response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8"); // 设置响应内容类型为HTML

        String Stu_delete_in_val = request.getParameter("address");
        if(Stu_delete_in_val == null || Stu_delete_in_val.isEmpty()){
            Stu_delete_in_val = "all";
        }
        delete_fun _delete_fun = new delete_fun();
        System.out.println("获取数据：" + Stu_delete_in_val);
        List<String[]> resultArray;

        try {
            resultArray = _delete_fun.GetStuArr(Stu_delete_in_val);
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
