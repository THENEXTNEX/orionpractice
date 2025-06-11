package com.LibraryManagement;

public class Book {
    private String title;
    private String author;
    private String isbn;
    private String status;

    public Book(String title, String author, String isbn, String status){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = status;
    }

    public String getTitle(){return title;}

    public void setTitle(String title){this.title = title;}

    public String getauthor(){return author;}

    public void setAuthor(String author){this.author = author;}

    public String getISBN(){return isbn;}

    public void setISBN(String isbn){this.isbn = isbn;}

    public String getStatus(){return status;}

    public void setStatus(String status){this.status = status;}
  
}
