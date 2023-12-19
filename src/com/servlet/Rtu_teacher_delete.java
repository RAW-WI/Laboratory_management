package com.servlet;
import com.fun.delete_fun;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/Rtu_teacher_delete")   //用作被反应的名称regist
public class Rtu_teacher_delete extends HttpServlet {
    public Rtu_teacher_delete(){
        super();
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        String[] dataToProcess = request.getParameterValues("dataToProcess[]");
        if (dataToProcess != null) {
            for (String dataId : dataToProcess) {
                System.out.println("Received dataId: " + dataId);
            }
            delete_fun _delete_fun = new delete_fun();
            try {
                _delete_fun.fun_teacher_delete(dataToProcess);
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }

    }


}
