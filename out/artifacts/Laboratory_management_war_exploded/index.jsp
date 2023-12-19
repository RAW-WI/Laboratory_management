<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>实验室管理</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/x-icon" href="image/favicon.ico"> <!-- 设置网站图标 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="UTF-8"></script>
</head>
<body>
<div class="login-left element2">
    <div class="login-left_in"><img src="image/p1.jpg"/></div>
    <span class="Tspan">
        课程设计名：实验室管理系统
        <br><br>
        小组成员：刘勇、谭天、姚海冰
    </span>
</div>
<form method="post" action="regist" class="login-form element">
    <h1>实验室管理系统</h1>

    <div class="txtb">
        <input type="text" name="Username" id="Username"/>
        <span data-placeholder="用户名"></span>
    </div>

    <div class="txtb">
        <input type="password" name="Password" id="Password"/>
        <span data-placeholder="密码"></span>
    </div>
    <%
        String name = (String) request.getAttribute("username");
        String password = (String) request.getAttribute("password");
        if ("error".equals(name) && "error".equals(password)){
    %>
    <script>
        document.write("   <div class=\"error-message\">\n" +
            "            <span class=\"Tspan4\">账号或者密码错误，请再次输入 ！</span>\n" +
            "            <br>\n" +
            "            <span class=\"Tspan3\"><a href=''>点击此处找回密码</a></span>\n" +
            "        </div>");
    </script>
    <%
        }
    %>
    <div class="b_submit">
        <input type="submit" class="logbtn" value="登录">
    </div>
</form>
<!-- 监听器 -->
<script type="text/javascript">
    var $txtb = $('.txtb input');
    $txtb.on("focus", function () {
        $(this).addClass("focus");
    });

    $txtb.on("blur", function () {
        if ($(this).val() === "") {
            $(this).removeClass("focus");
        }
    });

</script>
</body>
</html>
