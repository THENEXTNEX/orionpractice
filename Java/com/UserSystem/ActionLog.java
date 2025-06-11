package com.UserSystem;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ActionLog{
    private String action;
    private String username;
    private LocalDateTime timeStamp;

    public ActionLog(String action, String username, LocalDateTime timeStamp){
        this.action = action;
        this.username = username;
        this.timeStamp = timeStamp;
    }

    public String getAction(){return action;}

    public void setAction(String action){this.action = action;}

    public String getUsername(){return username;}

    public void setUsername(String username){this.username = username;}

    public LocalDateTime getTimeStamp(){return timeStamp;}

    @Override
    public String toString(){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return String.format("Action: %d, Username: %s Timestamp: %s",action, username, timeStamp.format(formatter));
    }
}

