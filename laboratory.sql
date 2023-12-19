/*
 Navicat Premium Data Transfer

 Source Server         : https11111
 Source Server Type    : MySQL
 Source Server Version : 80200
 Source Host           : localhost:3306
 Source Schema         : laboratory

 Target Server Type    : MySQL
 Target Server Version : 80200
 File Encoding         : 65001

 Date: 13/12/2023 17:29:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `account` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '管理员名称',
  `password` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '管理员密码',
  `limits` int NULL DEFAULT NULL COMMENT '“2”：学生\r\n“1”：导师\r\n“0”：管理员\r\n',
  PRIMARY KEY (`account`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('ly', '123', 0);
INSERT INTO `admins` VALUES ('yhb', '123', 1);

-- ----------------------------
-- Table structure for admins_logon_logs
-- ----------------------------
DROP TABLE IF EXISTS `admins_logon_logs`;
CREATE TABLE `admins_logon_logs`  (
  `username` varchar(20) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '老师名称',
  `log_time` datetime NOT NULL COMMENT '登陆时间',
  PRIMARY KEY (`log_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins_logon_logs
-- ----------------------------
INSERT INTO `admins_logon_logs` VALUES ('ly', '2023-11-26 16:50:32');
INSERT INTO `admins_logon_logs` VALUES ('yhb', '2023-11-28 14:22:31');
INSERT INTO `admins_logon_logs` VALUES ('tt', '2023-11-28 14:57:49');
INSERT INTO `admins_logon_logs` VALUES ('tt', '2023-11-28 16:28:12');
INSERT INTO `admins_logon_logs` VALUES ('ly', '2023-11-28 16:41:30');
INSERT INTO `admins_logon_logs` VALUES ('yhb', '2023-11-28 16:42:35');

-- ----------------------------
-- Table structure for laboratory
-- ----------------------------
DROP TABLE IF EXISTS `laboratory`;
CREATE TABLE `laboratory`  (
  `laboratoryName` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '实验室名称',
  `locations` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '实验室位置',
  `laboratoryID` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT 'ID',
  PRIMARY KEY (`laboratoryID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of laboratory
-- ----------------------------
INSERT INTO `laboratory` VALUES ('B-111', '阿斯弗', '009211');
INSERT INTO `laboratory` VALUES ('C-9Q1', '艺术楼', '0A3G5H');
INSERT INTO `laboratory` VALUES ('C-2RA', '综合楼', '0A8Y7Z');
INSERT INTO `laboratory` VALUES ('C-T6G', '艺术楼', 'D1B4J8');
INSERT INTO `laboratory` VALUES ('123', '123', '123');
INSERT INTO `laboratory` VALUES ('C-1RA', '宏博楼', '8S8K3A');
INSERT INTO `laboratory` VALUES ('C-6Q1', '实验楼', '7F5H3J');
INSERT INTO `laboratory` VALUES ('C-3L0', '综合楼', '9D9R3T');

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu`  (
  `sid` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '学生学号',
  `sname` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '班级中每个学生姓名',
  `ssex` varchar(1) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '性别',
  `sage` int NULL DEFAULT NULL COMMENT '学生年龄',
  `classs` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '班级',
  `smajor` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '学生专业',
  `scollege` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '学生所属学院',
  `sentrance` year NULL DEFAULT NULL COMMENT '入学年份',
  `tellphone` varchar(20) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '学生手机号码',
  PRIMARY KEY (`sname`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES ('1021', '李二十三', '男', 20, '18计算', '计算机科学', '工学院', 2018, '13812345678');
INSERT INTO `stu` VALUES ('1018', '吴二十', '女', 22, '16舞蹈', '舞蹈编导', '舞蹈学院', 2016, '13099998888');
INSERT INTO `stu` VALUES ('1019', '郑二十一', '男', 20, '18戏剧', '戏剧影视', '戏剧学院', 2018, '13211112222');
INSERT INTO `stu` VALUES ('1020', '钱二十二', '女', 21, '17生物', '生物工程', '生命科学学院', 2017, '13144445555');
INSERT INTO `stu` VALUES ('1010', '朱十二', '男', 21, '17体育', '体育教育', '体育学院', 2017, '13012345678');
INSERT INTO `stu` VALUES ('1012', '张十四', '女', 21, '17心理', '心理学', '心理学院', 2017, '13844445555');
INSERT INTO `stu` VALUES ('1013', '王十五', '男', 19, '19经济', '经济学', '经济管理学院', 2019, '13777776666');
INSERT INTO `stu` VALUES ('1023', '曹二十五', '女', 22, '16生物', '生物科学', '生命科学学院', 2016, '13654328901');
INSERT INTO `stu` VALUES ('1011', '吕十三', '男', 20, '18环境', '环境工程', '环境学院', 2018, '13911112222');
INSERT INTO `stu` VALUES ('1010', '郑十二', '女', 21, '17艺术', '艺术设计', '艺术学院', 2017, '13088889999');
INSERT INTO `stu` VALUES ('1001', '张三', '男', 20, '18计算', '计算机科学', '工学院', 2018, '13812345678');
INSERT INTO `stu` VALUES ('1005', '刘七', '男', 20, '18生物', '生物医学', '医学院', 2018, '13599998888');
INSERT INTO `stu` VALUES ('1006', '钱八', '女', 21, '17历史', '历史学', '人文学院', 2017, '13166667777');
INSERT INTO `stu` VALUES ('1023', '赵二十五', '男', 19, '19物理', '物理学', '理学院', 2019, '13611112222');
INSERT INTO `stu` VALUES ('1024', '孙二十六', '女', 22, '16化学', '化学工程', '化工学院', 2016, '13744445555');
INSERT INTO `stu` VALUES ('1028', '钱三十', '女', 22, '16电子', '电子信息', '信息学院', 2016, '13477776666');
INSERT INTO `stu` VALUES ('1029', '李三十一', '男', 20, '18机械', '机械设计', '工学院', 2018, '13300001111');
INSERT INTO `stu` VALUES ('1030', '李三十二', '女', 21, '17艺术', '艺术设计', '艺术学院', 2017, '13088889999');
INSERT INTO `stu` VALUES ('1031', '赵三十三', '男', 23, '15计算机', '计算机科学与技术', '信息学院', 2015, '13511112222');
INSERT INTO `stu` VALUES ('1032', '孙三十四', '女', 24, '14化学', '化学工程', '化学学院', 2014, '13622223333');
INSERT INTO `stu` VALUES ('1033', '周三十五', '男', 25, '13生物', '生物工程', '生命科学学院', 2013, '13733334444');
INSERT INTO `stu` VALUES ('1034', '吴三十六', '女', 26, '12历史', '历史学', '人文学院', 2012, '13844445555');
INSERT INTO `stu` VALUES ('1036', '钱三十八', '女', 28, '10电子', '电子信息', '信息学院', 2010, '13066667777');
INSERT INTO `stu` VALUES ('1037', '李三十九', '男', 29, '09机械', '机械设计', '工学院', 2009, '13177778888');
INSERT INTO `stu` VALUES ('1038', '王四十', '女', 30, '08艺术', '艺术设计', '艺术学院', 2008, '13288889999');
INSERT INTO `stu` VALUES ('1039', '赵四十一', '男', 31, '07计算机', '计算机科学与技术', '信息学院', 2007, '13399990000');
INSERT INTO `stu` VALUES ('1040', '孙四十二', '女', 32, '06化学', '化学工程', '化学学院', 2006, '13400001111');
INSERT INTO `stu` VALUES ('1041', '周四十三', '男', 33, '05生物', '生物工程', '生命科学学院', 2005, '13511112222');
INSERT INTO `stu` VALUES ('1042', '吴四十四', '女', 34, '04历史', '历史学', '人文学院', 2004, '13622223333');
INSERT INTO `stu` VALUES ('1044', '钱四十六', '女', 36, '02电子', '电子信息', '信息学院', 2002, '13844445555');
INSERT INTO `stu` VALUES ('1045', '李四十七', '男', 37, '01机械', '机械设计', '工学院', 2001, '13955556666');
INSERT INTO `stu` VALUES ('1046', '王四十八', '女', 38, '00艺术', '艺术设计', '艺术学院', 2000, '13066667777');
INSERT INTO `stu` VALUES ('1047', '赵四十九', '男', 39, '99计算机', '计算机科学与技术', '信息学院', 1999, '13177778888');
INSERT INTO `stu` VALUES ('1048', '孙五十', '女', 40, '98化学', '化学工程', '化学学院', 1998, '13288889999');
INSERT INTO `stu` VALUES ('1049', '周五十一', '男', 41, '97生物', '生物工程', '生命科学学院', 1997, '13399990000');
INSERT INTO `stu` VALUES ('1050', '吴五十二', '女', 42, '96历史', '历史学', '人文学院', 1996, '13400001111');
INSERT INTO `stu` VALUES ('1054', '吴五十六', '男', 25, '19数学', '数学与计算科学', '数学科学学院', 2019, '13844445556');
INSERT INTO `stu` VALUES ('1055', '郑五十七', '女', 26, '20物理', '物理学', '物理学院', 2020, '13955556667');
INSERT INTO `stu` VALUES ('1056', '王五十八', '男', 27, '21化工', '化学工程与技术', '化工学院', 2021, '14066667778');
INSERT INTO `stu` VALUES ('1057', '李五十九', '女', 28, '22材料', '材料科学与工程', '材料科学与工程学院', 2022, '14177778889');
INSERT INTO `stu` VALUES ('1058', '张六十', '男', 29, '23机械', '机械工程', '机械工程学院', 2023, '14288889990');
INSERT INTO `stu` VALUES ('1060', '陈六十二', '男', 31, '25电气', '电气工程', '电气工程学院', 2025, '14500000012');
INSERT INTO `stu` VALUES ('1062', '黄六十四', '男', 33, '27计算机', '计算机科学与技术', '信息学院', 2027, '14700000034');
INSERT INTO `stu` VALUES ('1063', '田六十五', '女', 34, '28金融', '金融学', '经济学院', 2028, '14800000045');
INSERT INTO `stu` VALUES ('1064', '徐六十六', '男', 35, '29经济', '经济学', '经济学院', 2029, '14900000056');
INSERT INTO `stu` VALUES ('34134234234', '胡帅', '女', 22, '21计科', '计算机233', 'AI', 2000, '121212121212');
INSERT INTO `stu` VALUES ('1066', '许六十八', '男', 37, '31法学', '法学', '法学院', 2031, '15100000078');
INSERT INTO `stu` VALUES ('1067', '何六十九', '女', 38, '32外语', '英语', '外国语学院', 2032, '15200000089');
INSERT INTO `stu` VALUES ('1054', '吴五十11', '男', 25, '19数学', '数学与计算科学', '数学科学学院', 2019, '13844445556');
INSERT INTO `stu` VALUES ('1069', '方七十一', '女', 40, '34新闻学', '新闻传播学', '新闻与传播学院', 2033, '15300000100');
INSERT INTO `stu` VALUES ('1070', '张七十二', '男', 41, '35历史学', '历史学', '历史学院', 2034, '15400000111');
INSERT INTO `stu` VALUES ('1071', '王七十三', '女', 42, '36哲学', '哲学', '哲学学院', 2035, '15500000122');
INSERT INTO `stu` VALUES ('1072', '李七十四', '男', 43, '37文学', '中国语言文学', '文学院', 2036, '15600000133');
INSERT INTO `stu` VALUES ('1073', '赵七十五', '女', 44, '38艺术', '美术学', '美术学院', 2037, '15700000144');
INSERT INTO `stu` VALUES ('1074', '孙七十六', '男', 45, '39音乐', '音乐学', '音乐学院', 2038, '15800000155');
INSERT INTO `stu` VALUES ('1075', '周七十七', '女', 46, '40体育', '体育教育', '体育学院', 2039, '15900000166');
INSERT INTO `stu` VALUES ('1076', '吴七十八', '男', 47, '41教育学', '教育学', '教育学院', 2040, '16000000177');
INSERT INTO `stu` VALUES ('1077', '郑七十九', '女', 48, '42心理学', '心理学', '心理学院', 2041, '16100000188');
INSERT INTO `stu` VALUES ('1078', '王八十', '男', 49, '43社会学', '社会学', '社会学院', 2042, '16200000199');
INSERT INTO `stu` VALUES ('1079', '李八十一', '女', 50, '44管理科学与工程', '管理科学与工程', '管理学院', 2043, '16300000210');
INSERT INTO `stu` VALUES ('1081', '王八十三', '女', 52, '46机械工程', '机械工程', '机械工程学院', 2045, '16500000232');
INSERT INTO `stu` VALUES ('1082', '李八十四', '男', 53, '47电气工程', '电气工程', '电气工程学院', 2046, '16600000243');
INSERT INTO `stu` VALUES ('1084', '钱八十六', '男', 55, '49信息工程', '信息工程', '信息学院', 2048, '16800000254');
INSERT INTO `stu` VALUES ('1085', '孙八十七', '女', 56, '50化学工程', '化学工程与技术', '化工学院', 2049, '16900000265');
INSERT INTO `stu` VALUES ('1087', '吴八十九', '女', 58, '52材料科学与工程', '材料科学与工程', '材料科学与工程学院', 2051, '17100000287');
INSERT INTO `stu` VALUES ('1088', '郑九十', '男', 59, '53医学', '临床医学', '医学院', 2052, '17200000298');
INSERT INTO `stu` VALUES ('1089', '王九十一', '女', 60, '54药学', '药学', '药学院', 2053, '17300000309');
INSERT INTO `stu` VALUES ('1090', '李九十二', '男', 61, '55口腔医学', '口腔医学', '口腔医学院', 2054, '17400000320');
INSERT INTO `stu` VALUES ('1091', '张九十三', '女', 62, '56护理学', '护理学', '护理学院', 2055, '17500000331');
INSERT INTO `stu` VALUES ('1092', '王九十四', '男', 63, '57公共卫生', '公共卫生', '公共卫生学院', 2056, '17600000342');
INSERT INTO `stu` VALUES ('1093', '李九十五', '女', 64, '58体育学', '体育教育', '体育学院', 2057, '17700000353');
INSERT INTO `stu` VALUES ('1094', '赵九十六', '男', 65, '59艺术学', '美术学', '美术学院', 2058, '17800000364');
INSERT INTO `stu` VALUES ('1095', '孙九十七', '女', 66, '60音乐学', '音乐学', '音乐学院', 2059, '17900000375');

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers`  (
  `t_ID` varchar(30) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '工号',
  `t_name` varchar(30) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '姓名',
  `t_sex` varchar(2) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '性别',
  `t_age` int NULL DEFAULT NULL COMMENT '年龄',
  `t_title` varchar(20) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '职称',
  PRIMARY KEY (`t_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES ('2334343', '啊手动阀手动阀', '女', 88, '副教授');
INSERT INTO `teachers` VALUES ('T0021021', '李二十三', '男', 40, '教授');
INSERT INTO `teachers` VALUES ('T0021026', '孙六十八', '男', 55, '教授');
INSERT INTO `teachers` VALUES ('T0021029', '吴九十九', '女', 52, '教授');
INSERT INTO `teachers` VALUES ('T0021031', '王一百零一', '男', 70, '教授');
INSERT INTO `teachers` VALUES ('T0021034', '李一百零四', '女', 58, '副教授');
INSERT INTO `teachers` VALUES ('T0021035', '周一百零五', '男', 80, '教授');
INSERT INTO `teachers` VALUES ('T0021036', '吴一百零六', '女', 62, '教授');
INSERT INTO `teachers` VALUES ('T0021037', '郑一百零七', '男', 85, '教授');

-- ----------------------------
-- Table structure for up_class_logs
-- ----------------------------
DROP TABLE IF EXISTS `up_class_logs`;
CREATE TABLE `up_class_logs`  (
  `cname` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '教室名称',
  `up_class` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '上课班级',
  `up_time` datetime NULL DEFAULT NULL COMMENT '上课时间',
  `up_class_name` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '课程名称',
  `up_class_teacher` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '任课老师'
) ENGINE = InnoDB CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of up_class_logs
-- ----------------------------
INSERT INTO `up_class_logs` VALUES ('B-223', '21数媒', '2023-11-07 16:50:14', '影视制作', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-902', '21计算机', '2023-12-13 16:38:50', 'java实训', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-723', '21计算机', '2023-08-17 09:25:42', '数据结构与算法', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-422', '18数媒', '2023-11-07 14:50:14', '人工智能', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-567', '19计算机', '2023-10-29 11:38:50', 'Web开发', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-314', '20数媒', '2023-09-05 16:50:14', '移动应用开发', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-889', '18计算机', '2023-12-01 10:38:50', '大数据分析', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-623', '21数媒', '2023-08-09 16:50:14', '数据库管理', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-455', '19计算机', '2023-10-18 11:38:50', '软件工程', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-777', '20数媒', '2023-09-12 16:50:14', '网络安全', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-567', '18计算机', '2023-11-25 11:38:50', 'Java实训', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-234', '21数媒', '2023-08-23 16:50:14', '影视制作', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-123', '20计算机', '2023-09-15 10:38:50', '数据结构与算法', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-888', '18数媒', '2023-12-03 16:50:14', '人工智能', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-666', '19计算机', '2023-10-10 11:38:50', 'Web开发', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-999', '18数媒', '2023-12-07 16:50:14', '移动应用开发', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-111', '21计算机', '2023-08-03 11:38:50', '大数据分析', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-555', '20数媒', '2023-09-20 16:50:14', '数据库管理', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-777', '19计算机', '2023-11-15 11:38:50', '软件工程', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-333', '18数媒', '2023-12-09 16:50:14', '网络安全', '谭丫丫');
INSERT INTO `up_class_logs` VALUES ('B-222', '20计算机', '2023-09-10 10:38:50', 'Java实训', '张楚楚');
INSERT INTO `up_class_logs` VALUES ('B-444', '21数媒', '2023-08-29 16:50:14', '影视制作', '谭丫丫');

SET FOREIGN_KEY_CHECKS = 1;
