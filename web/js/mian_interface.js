//需要回传删除的数组元素值
var dataToProcess = [];
var dataToProcess2 = [];
var dataToProcess3 = [];
var dataToProcess4 = [];
function AddLaboratory() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <h1>添加</h1>\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入实验室名</label>\n' +
        '      <input type="text" name="laboratoryName" id="laboratoryName"><br>\n' +
        '      <label class="label_1">输入实验室地点</label>\n' +
        '      <input type="text" name="locations" id="locations"><br>\n' +
        '      <label class="label_1">输入实验室ID</label>\n' +
        '      <input type="text" name="id" id="id"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt()">添加</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
function AddTeacher() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <h1>添加</h1>\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入id</label>\n' +
        '      <input type="text" name="id" id="id"><br>\n' +
        '      <label class="label_1">输入教师名称</label>\n' +
        '      <input type="text" name="teachname" id="teachname"><br>\n' +
        '  <label class="label_1">输入性别</label>\n' +
        '      <input type="text" name="sex" id="sex"><br>\n' +
        '  <label class="label_1">输入教师年龄</label>\n' +
        '      <input type="text" name="age" id="age"><br>\n' +
        '      <label class="label_1">输入职位</label>\n' +
        '      <input type="text" name="room" id="room"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt_1()">添加此教师</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
function AddStu() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入学号</label>\n' +
        '      <input type="text" name="numID" id="numID"><br>\n' +
        '      <label class="label_1">输入学生名</label>\n' +
        '      <input type="text" name="stuname" id="stuname"><br>\n' +
        '      <label class="label_1">输入学生性别</label>\n' +
        '      <input type="text" name="ssex" id="ssex"><br>\n' +
        '      <label class="label_1">输入学生年龄</label>\n' +
        '      <input type="text" name="sage" id="sage"><br>\n' +
        '      <label class="label_1">输入学生班级</label>\n' +
        '      <input type="text" name="classs" id="classs"><br>\n' +
        '      <label class="label_1">输入学生专业</label>\n' +
        '      <input type="text" name="smajor" id="smajor"><br>\n' +
        '      <label class="label_1">输入学生学院</label>\n' +
        '      <input type="text" name="scollege" id="scollege"><br>\n' +
        '      <label class="label_1">输入学生入学年份</label>\n' +
        '      <input type="text" name="sentrance" id="sentrance"><br>\n' +
        '      <label class="label_1">输入学生手机号</label>\n' +
        '      <input type="text" name="tellphone" id="tellphone"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt_2()">添加学生</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
//-----------------------------------------------------------------------
function ModifyStu() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入学号</label>\n' +
        '      <input type="text" name="numID" id="numID"><br>\n' +
        '      <label class="label_1">输入学生名</label>\n' +
        '      <input type="text" name="stuname" id="stuname"><br>\n' +
        '      <label class="label_1">输入学生性别</label>\n' +
        '      <input type="text" name="ssex" id="ssex"><br>\n' +
        '      <label class="label_1">输入学生年龄</label>\n' +
        '      <input type="text" name="sage" id="sage"><br>\n' +
        '      <label class="label_1">输入学生班级</label>\n' +
        '      <input type="text" name="classs" id="classs"><br>\n' +
        '      <label class="label_1">输入学生专业</label>\n' +
        '      <input type="text" name="smajor" id="smajor"><br>\n' +
        '      <label class="label_1">输入学生学院</label>\n' +
        '      <input type="text" name="scollege" id="scollege"><br>\n' +
        '      <label class="label_1">输入学生入学年份</label>\n' +
        '      <input type="text" name="sentrance" id="sentrance"><br>\n' +
        '      <label class="label_1">输入学生手机号</label>\n' +
        '      <input type="text" name="tellphone" id="tellphone"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt_3()">点击修改</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
function ModifyLabor() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入实验室名</label>\n' +
        '      <input type="text" name="laboratoryName" id="laboratoryName"><br>\n' +
        '      <label class="label_1">输入实验室地点</label>\n' +
        '      <input type="text" name="locations" id="locations"><br>\n' +
        '      <label class="label_1">输入实验室ID</label>\n' +
        '      <input type="text" name="id" id="id"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt_4()">点击修改</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
function ModifyTeach() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form method="post">\n' +
        '  <div>\n' +
        '    <div>\n' +
        '      <label class="label_1">输入id</label>\n' +
        '      <input type="text" name="id" id="id"><br>\n' +
        '      <label class="label_1">输入教师名称</label>\n' +
        '      <input type="text" name="teachname" id="teachname"><br>\n' +
        '  <label class="label_1">输入性别</label>\n' +
        '      <input type="text" name="sex" id="sex"><br>\n' +
        '  <label class="label_1">输入教师年龄</label>\n' +
        '      <input type="text" name="age" id="age"><br>\n' +
        '      <label class="label_1">输入职位</label>\n' +
        '      <input type="text" name="room" id="room"><br>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '      <button type="button" onclick="printtable_tt_5()">点击修改教师信息</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
//-----------------------------------------------------------------------
function searchData(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    var name = document.getElementById('Stu_delete_in').value; // 获取输入的姓名
    fetch('stu_delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Stu_delete_in: name })
    })
        .then(response => response.text()) // 接受XML文件的内容
        .then(data => {
            // 解析XML字符串为XML文档
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/xml");
            // 在这里可以从XML文档中提取数据并显示在页面上或进行其他操作
            var rows = xmlDoc.getElementsByTagName("row");
            var dataArray = [];
            for (var i = 0; i < rows.length; i++) {
                var name = rows[i].getElementsByTagName("name")[0].textContent;
                var age = rows[i].getElementsByTagName("age")[0].textContent;
                dataArray.push({ name: name, age: age });
            }
            // 示例：将数据显示在页面上
            var resultDiv = document.getElementById('searchResult');
            resultDiv.innerHTML = ''; // 清空内容
            for (var i = 0; i < dataArray.length; i++) {
                resultDiv.innerHTML += 'Name: ' + dataArray[i].name + ', Age: ' + dataArray[i].age + '<br>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
//-----------------------------------------------------------------------
function stu_delete() {
    var mainDiv;
    mainDiv = document.querySelector('.main');
    var content =
        '<form action="" class="form_stu_delete" id="stuDeleteForm" method="post">\n' +
        '  <h1 class="title_stu_delete">规则删除</h1>\n' +
        '  <div class="inputContainer_stu_delete">\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <input type="text" class="input_stu_delete" placeholder="a" id="Stu_delete_in" name="Stu_delete_in">\n' +
        '      <label for="" class="label_stu_delete">输入姓名</label>\n' +
        '    </div>\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <button class="submitBtn_stu_delete" onclick="searchData()">开始检索</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</form>\n';
    mainDiv.innerHTML = content;
}
//-----------------------------------------------------------------------
function printtable_tt() {
    var laboratoryName = document.getElementById("laboratoryName").value;
    var locations = document.getElementById("locations").value;
    var id = document.getElementById("id").value;

    $.ajax({
        url: 'AddLadoratory',
        type: 'post',
        datatype: 'json',
        data: {
            locations: locations,
            laboratoryName: laboratoryName,
            id: id,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("实验室添加成功！");
        },
    });
}
function printtable_tt_1() {
    var id = document.getElementById("id").value;
    var teachname = document.getElementById("teachname").value;
    var sex = document.getElementById("sex").value;
    var age = document.getElementById("age").value;
    var room = document.getElementById("room").value;

    $.ajax({
        url: 'AddTeaher',
        type: 'post',
        datatype: 'json',
        data: {
            teachname: teachname,
            id: id,
            room: room,
            age:age,
            sex: sex,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("教师添加成功！");
        },
        error:function (){
            alert("教师添加失败！");

        }
    });
}
function printtable_tt_2() {
    var numID = document.getElementById("numID").value;
    var stuname = document.getElementById("stuname").value;
    var ssex = document.getElementById("ssex").value;
    var sage = document.getElementById("sage").value;
    var classs = document.getElementById("classs").value;
    var smajor = document.getElementById("smajor").value;
    var scollege = document.getElementById("scollege").value;
    var sentrance = document.getElementById("sentrance").value;
    var tellphone = document.getElementById("tellphone").value;
    $.ajax({
        url: 'AddStu',
        type: 'post',
        datatype: 'json',
        data: {
            numID: numID,
            stuname: stuname,
            ssex: ssex,
            sage:sage,
            classs:classs,
            smajor:smajor,
            scollege:scollege,
            sentrance:sentrance,
            tellphone:tellphone,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("学生添加成功！");
        },
        error:function (){
            alert("学生添加失败！");
        }
    });
}
function printtable_tt_3() {
    var numID = document.getElementById("numID").value;
    var stuname = document.getElementById("stuname").value;
    var ssex = document.getElementById("ssex").value;
    var sage = document.getElementById("sage").value;
    var classs = document.getElementById("classs").value;
    var smajor = document.getElementById("smajor").value;
    var scollege = document.getElementById("scollege").value;
    var sentrance = document.getElementById("sentrance").value;
    var tellphone = document.getElementById("tellphone").value;
    $.ajax({
        url: 'ModifyStu',
        type: 'post',
        datatype: 'json',
        data: {
            numID: numID,
            stuname: stuname,
            ssex: ssex,
            sage: sage,
            classs: classs,
            smajor: smajor,
            scollege: scollege,
            sentrance: sentrance,
            tellphone: tellphone,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("学生修改成功！");
        },
        error:function (){
            alert("学生修改失败！");
        }
    });
}
function printtable_tt_4() {
    var laboratoryName = document.getElementById("laboratoryName").value;
    var locations = document.getElementById("locations").value;
    var id = document.getElementById("id").value;
    console.log(laboratoryName);
    console.log(locations);
    console.log(id);
    $.ajax({
        url: 'ModifyLabor',
        type: 'post',
        datatype: 'json',
        data: {
            laboratoryName: laboratoryName,
            locations: locations,
            id:id,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("实验室修改成功！");
        },
        error:function (){
            alert("实验室修改失败！");
        }
    });
}
function printtable_tt_5() {
    var id = document.getElementById("id").value;
    var teachname = document.getElementById("teachname").value;
    var sex = document.getElementById("sex").value;
    var age = document.getElementById("age").value;
    var room = document.getElementById("room").value;
    console.log(teachname);

    $.ajax({
        url: 'ModifyTeach',
        type: 'post',
        datatype: 'json',
        data: {
            id: id,
            teachname: teachname,
            sex:sex,
            age:age,
            room:room,
        },
        success: function(res) {
            // 将从后端接收到的JSON数据打印到控制台\
            alert("教师修改成功！");
        },
        error:function (){
            alert("教师修改失败！");
        }
    });
}


//~~~~~~~~~~~~~~学生删除~~~~~~~~~~~~~~~~~~~~
function stu_delete() {
    let mainDiv;
    mainDiv = document.querySelector('.main');
    let content =
        '<div class="form_stu_delete" id="stuDeleteForm">\n' +
        '  <h1 class="title_stu_delete">规则删除学生</h1>\n' +
        '  <div class="inputContainer_stu_delete">\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <input type="text" class="input_stu_delete" placeholder="a" id="Stu_delete_in" name="Stu_delete_in">\n' +
        '      <label for="" class="label_stu_delete">输入姓名</label>\n' +
        '    </div>\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="printtable()">开始检索</button>' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="Re_Del_Stu()">删除选中</button>\n' +
        '    </div>\n' +
        '  </div>' +
        '</div>' +
        '<div class="display_data_css" id="output"></div>\n';
    mainDiv.innerHTML = content;
    stu_delete_main_r();
}

function printtable() {
    let str = document.getElementById("Stu_delete_in").value;
    dataToProcess.splice(0, dataToProcess.length);

    // 移除之前绑定的事件处理函数
    // let outputDiv = document.getElementById('output');
    // outputDiv.removeEventListener('click', handleDisplayDataClick);

    $.ajax({
        url: 'stu_delete',
        type: 'post',
        datatype: 'json',
        data: {
            address: str,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            let printarr = [
                ['<span class="display_data_in_css_sp1" id="display_data_in_css_sp1_id">', '</span>'],
                ['<span class="display_data_in_css_sp2">姓名：', '</span><br>'],
                ['<span>性别：', '</span><br>'],
                ['<span>年龄：', '</span><br>'],
                ['<span>班级：', '</span><br>'],
                ['<span>专业：', '</span><br>'],
                ['<span>学院：', '</span><br>'],
                ['<span>入学时间：', '</span><br>'],
                ['<span>TELL:', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('display_data_in_css');

                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];

                    let spanElement = document.createElement('span');
                    spanElement.innerHTML = spanStart + data[i][j] + spanEnd;
                    spanElement.addEventListener('click', handleDisplayDataClick);
                    containerDiv.appendChild(spanElement);
                }
                outputDiv.appendChild(containerDiv);
            }

            // 绑定新的事件处理函数
            outputDiv.addEventListener('click', handleDisplayDataClick);
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

// 新的事件处理函数
function handleDisplayDataClick(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('display_data_in_css')) {
        let sp1Element = targetElement.querySelector('.display_data_in_css_sp1');
        let dataId = sp1Element.textContent;

        // 检查该数据是否需要再次处理
        let index = dataToProcess.indexOf(dataId);
        if (index !== -1) {
            dataToProcess.splice(index, 1);
            sp1Element.style.backgroundColor = '';
        } else {
            dataToProcess.push(dataId);
            sp1Element.style.backgroundColor = '#ff0000';
        }
        console.log(dataToProcess);
    }
}

function Re_Del_Stu() {
    if (dataToProcess.length === 0) {
        alert("请输入名字检索！")
        return;
    }

    $.ajax({
        url: 'Rtu_stu_delete',
        type: 'post',
        datatype: 'json',
        data: {
            dataToProcess: dataToProcess,
        },
        success: function (res) {
            printtable()
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~~学生删除~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~实验室删除~~~~~~~~~~~~~~~~~~~~
function Labora_delete() {
    let mainDiv;
    mainDiv = document.querySelector('.main');
    let content =
        '<div class="form_stu_delete" id="stuDeleteForm">\n' +
        '  <h1 class="title_stu_delete">规则删除实验室</h1>\n' +
        '  <div class="inputContainer_stu_delete">\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <input type="text" class="input_stu_delete" placeholder="a" id="Stu_delete_in" name="Stu_delete_in">\n' +
        '      <label for="" class="label_stu_delete">输入实验室相关信息</label>\n' +
        '    </div>\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="printtable2()">开始检索</button>' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="Re_Del_labora()">删除选中</button>\n' +
        '    </div>\n' +
        '  </div>' +
        '</div>' +
        '<div class="display_data_css" id="output"></div>\n';
    mainDiv.innerHTML = content;
    labora_delete_main_r();
}

function printtable2() {
    let str = document.getElementById("Stu_delete_in").value;
    dataToProcess2.splice(0, dataToProcess2.length);

    // 移除之前绑定的事件处理函数
    // let outputDiv = document.getElementById('output');
    // outputDiv.removeEventListener('click', handleDisplayDataClick);
    $.ajax({
        url: 'labora_delete',
        type: 'post',
        datatype: 'json',
        data: {
            address: str,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            let printarr = [
                ['<span class="display_data_in_css_sp1" >&nbsp;###&nbsp;', '</span><br>'],
                ['<span>&nbsp;教室：', '</span><br>'],
                ['<span>&nbsp;地点：', '</span><br>'],
                ['<span class="display_data_in_css_sp1_id">&nbsp;编号：', '</span><br>']
            ];
            for (let i = 0; i < data.length; i++) {
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('display_data_in_css2');
                for (let j = 0; j < data[i].length; j++) {
                    if (j == 0) {
                        let spanElement2 = document.createElement('span');
                        spanElement2.innerHTML = printarr[0][0] + printarr[0][1];
                        containerDiv.appendChild(spanElement2);
                    }
                    let spanStart = printarr[j + 1][0];
                    let spanEnd = printarr[j + 1][1];
                    let spanElement = document.createElement('span');
                    spanElement.innerHTML = spanStart + data[i][j] + spanEnd;
                    spanElement.addEventListener('click', handleDisplayDataClick2);
                    containerDiv.appendChild(spanElement);
                }
                outputDiv.appendChild(containerDiv);
            }
            // 绑定新的事件处理函数
            outputDiv.addEventListener('click', handleDisplayDataClick2);
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

// 新的事件处理函数
function handleDisplayDataClick2(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('display_data_in_css2')) {
        let sp1Element = targetElement.querySelector('.display_data_in_css_sp1_id');
        let sp1Element2 = targetElement.querySelector('.display_data_in_css_sp1');
        let dataId = sp1Element.textContent.slice(4);
        console.log(dataId);
        // 检查该数据是否需要再次处理
        let index = dataToProcess2.indexOf(dataId);
        if (index !== -1) {
            dataToProcess2.splice(index, 1);
            sp1Element2.style.backgroundColor = '';
        } else {
            dataToProcess2.push(dataId);
            sp1Element2.style.backgroundColor = '#ff0000';
        }
        console.log(dataToProcess2);
    }
}

function Re_Del_labora() {
    if (dataToProcess2.length === 0) {
        alert("请输入实验室相关信息检索！")
        return;
    }
    $.ajax({
        url: 'Rtu_labora_delete',
        type: 'post',
        datatype: 'json',
        data: {
            dataToProcess: dataToProcess2,
        },
        success: function (res) {
            printtable2()
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~~实验室删除~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~教师删除~~~~~~~~~~~~~~~~~~~~
function Teacher_delete() {
    let mainDiv;
    mainDiv = document.querySelector('.main');
    let content =
        '<div class="form_stu_delete" id="stuDeleteForm">\n' +
        '  <h1 class="title_stu_delete">规则删除教师</h1>\n' +
        '  <div class="inputContainer_stu_delete">\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <input type="text" class="input_stu_delete" placeholder="a" id="Stu_delete_in" name="Stu_delete_in">\n' +
        '      <label for="" class="label_stu_delete">输入教师相关信息</label>\n' +
        '    </div>\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="printtable3()">开始检索</button>' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="Re_Del_teacher()">删除选中</button>\n' +
        '    </div>\n' +
        '  </div>' +
        '</div>' +
        '<div class="display_data_css" id="output"></div>\n';
    mainDiv.innerHTML = content;
    teacher_delete_main_r();
}

function printtable3() {
    let str = document.getElementById("Stu_delete_in").value;
    dataToProcess3.splice(0, dataToProcess3.length);
    // 移除之前绑定的事件处理函数
    let outputDiv = document.getElementById('output');
    outputDiv.removeEventListener('click', handleDisplayDataClick3);
    $.ajax({
        url: 'Teacher_delete',
        type: 'post',
        datatype: 'json',
        data: {
            address: str,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            let printarr = [
                ['<span class="display_data_in_css_sp1" >&nbsp;', '&nbsp;</span><br>'],
                ['<span>&nbsp;姓名：', '</span><br>'],
                ['<span>&nbsp;性别：', '</span><br>'],
                ['<span>&nbsp;年龄：', '</span><br>'],
                ['<span>&nbsp;职称：', '</span><br>']
            ];
            for (let i = 0; i < data.length; i++) {
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('display_data_in_css3');
                for (let j = 0; j < data[i].length; j++) {
                    // if(j==0){
                    //     let spanElement2 = document.createElement('span');
                    //     spanElement2.innerHTML = printarr[0][0] + printarr[0][1];
                    //     containerDiv.appendChild(spanElement2);
                    // }
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    let spanElement = document.createElement('span');
                    spanElement.innerHTML = spanStart + data[i][j] + spanEnd;
                    containerDiv.appendChild(spanElement);
                }
                outputDiv.appendChild(containerDiv);
            }
            // 绑定新的事件处理函数
            outputDiv.addEventListener('click', handleDisplayDataClick3);
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

// 新的事件处理函数
function handleDisplayDataClick3(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('display_data_in_css3')) {
        let sp1Element = targetElement.querySelector('.display_data_in_css_sp1');
        let sp1Element2 = targetElement.querySelector('.display_data_in_css_sp1');
        let dataId = sp1Element.textContent.slice(1, 9);
        console.log(dataId);
        // 检查该数据是否需要再次处理
        let index = dataToProcess3.indexOf(dataId);
        if (index !== -1) {
            dataToProcess3.splice(index, 1);
            sp1Element2.style.backgroundColor = '';
        } else {
            dataToProcess3.push(dataId);
            sp1Element2.style.backgroundColor = '#ff0000';
        }
        console.log(dataToProcess3);
    }
}

function Re_Del_teacher() {
    if (dataToProcess3.length === 0) {
        alert("请输入教师相关信息检索！")
        return;
    }
    $.ajax({
        url: 'Rtu_teacher_delete',
        type: 'post',
        datatype: 'json',
        data: {
            dataToProcess: dataToProcess3,
        },
        success: function (res) {
            printtable3()
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~~教师删除~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~管理员删除~~~~~~~~~~~~~~~~~~~~
function Admin_delete() {
    let mainDiv;
    mainDiv = document.querySelector('.main');
    let content =
        '<div class="form_stu_delete" id="stuDeleteForm">\n' +
        '  <h1 class="title_stu_delete">规则删除管理员</h1>\n' +
        '  <div class="inputContainer_stu_delete">\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <input type="text" class="input_stu_delete" placeholder="a" id="Stu_delete_in" name="Stu_delete_in">\n' +
        '      <label for="" class="label_stu_delete">输入管理员相关信息</label>\n' +
        '    </div>\n' +
        '    <div class="bttt_stu_delete">\n' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="printtable4()">开始检索</button>' +
        '      <button type="button" class="submitBtn_stu_delete" onclick="Re_Del_Admin()">删除选中</button>\n' +
        '    </div>\n' +
        '  </div>' +
        '</div>' +
        '<div class="display_data_css" id="output"></div>\n';
    mainDiv.innerHTML = content;
    admin_delete_main_r();
}

function printtable4() {
    let str = document.getElementById("Stu_delete_in").value;
    dataToProcess3.splice(0, dataToProcess4.length);
    // 移除之前绑定的事件处理函数
    let outputDiv = document.getElementById('output');
    outputDiv.removeEventListener('click', handleDisplayDataClick3);
    $.ajax({
        url: 'Admin_delete',
        type: 'post',
        datatype: 'json',
        data: {
            address: str,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            let printarr = [
                ['<span class="display_data_in_css_sp1" >&nbsp;###', '&nbsp;</span><br>'],
                ['<span class="display_data_in_css_sp1_1">&nbsp;用户名：', '</span><br>'],
                ['<span>&nbsp;权限：', '</span><br>'],
                ['<span>&nbsp;权限：', '</span><br>']
            ];
            for (let i = 0; i < data.length; i++) {
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('display_data_in_css3');
                for (let j = -1; j < data[i].length; j++) {
                    if (j === -1) {
                        let spanElement2 = document.createElement('span');
                        spanElement2.innerHTML = printarr[0][0] + printarr[0][1];
                        containerDiv.appendChild(spanElement2);
                        j++;
                    }
                    if (j === 1)
                        continue;
                    let spanStart = printarr[j + 1][0];
                    let spanEnd = printarr[j + 1][1];
                    let spanElement = document.createElement('span');
                    if (j === 2) {
                        if (data[i][j] === "0") {
                            spanElement.innerHTML = spanStart + "管理员" + spanEnd;
                        } else if (data[i][j] === "1") {
                            spanElement.innerHTML = spanStart + "超级管理员" + spanEnd;
                        } else if (data[i][j] === "2") {
                            spanElement.innerHTML = spanStart + "超级管理员" + spanEnd;
                        }
                    } else
                        spanElement.innerHTML = spanStart + data[i][j] + spanEnd;
                    containerDiv.appendChild(spanElement);
                }
                outputDiv.appendChild(containerDiv);
            }
            // 绑定新的事件处理函数
            outputDiv.addEventListener('click', handleDisplayDataClick4);
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

// 新的事件处理函数
function handleDisplayDataClick4(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('display_data_in_css3')) {
        let sp1Element = targetElement.querySelector('.display_data_in_css_sp1_1');
        let sp1Element2 = targetElement.querySelector('.display_data_in_css_sp1');
        let dataId = sp1Element.textContent.slice(5);
        console.log(dataId);
        // 检查该数据是否需要再次处理
        let index = dataToProcess4.indexOf(dataId);
        if (index !== -1) {
            dataToProcess4.splice(index, 1);
            sp1Element2.style.backgroundColor = '';
        } else {
            dataToProcess4.push(dataId);
            sp1Element2.style.backgroundColor = '#ff0000';
        }
        console.log(dataToProcess4);
    }
}

function Re_Del_Admin() {
    let permissions = document.querySelector(".In_show_p2");
    let In_show_p2 = permissions.textContent;
    if (dataToProcess4.length === 0) {
        alert("请输入管理员相关信息检索！")
        return;
    } else if (In_show_p2 === "管理员") {
        alert("仅超级管理员可进行此操作！")
        return;
    }
    $.ajax({
        url: 'Rtu_admin_delete',
        type: 'post',
        datatype: 'json',
        data: {
            dataToProcess: dataToProcess4,
        },
        success: function (res) {
            printtable4()
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~~管理员删除~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~上课日志查看~~~~~~~~~~~~~~~~~~~~

function up_class_show() {
    var mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    $.ajax({
        url: 'Up_class_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: "all",
            class: "",
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let main_in_show_r_star = '<div class="main_in_show_r"><div class="main_in_show_r_in_1" onclick="class_show_logs_ee(event)">教室使用日志</div><div class="main_in_show_r_in_2" onclick="class_show_logs_ee2(event)">班级上课日志</div><div class="main_in_show_r_in_3" onclick="class_show_logs_ee3(event)">教师日志</div>';
            let main_in_show_r_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">上课地点：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;上课班级：</span><span class="main_in_show_p1_js_IN_2">', '</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;上课时间：</span><span class="main_in_show_p1_js_IN_3">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;课程名称：</span><span class="main_in_show_p1_js_IN_4">', '</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;任课老师：</span><span class="main_in_show_p1_js_IN_5">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_l">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_r_star + main_in_show_r_end + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

// 新的事件处理函数
function class_show_logs_ee(event) {
    let type = "class";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_1')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_1');
        let dataId = class_var.textContent;
        class_show_logs(dataId, type);
    }
}

function class_show_logs_ee2(event) {
    let type = "class_tt";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_2')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_2');
        let dataId = class_var.textContent;
        class_show_logs(dataId, type);
    }
}

function class_show_logs_ee3(event) {
    let type = "teacher";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_3')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_5');
        let dataId = class_var.textContent;
        class_show_logs(dataId, type);
    }
}


function class_show_logs(dataId, type) {
    let mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';

    $.ajax({
        url: 'Up_class_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: type,
            class: dataId,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main_r');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">上课地点：</span><span class="main_in_show_p1_js_IN_1">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;上课班级：</span><span class="main_in_show_p1_js_IN_2">', '&nbsp;</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;上课时间：</span><span class="main_in_show_p1_js_IN_3">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;课程名称：</span><span class="main_in_show_p1_js_IN_4">', '&nbsp;</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;任课老师：</span><span class="main_in_show_p1_js_IN_5">', '&nbsp;</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_t">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation_r();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~~教室日志删除~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~查看学生信息查看~~~~~~~~~~~~~~~~~~~~/

function up_stu_show() {
    var mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    $.ajax({
        url: 'stu_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: "all",
            class: "",
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let main_in_show_r_star = '<div class="main_in_show_r_2"><div class="main_in_show_r_in_1_2" onclick="stu_show_class_ee4(event)">显示班级</div>';
            let main_in_show_r_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">学号：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;姓名：</span><span class="main_in_show_p1_js_IN_2">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;性别：</span><span class="main_in_show_p1_js_IN_3">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;年龄：</span><span class="main_in_show_p1_js_IN_4">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;班级：</span><span class="main_in_show_p1_js_IN_5">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;专业：</span><span class="main_in_show_p1_js_IN_6">', '</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;学院：</span><span class="main_in_show_p1_js_IN_7">', '</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;入学年份：</span><span class="main_in_show_p1_js_IN_8">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;电话号码：</span><span class="main_in_show_p1_js_IN_9">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_l_2">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_r_star + main_in_show_r_end + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

function stu_show_class_ee4(event) {
    console.log("到：function stu_show_class_ee4(event)");
    let type = "class";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_1_2')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_5');
        let dataId = class_var.textContent;
        stu_show_logs(dataId, type);
    }
}


function stu_show_logs(dataId, type) {
    let mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    console.log("到：function stu_show_logs(dataId,type) {\n");
    $.ajax({
        url: 'stu_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: type,
            class: dataId,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main_r');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">学号：</span><span class="main_in_show_p1_js_IN_1">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;姓名：</span><span class="main_in_show_p1_js_IN_2">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;性别：</span><span class="main_in_show_p1_js_IN_3">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;年龄：</span><span class="main_in_show_p1_js_IN_4">', '&nbsp;</span>'],
                ['<span class="main_in_show_p1">&nbsp;班级：</span><span class="main_in_show_p1_js_IN_4">', '&nbsp;</span><br>'],
                ['<span class="main_in_show_p1">&nbsp;专业：</span><span class="main_in_show_p1_js_IN_4">', '&nbsp;</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_t">';
                for (let j = 0; j < 6; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation_r();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~查看学生信息~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~查看老师信息~~~~~~~~~~~~~~~~~~~~/

function up_teacher_show() {
    var mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    $.ajax({
        url: 'teacher_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: "all",
            class: "",
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let main_in_show_r_star = '<div class="main_in_show_r_2"><div class="main_in_show_r_in_1_2" onclick="stu_show_class_ee5(event)">显示相同职称</div>';
            let main_in_show_r_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">工号：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;姓名：</span><span class="main_in_show_p1_js_IN_2">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;性别：</span><span class="main_in_show_p1_js_IN_3">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;年龄：</span><span class="main_in_show_p1_js_IN_4">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;职称：</span><span class="main_in_show_p1_js_IN_5">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_l_2">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_r_star + main_in_show_r_end + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

function stu_show_class_ee5(event) {
    console.log("到：function stu_show_class_ee5(event)");
    let type = "t_title";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_1_2')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_5');
        let dataId = class_var.textContent;
        teacher_show_logs(dataId, type);
    }
}

function teacher_show_logs(dataId, type) {
    let mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    console.log("到：function teacher_show_logs(dataId,type) {\n");
    $.ajax({
        url: 'teacher_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: type,
            class: dataId,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main_r');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">工号：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;姓名：</span><span class="main_in_show_p1_js_IN_2">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;性别：</span><span class="main_in_show_p1_js_IN_3">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;年龄：</span><span class="main_in_show_p1_js_IN_4">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;职称：</span><span class="main_in_show_p1_js_IN_5">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_t">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation_r()
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

//~~~~~~~~~~~~~查看老师信息~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~查看实验室信息~~~~~~~~~~~~~~~~~~~~/

function laboratory_show() {
    var mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    $.ajax({
        url: 'laboratory_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: "all",
            class: "",
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let main_in_show_r_star = '<div class="main_in_show_r_2"><div class="main_in_show_r_in_1_2" onclick="stu_show_class_ee6(event)">显示同栋实验室</div>';
            let main_in_show_r_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">名称：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;位置：</span><span class="main_in_show_p1_js_IN_2">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;编号：</span><span class="main_in_show_p1_js_IN_3">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_l_2">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_r_star + main_in_show_r_end + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}

function stu_show_class_ee6(event) {
    console.log("到：function stu_show_class_ee4(event)");
    let type = "ID";
    let targetElement = event.target;
    if (targetElement.classList.contains('main_in_show_r_in_1_2')) {
        let class_var = targetElement.closest('.main_side_div').querySelector('.main_in_show_p1_js_IN_2');
        let dataId = class_var.textContent;
        laboratory_show_logs(dataId, type);
    }
}


function laboratory_show_logs(dataId, type) {
    let mainDiv1 = document.querySelector('.main_r');
    mainDiv1.innerHTML = '';
    console.log("到：function stu_show_logs(dataId,type) {\n");
    $.ajax({
        url: 'laboratory_show',
        type: 'post',
        datatype: 'json',
        data: {
            address: type,
            class: dataId,
        },
        success: function (res) {
            let data = JSON.parse(res);
            let mianout = document.getElementById('main_r');
            mianout.innerHTML = '';
            let main_in_show_star = '<div class="main_side_div">';
            let main_in_show_end = '</div>';
            let printarr = [
                ['<span class="main_in_show_p1">名称：</span><span class="main_in_show_p1_js_IN_1">', ' </span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;位置：</span><span class="main_in_show_p1_js_IN_2">', '</span>'],
                ['<span class="main_in_show_p1">&nbsp;|&nbsp;编号：</span><span class="main_in_show_p1_js_IN_3">', '</span>']
            ];

            for (let i = 0; i < data.length; i++) {
                let containerDiv = '<div class="main_in_show_t">';
                for (let j = 0; j < data[i].length; j++) {
                    let spanStart = printarr[j][0];
                    let spanEnd = printarr[j][1];
                    containerDiv += spanStart + data[i][j] + spanEnd;
                }
                containerDiv += '</div>';
                let finalHtml = main_in_show_star + containerDiv + main_in_show_end;
                mianout.innerHTML += finalHtml;
            }
            Animation_r();
        },
        error: function () {
            alert('服务获取失败!');
        },
    });
}
//~~~~~~~~~~~~~查看实验室信息~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~查看中的动画效果~~~~~~~~~~~~
function Animation() {
    let mainSideDiv = document.querySelector(".main");
    let main_sec = mainSideDiv.querySelectorAll(".main_side_div");
    main_sec.forEach((element, index) => {
        element.style.opacity = '0'; // 初始将透明度设置为 0
        element.style.boxShadow = '0px 0px 0px 0px #888888'; // box-shadow: 2px 2px 7px 3px #888888;
        setTimeout(function () {
            element.style.opacity = '1'; // 透明度设置为 1
            element.style.boxShadow = '2px 2px 7px 3px #888888';
        }, 30 * index); // 递增的延迟时间
    });
}
function Animation_r() {
    let mainSideDiv = document.querySelector(".main_r");
    let main_sec = mainSideDiv.querySelectorAll(".main_side_div");
    main_sec.forEach((element, index) => {
        element.style.opacity = '0'; // 初始将透明度设置为 0
        element.style.boxShadow = '0px 0px 0px 0px #888888'; // box-shadow: 2px 2px 7px 3px #888888;
        setTimeout(function () {
            element.style.opacity = '1'; // 透明度设置为 1
            element.style.boxShadow = '2px 2px 7px 3px #888888';
        }, 45 * index); // 递增的延迟时间
    });
}
//~~~~~~~~查看中的动画效果~~~~~~~~~~~~
