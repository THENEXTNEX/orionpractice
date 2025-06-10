package com.MediaLibrary;
import java.util.ArrayList;
import java.util.List;

public class MediaManager {
    List<MediaItem> media;
    
    public static void main(String[] args){
        MediaManager MM = new MediaManager();
        Movie movie1 = new Movie("Die Hard", 1999, "Joe Mama");
        Movie movie2 = new Movie("Shawshank Redemption", 1990, "The GOAT");
        Artist artist1 = new Artist("Not Like Us", 2024, "Kendrick Lamar");
        Artist artist2 = new Artist("Passionfruit", 2013, "Drake");

        MM.addMedia(movie1);
        MM.addMedia(movie2);
        MM.addMedia(artist1);
        MM.addMedia(artist2);

        MM.listMedia();

        //Search by title passionfruit
        System.out.println("Search by title \"Passionfruit\"");
        for(MediaItem m : MM.searchByTitle("Passionfruit")){
            System.out.println(m);
        }
    }

    public MediaManager(){
        this.media = new ArrayList<>();
    }

    public void addMedia(MediaItem m){
        media.add(m);
    }
    public void listMedia(){
        for(MediaItem m: media){
            System.out.println(m);
        }
    }

    public List<MediaItem> searchByTitle(String title){
        List<MediaItem> results = new ArrayList<>();
        for(MediaItem m: media){
            if(m.getTitle().equals(title)){
                results.add(m);
            }
        }
        return results;
    }
}
