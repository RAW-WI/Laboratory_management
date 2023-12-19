package com.fun;
import java.sql.*;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class delete_fun {
    public List<String[]> GetStuArr(String name) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM stu";
        String un_All_name = "SELECT * FROM stu WHERE sname = ? OR sid = ? OR ssex = ? OR sage = ? OR smajor = ? OR scollege =? OR sentrance = ? OR tellphone = ?";
        PreparedStatement statement;
        if (name.equals("all")) {
            statement = con.prepareStatement(un_All);
        } else {
            statement = con.prepareStatement(un_All_name);
            statement.setString(1, name); // 设置参数值
            statement.setString(2, name); // 设置参数值
            statement.setString(3, name); // 设置参数值
            statement.setString(4, name); // 设置参数值
            statement.setString(5, name); // 设置参数值
            statement.setString(6, name); // 设置参数值
            statement.setString(7, name); // 设置参数值
            statement.setString(8, name); // 设置参数值
        }
        ResultSet rs = statement.executeQuery();
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        while (rs.next()) {
            String[] rowData = new String[columnsNumber];
            for (int i = 1; i <= columnsNumber; i++) {
                rowData[i - 1] = rs.getString(i);
            }
            resultList.add(rowData);
    }
        for (String[] row : resultList) {
            for (String data : row) {
                System.out.print(data + " ");
            }
            System.out.println();
        }//正常输出
        con.close();
        statement.close();
        rs.close();
        return resultList;
    }

    public boolean fun_Stu_delete(String[] dataToProcess) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        String del_sql = "DELETE FROM stu WHERE sid=?";
        PreparedStatement statement;
        statement = con.prepareStatement(del_sql);
        for(int i = 0;i<dataToProcess.length;i++) {
            statement.setString(1,dataToProcess[i]);
            statement.executeLargeUpdate();
        }
        return  true;
    }
    public boolean fun_labora_delete(String[] dataToProcess) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        String del_sql = "DELETE FROM laboratory WHERE laboratoryID=?";
        PreparedStatement statement;
        statement = con.prepareStatement(del_sql);
        for(int i = 0;i<dataToProcess.length;i++) {
            statement.setString(1,dataToProcess[i]);
            statement.executeLargeUpdate();
        }
        return  true;
    }
    public boolean fun_teacher_delete(String[] dataToProcess) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        String del_sql = "DELETE FROM teachers WHERE t_ID = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(del_sql);
        for(int i = 0;i<dataToProcess.length;i++) {
            statement.setString(1,dataToProcess[i]);
            statement.executeLargeUpdate();
        }
        return  true;
    }
    public boolean fun_admin_delete(String[] dataToProcess) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        String del_sql = "DELETE FROM admins WHERE account = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(del_sql);
        for(int i = 0;i<dataToProcess.length;i++) {
            statement.setString(1,dataToProcess[i]);
            statement.executeLargeUpdate();
        }
        return  true;
    }


    public List<String[]> Get_labora_Arr(String laboratoryname) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM laboratory";
        String un_All_name = "SELECT * FROM laboratory WHERE laboratoryName = ? OR laboratoryID = ? OR locations = ?";
        PreparedStatement statement;
        if (laboratoryname.equals("all")) {
            statement = con.prepareStatement(un_All);
        } else {
            statement = con.prepareStatement(un_All_name);
            statement.setString(1, laboratoryname); // 设置一样是因为这个值可能是id，也可能是名字。
            statement.setString(2, laboratoryname); //
            statement.setString(3, laboratoryname); //
        }
        ResultSet rs = statement.executeQuery();
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        while (rs.next()) {
            String[] rowData = new String[columnsNumber];
            for (int i = 1; i <= columnsNumber; i++) {
                rowData[i - 1] = rs.getString(i);
            }
            resultList.add(rowData);
        }
        for (String[] row : resultList) {
            for (String data : row) {
                System.out.print(data + " ");
            }
            System.out.println();
        }//正常输出
        con.close();
        statement.close();
        rs.close();
        return resultList;
    }
    public List<String[]> Get_Teacher_Arr(String laboratoryname) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM teachers";
        String un_All_name = "SELECT * FROM teachers WHERE t_ID = ? OR t_name = ? OR t_title = ? OR t_sex = ? OR t_age = ?";
        PreparedStatement statement;
        if (laboratoryname.equals("all")) {
            statement = con.prepareStatement(un_All);
        } else {
            statement = con.prepareStatement(un_All_name);
            statement.setString(1, laboratoryname); // 设置一样是因为这个值可能是id，也可能是名字。
            statement.setString(2, laboratoryname); //
            statement.setString(3, laboratoryname); //
            statement.setString(4, laboratoryname); //
            statement.setString(5, laboratoryname); //
        }
        ResultSet rs = statement.executeQuery();
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        while (rs.next()) {
            String[] rowData = new String[columnsNumber];
            for (int i = 1; i <= columnsNumber; i++) {
                rowData[i - 1] = rs.getString(i);
            }
            resultList.add(rowData);
        }
        for (String[] row : resultList) {
            for (String data : row) {
                System.out.print(data + " ");
            }
            System.out.println();
        }//正常输出
        con.close();
        statement.close();
        rs.close();
        return resultList;
    }
    public List<String[]> Get_admin_Arr(String laboratoryname) throws SQLException, ClassNotFoundException {
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM admins";
        String un_All_name = "SELECT * FROM admins WHERE account = ? OR limits = ?";
        PreparedStatement statement;
        if (laboratoryname.equals("all")) {
            statement = con.prepareStatement(un_All);
        } else {
            statement = con.prepareStatement(un_All_name);
            statement.setString(1, laboratoryname); // 设置一样是因为这个值可能是id，也可能是名字。
            if(laboratoryname.equals("管理员"))
                statement.setString(2, "0");
            else if(laboratoryname.equals("超级管理员")){
                statement.setString(2, "1");
            }else if(laboratoryname.equals("超级管理员")){
                statement.setString(2, "2");
            }else{
                statement.setString(2, "4");
            }

        }
        ResultSet rs = statement.executeQuery();
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        while (rs.next()) {
            String[] rowData = new String[columnsNumber];
            for (int i = 1; i <= columnsNumber; i++) {
                rowData[i - 1] = rs.getString(i);
            }
            resultList.add(rowData);
        }
        for (String[] row : resultList) {
            for (String data : row) {
                System.out.print(data + " ");
            }
            System.out.println();
        }//正常输出
        con.close();
        statement.close();
        rs.close();
        return resultList;
    }
}
