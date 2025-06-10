package com.Library;

public class Book {
    private String title;
    private String author;
    private String ISBN;

    public static void main(String[] args){

    }

    public Book(String title, String author, String ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    public String getTitle(){return title;}

    public void setTitle(){this.title = title;}

    public String getAuthor(){return author;}

    public void setAuthor(){this.author = author;}

    public String getISBN(){return ISBN;}

    public void setISBN(){this.ISBN = ISBN;}
}
