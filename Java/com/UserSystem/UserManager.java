package com.UserSystem;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class UserManager {
    List<User> users;
    List<ActionLog> logs;
    
    public static void main(String[] args){
        LocalDateTime now = LocalDateTime.now();
        UserManager userM = new UserManager();

        User user1 = new User("Caleb", "user");
        User user2 = new User("Daniel", "admin");
        ActionLog log1 = new ActionLog("Logged in", "Caleb", now);
        ActionLog log2 = new ActionLog("Logged in", "Daniel", now);
        ActionLog log3 = new ActionLog("Posted thing", "Caleb", now);
        ActionLog log4 = new ActionLog("Posted thing", "Daniel", now);
        ActionLog log5 = new ActionLog("Logged out", "Caleb", now);
        ActionLog log6 = new ActionLog("Logged out", "Daniel", now);
        
        userM.addUser(user1);
        userM.addUser(user2);
        userM.addLog(log1);
        userM.addLog(log2);
        userM.addLog(log3);
        userM.addLog(log4);
        userM.addLog(log5);
        userM.addLog(log6);

    }

    public UserManager(){
        this.users = new ArrayList<>();
        this.logs = new ArrayList<>();
    }

    public void addUser(User u){
        users.add(u);
    }

    public void addLog(ActionLog l){
        logs.add(l);
    }

    public void printLogs(){
        for(ActionLog l: logs){
            System.out.println(l);
        }
    }

    public void logAction(String action, String username){
        LocalDateTime now = LocalDateTime.now();
        ActionLog log = new ActionLog(action, username, now);
        logs.add(log);
    }
    public String getUser(String username){

        for(User u: users){
            if(u.getUsername().equalsIgnoreCase(username)){
                return username;
            }
        }

        return username;
    }
}
