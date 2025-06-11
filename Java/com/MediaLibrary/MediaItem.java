package com.MediaLibrary;

public class MediaItem {
    private String title;
    private int year;

    public MediaItem(String title, int year){
        this.title = title;
        this.year = year;
    }

    public String getTitle(){return title;}

    public void setTitle(String title){this.title = title;}

    public int getYear(){return year;}

    public void setYear(int year){this.year = year;}

    @Override
    public String toString(){
        return String.format("Title: %s, Year: %d", title, year);
    }
}
