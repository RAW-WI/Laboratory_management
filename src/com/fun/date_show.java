package com.fun;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class date_show {
    public List<String[]> show_class_log() throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM up_class_logs";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
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
    public List<String[]> show_class_log_class(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM up_class_logs WHERE cname = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1, V_class); //
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
    public List<String[]> show_class_log_class_tt(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM up_class_logs WHERE up_class = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1, V_class); //
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
    public List<String[]> show_class_log_teacher(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM up_class_logs WHERE up_class_teacher = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1, V_class); //
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
    public List<String[]> show_stu_log(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM stu WHERE classs = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1,V_class);
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
    public List<String[]> show_stu_log() throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM stu";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
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
    public List<String[]> show_teacher_log(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM teachers WHERE t_title = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1,V_class);
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
    public List<String[]> show_laboratory_log() throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM laboratory";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
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
    public List<String[]> show_laboratory_log(String V_class) throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM laboratory WHERE locations = ?";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
        statement.setString(1,V_class);
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
    public List<String[]> show_teacher_log() throws SQLException, ClassNotFoundException{
        Sql_con sql_con = new Sql_con();
        Connection con = sql_con.GetCon();
        List<String[]> resultList = new ArrayList<>();
        String un_All = "SELECT * FROM teachers";
        PreparedStatement statement;
        statement = con.prepareStatement(un_All);
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
