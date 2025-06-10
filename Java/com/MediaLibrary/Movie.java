package com.MediaLibrary;

public class Movie extends MediaItem{
    private String director;
    public Movie(String title, int year, String director){
        super(title,year);
        this.director = director;
    }

    public String getDirector(){return director;}

    public void setDirector(String director){this.director = director;}

    @Override
    public String toString(){
        return super.toString() + String.format("Director: %s", director);
    }
}
