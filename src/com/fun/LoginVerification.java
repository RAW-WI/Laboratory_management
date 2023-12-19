package com.fun;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class LoginVerification {
    public String login_verification_s(String uName, String uPassword) {
        boolean btt = false;
        try {
            Sql_con sql_con = new Sql_con();
            Connection con= sql_con.GetCon();
            //初始话一个根据username和password检查账户密码是否正确
            String query = "SELECT limits FROM admins WHERE account = '" + uName + "' AND password = '" + uPassword + "'";
            PreparedStatement statement = con.prepareStatement(query);
            ResultSet rs = statement.executeQuery();
            if(rs.next()){
                btt = logLogin(con,uName);
                System.out.println("密码正确！ 权限： |"+ rs.getString("limits")+"|  btt:"+btt+"");
            }
            else{
                System.out.println("密码错误！");
                btt=false;
            }
            if(btt){
                String relimtis = rs.getString("limits");
                con.close();
                statement.close();
                rs.close();
                return relimtis;
            }else
                return  "error";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "error";
    }
    private boolean logLogin(Connection con, String uName) {
        String admins_logon_logs = "INSERT INTO admins_logon_logs (username,log_time) VALUES (?,?)";
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        try (PreparedStatement logStatement = con.prepareStatement(admins_logon_logs)) {
            logStatement.setString(1, uName);
            logStatement.setString(2, formattedTime);
            int rowsAffected = logStatement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("登录日志记录成功");
                return true;
            } else {
                System.out.println("登录日志记录失败");
                return false;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

}