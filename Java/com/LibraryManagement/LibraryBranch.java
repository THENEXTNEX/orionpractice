package com.LibraryManagement;
import java.util.List;

public class LibraryBranch {
    private String branchName;
    private List<Book> books;

    public LibraryBranch(String branchName, List<Book> books){
        this.branchName = branchName;
        this.books = books;
    }

    public String getBranchName(){return branchName;}

    public void setBranchName(String branchName){this.branchName = branchName;}

    public List<Book> getBooks(){return books;}

    public void addBook(Book b){
        books.add(b);
    }

    public void listBooks(){
        System.out.println("Books in branch: " + branchName);
        for(Book b: books){
            System.out.println(b);
        }
    }

    public boolean findBookISBN(String isbn){
        for(Book b: books){
            if(b.getISBN().equalsIgnoreCase(isbn)){
                return true;
            }
        }
        return false;
    }
}
