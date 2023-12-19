<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%
    String username = (String) request.getAttribute("username");
    String password = (String) request.getAttribute("password");
    String permissions = (String) request.getAttribute("permissions");
%>
<input type="hidden" id="username" value="<%= username %>">
<input type="hidden" id="permissions" value="<%= permissions %>">
<input type="hidden" id="password" value="<%= password %>">

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="image/favicon.ico"> <!-- 设置网站图标 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/interfacestyle.css">
    <link href="css/interface_js_main.css" type="text/css" rel="stylesheet">
    <link href="css/stu_delete_css.css" type="text/css" rel="stylesheet">
    <link href="css/interface_js_main_l.css" type="text/css" rel="stylesheet">
    <script src="js/interface.js"></script>
    <script src="js/mian_interface.js"></script>
    <title>实验室管理</title>
</head>

<body>
<div class="div1">
    <div class="div3">
        <div class="in_button" onclick="j_add()">
            <img src="image/add.ico">
            <p class="out_p">添加</p>
            <p class="in_p">新同学<br>新实验室<br>.....</p>
        </div>
        <div class="in_button" onclick="j_modify()">
            <img src="image/modify.ico">
            <p class="out_p">修改</p>
            <p class="in_p">学生信息<br>实验室信息<br>.....</p>
        </div>
        <div class="in_button" onclick="j_delete()">
            <img src="image/delete.ico">
            <p class="out_p">删除</p>
            <p class="in_p">管理员<br>实验室信息<br>.....</p>
        </div>
        <div class="in_button" onclick="j_show()">
            <img src="image/search.ico">
            <p class="out_p">查看</p>
            <p class="in_p">学生 教师<br>实验室<br>.....</p>
        </div>
        <div class="in_button_dex">
        </div>
        <div class="in_button_dex" onclick="window.location.href='index.jsp'">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)" onclick=""><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5l-5 5Z"/></g></svg>
            <span class="d_svg">退出</span>
        </div>
    </div>
    <div class="div2 navbar">
        <img src="image/web_logo.ico" class="div2_ico1">
        <p class="div2_p1">实验室管理系统</p>
        <div class="div2_d1">
            <img src="image/uUser2.ico" class="div2_ico2">
            <p class="In_show_p1"></p>
            <p class="In_show_p2"></p>
            <p class="In_show_p3"></p>
        </div>

    </div>
    <div class="main_l">
        <div class="slid_box1"></div>
        <div class="slid_box2"></div>
        <div class="slid_box3"></div>
        <div class="slid_box4"></div>
        <div class="slid_box5"></div>
        <div class="slid_box6"></div>
    </div>
    <div class="main" id="main">

    </div>
    <div class="main_r" id="main_r">

    </div>

</div>
</body>

</html>

