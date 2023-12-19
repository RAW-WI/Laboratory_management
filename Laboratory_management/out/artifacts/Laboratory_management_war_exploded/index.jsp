<%--
  Created by IntelliJ IDEA.
  User: yingwi
  Date: 2023/11/21
  Time: 15:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="UTF-8"></script>
</head>
<body>
<form action="index.html" class="login-form">
    <h1>实验室管理系统</h1>

    <div class="txtb">
        <input type="text" name="Username" id="Username"/>
        <span data-placeholder="用户名"></span>
    </div>

    <div class="txtb">
        <input type="password" name="Password" id="Password"/>
        <span data-placeholder="密码"></span>
    </div>
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