package com.servlet;
import com.fun.LoginVerification;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/regist")   //用作被反应的名称regist
public class RegistServlet extends HttpServlet {
    public RegistServlet(){
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at:").append(request.getContextPath());
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        String username = request.getParameter("Username");
        String password = request.getParameter("Password");

        // 创建 LoginVerification 对象
        LoginVerification loginVerification = new LoginVerification();
        // 调用 loginVerification_s 方法
       String result = loginVerification.login_verification_s(username, password);
        System.out.println("返回结果："+result);
        // 根据返回值进行逻辑处理
        if (!result.equals("error")) {
            request.setAttribute("username",username);
            request.setAttribute("permissions",result);
            request.setAttribute("password",password);
            request.getRequestDispatcher("interfase.jsp").forward(request,response);
        } else {
            username="error";
            password="error";
            request.setAttribute("username",username);
            request.setAttribute("password",password);
            request.getRequestDispatcher("index.jsp").forward(request,response);

        }

    }

}
