package com.Library;
import java.util.ArrayList;
import java.util.List;

public class Library {
    private List<Book> books;

    public static void main(String[] args){
        Library lib = new Library();

        Book b = new Book("Jeff","Tatum","1234");

        lib.addBook(b);

        try{
            lib.removeBookByISBN("1234");
            System.out.println("Book removed!");
        }catch(BookNotFoundException e){
            System.out.println("Error: " + e.getMessage());
        }
    }
    public Library(){
        this.books = new ArrayList<>();
    }

    public void addBook(Book book){
        books.add(book);
    }

    public void removeBookByISBN(String ISBN) throws BookNotFoundException{
        boolean removed = books.removeIf(book -> book.getISBN().equals(ISBN));
        if(!removed){
            throw new BookNotFoundException("Book with ISBN" + ISBN + " not found.");
        }
    }
}
