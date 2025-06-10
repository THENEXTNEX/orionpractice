package com.MediaLibrary;

public class Artist extends MediaItem{
    private String artist;
    public Artist(String title, int year, String artist){
        super(title, year);
        this.artist = artist;
    }

    public String getArtist(){return artist;}

    public void setArtist(String artist){this.artist = artist;}

    @Override
    public String toString(){
        return super.toString() + String.format("Artist: %s", artist);
    }
}
