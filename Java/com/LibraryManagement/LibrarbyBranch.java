package com.LibraryManagement;
import java.util.List;

public class LibrarbyBranch {
    private String branchName;
    private List<Book> books;

    public LibrarbyBranch(String branchName, List<Book> books){
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
        System.out.println("Finding book by isbn: " + isbn);
        for(Book b: books){
            if(b.getISBN().equalsIgnoreCase(isbn)){
                System.out.println("Found book with isbn " + isbn + " at branch" + branchName);
            }
        }
        return false;
    }
}
