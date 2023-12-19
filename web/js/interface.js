
document.addEventListener('DOMContentLoaded', function() {
    let username = document.getElementById("username").value;
    var permissions = document.getElementById("permissions").value;
    let password = document.getElementById("password").value;

    const In_show_p1 = document.querySelector('.In_show_p1');
    In_show_p1.innerHTML = username.toString();

    const In_show_p2 = document.querySelector('.In_show_p2');
    if (permissions >= 1) {
        In_show_p2.innerHTML = "超级管理员";
    } else {
        In_show_p2.innerHTML = "管理员";
    }
});

function j_add() {
    var mainDiv1 = document.querySelector('.slid_box1');
    mainDiv1.innerHTML = '';
    var mainDiv2 = document.querySelector('.slid_box2');
    mainDiv2.innerHTML = '';
    var mainDiv3 = document.querySelector('.slid_box3');
    mainDiv3.innerHTML = '';
    var mainDiv4 = document.querySelector('.slid_box4');
    mainDiv4.innerHTML = '';
    var mainDiv5 = document.querySelector('.slid_box5');
    mainDiv5.innerHTML = '';
    var mainDiv6 = document.querySelector('.slid_box6');
    mainDiv6.innerHTML = '';
    var mainDiv = document.querySelector('.slid_box1');
    var content = '<button id="addLabButton" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">添加实验室</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var addLabButton = document.getElementById('addLabButton');
    addLabButton.addEventListener('click', AddLaboratory);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 0); // 等待100毫秒后触发过渡效果
    j_add_s_button2();
}
function j_add_s_button2() {
    var mainDiv = document.querySelector('.slid_box2');
    var content = '<button id="addLabButton1" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">添加老师</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var addLabButton = document.getElementById('addLabButton1');
    addLabButton.addEventListener('click', AddTeacher);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 100); // 等待100毫秒后触发过渡效果
    j_add_s_button3()
}
function j_add_s_button3() {
    var mainDiv = document.querySelector('.slid_box3');
    var content = '<button id="addLabButton2" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">添加学生</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var addLabButton = document.getElementById('addLabButton2');
    addLabButton.addEventListener('click', AddStu);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 200); // 等待100毫秒后触发过渡效果
}
//----------------------------------------------------------------------
function j_modify() {
    var mainDiv1 = document.querySelector('.slid_box1');
    mainDiv1.innerHTML = '';
    var mainDiv2 = document.querySelector('.slid_box2');
    mainDiv2.innerHTML = '';
    var mainDiv3 = document.querySelector('.slid_box3');
    mainDiv3.innerHTML = '';
    var mainDiv4 = document.querySelector('.slid_box4');
    mainDiv4.innerHTML = '';
    var mainDiv5 = document.querySelector('.slid_box5');
    mainDiv5.innerHTML = '';
    var mainDiv6 = document.querySelector('.slid_box6');
    mainDiv6.innerHTML = '';

    var mainDiv = document.querySelector('.slid_box1');
    var content = '<button id="modifyLabButton" class="s_button"> <img src="image/rightarrowcircularbutton.ico">' +
        '<span class="slid_span1"><p class="slid_p1">修改学生</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var modifyLabButton = document.getElementById('modifyLabButton');
    modifyLabButton.addEventListener('click', ModifyStu);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 0); // 等待100毫秒后触发过渡效果
    j_modify_s_button2()
}
function j_modify_s_button2() {
    var mainDiv = document.querySelector('.slid_box2');
    var content = '<button id="modifyLabButton1" class="s_button"> <img src="image/rightarrowcircularbutton.ico">' +
        '<span class="slid_span1"><p class="slid_p1">修改实验室信息</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var modifyLabButton1 = document.getElementById('modifyLabButton1');
    modifyLabButton1.addEventListener('click', ModifyLabor);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 150); // 等待100毫秒后触发过渡效果
    j_modify_s_button3()
}
function j_modify_s_button3() {
    var mainDiv = document.querySelector('.slid_box3');
    var content = '<button id="modifyLabButton2" class="s_button"> <img src="image/rightarrowcircularbutton.ico">' +
        '<span class="slid_span1"><p class="slid_p1">修改教师</p></span></button>';
    mainDiv.innerHTML = content;

    // 重新绑定事件
    var modifyLabButton2 = document.getElementById('modifyLabButton2');
    modifyLabButton2.addEventListener('click', ModifyTeach);

    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 200); // 等待100毫秒后触发过渡效果

}

function j_delete() {
    var mainDiv1 = document.querySelector('.slid_box1');
    mainDiv1.innerHTML = '';
    var mainDiv2 = document.querySelector('.slid_box2');
    mainDiv2.innerHTML = '';
    var mainDiv3 = document.querySelector('.slid_box3');
    mainDiv3.innerHTML = '';
    var mainDiv4 = document.querySelector('.slid_box4');
    mainDiv4.innerHTML = '';
    var mainDiv5 = document.querySelector('.slid_box5');
    mainDiv5.innerHTML = '';
    var mainDiv6 = document.querySelector('.slid_box6');
    mainDiv6.innerHTML = '';
    var mainDiv = document.querySelector('.slid_box1');
    var content = '<button onclick="stu_delete()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">删除学生</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 0); // 等待100毫秒后触发过渡效果
    j_delete_s_button2()
}
function j_delete_s_button2() {
    var mainDiv = document.querySelector('.slid_box2');
    var content = '<button onclick="Labora_delete()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">删除实验室</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 150); // 等待100毫秒后触发过渡效果
    j_delete_s_button3()
}
function j_delete_s_button3() {
    var mainDiv = document.querySelector('.slid_box3');
    var content = '<button onclick="Teacher_delete()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">删除老师</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 270); // 等待100毫秒后触发过渡效果
    j_delete_s_button4()
}
function j_delete_s_button4() {
    var mainDiv = document.querySelector('.slid_box4');
    var content = '<button onclick="Admin_delete()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">删除管理员</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 370); // 等待100毫秒后触发过渡效果
}



function j_show() {
    var mainDiv1 = document.querySelector('.slid_box1');
    mainDiv1.innerHTML = '';
    var mainDiv2 = document.querySelector('.slid_box2');
    mainDiv2.innerHTML = '';
    var mainDiv3 = document.querySelector('.slid_box3');
    mainDiv3.innerHTML = '';
    var mainDiv4 = document.querySelector('.slid_box4');
    mainDiv4.innerHTML = '';
    var mainDiv5 = document.querySelector('.slid_box5');
    mainDiv5.innerHTML = '';
    var mainDiv6 = document.querySelector('.slid_box6');
    mainDiv6.innerHTML = '';
    var mainDiv = document.querySelector('.slid_box1');
    var content = '<button onclick="up_class_show() " class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">上课日志</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 0); // 等待100毫秒后触发过渡效果
    j_show_s_button2()
}
function j_show_s_button2() {
    var mainDiv = document.querySelector('.slid_box2');
    var content = '<button onclick="up_stu_show()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">学生查看</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 150); // 等待100毫秒后触发过渡效果
    j_show_s_button3()
}
function j_show_s_button3() {
    var mainDiv = document.querySelector('.slid_box3');
    var content = '<button onclick="up_teacher_show()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">老师查看</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 270); // 等待100毫秒后触发过渡效果
    j_show_s_button4()
}
function j_show_s_button4() {
    var mainDiv = document.querySelector('.slid_box4');
    var content = '<button onclick="laboratory_show()" class="s_button"> <img src="image/rightarrowcircularbutton.ico"><span class="slid_span1"><p class="slid_p1">实验室查看</p></span></button>';
    mainDiv.innerHTML = content;
    // 触发过渡效果
    setTimeout(function () {
        var buttons = mainDiv.querySelectorAll('.s_button');
        buttons.forEach(button => {
            button.style.left = '0'; // 将按钮从左侧移动到初始位置
        });
    }, 370); // 等待100毫秒后触发过渡效果
}

//全部右边解释的东西
function stu_delete_main_r() {
    const main_r = document.querySelector('.main_r');
    main_r.innerHTML = "<p class=\"main_r_p1\">学生规则检索删除</p>\n" +
        "            <p class=\"main_r_p2\">检索规则</p>\n" +
        "            <span class=\"main_r_p3\">可以根据学生的学号、姓名、年龄、学院、专业、性别等信息进行检索，点击检索则会在下方直接显示。</span>\n" +
        "            <p class=\"main_r_p2\">删除操作规则</p>\n" +
        "            <span class=\"main_r_p3\">当用户点击对应的贴纸按钮左上角编号变红时则表示选中，可以再次点击取消选中，选中的信息贴纸可直接点击 “选中删除” 则可直接删除对应的信息贴纸，删除成功后会直接在下方刷新显示。</span>";
}
function labora_delete_main_r() {
    const main_r = document.querySelector('.main_r');
    main_r.innerHTML = "<p class=\"main_r_p1\">实验室规则检索删除</p>\n" +
        "            <p class=\"main_r_p2\">检索规则</p>\n" +
        "            <span class=\"main_r_p3\">可以根据实验室的名字、地点、楼层等信息进行检索，点击检索则会在下方直接显示。</span>\n" +
        "            <p class=\"main_r_p2\">删除操作规则</p>\n" +
        "            <span class=\"main_r_p3\">当用户点击对应的贴纸按钮左上角编号变红时则表示选中，可以再次点击取消选中，选中的信息贴纸可直接点击 “选中删除” 则可直接删除对应的信息贴纸，删除成功后会直接在下方刷新显示。</span>";
}
function teacher_delete_main_r() {
    const main_r = document.querySelector('.main_r');
    main_r.innerHTML = "<p class=\"main_r_p1\">教师规则检索删除</p>\n" +
        "            <p class=\"main_r_p2\">检索规则</p>\n" +
        "            <span class=\"main_r_p3\">可以根据教师的姓名、年龄、性别、职称等信息进行检索，点击检索则会在下方直接显示。</span>\n" +
        "            <p class=\"main_r_p2\">删除操作规则</p>\n" +
        "            <span class=\"main_r_p3\">当用户点击对应的贴纸按钮左上角编号变红时则表示选中，可以再次点击取消选中，选中的信息贴纸可直接点击 “选中删除” 则可直接删除对应的信息贴纸，删除成功后会直接在下方刷新显示。</span>";
}
function admin_delete_main_r() {
    const main_r = document.querySelector('.main_r');
    main_r.innerHTML = "<p class=\"main_r_p1\">管理员规则检索删除</p>\n" +
        "            <p class=\"main_r_p2\">检索规则</p>\n" +
        "            <span class=\"main_r_p3\">可以根据学生的用户名、是否是“超级管理员”或者“管理员”进行检索，点击检索则会在下方直接显示。</span>\n" +
        "            <p class=\"main_r_p2\">删除操作规则</p>\n" +
        "            <span class=\"main_r_p3\">当用户点击对应的贴纸按钮左上角编号变红时则表示选中，可以再次点击取消选中，选中的信息贴纸可直接点击 “选中删除” 则可直接删除对应的信息贴纸，删除成功后会直接在下方刷新显示。</span>";
}