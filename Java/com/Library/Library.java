package com.Library;
import java.util.ArrayList;
import java.util.List;

public class Library {
    private List<Book> books;

    public static void main(String[] args){
        Library lib = new Library();

        Book book1 = new Book("1984", "George Orwell", "123");
        Book book2 = new Book("Animal Farm", "George Orwell", "456");
        Book book3 = new Book("Brave New World", "Aldous Huxley", "789");

        lib.addBook(book1);
        lib.addBook(book2);
        lib.addBook(book3);

        List<Book> orwellBooks = lib.searchBooksByAuthor("george orwell");

        System.out.println("Books by George Orwell");
        for (Book b : orwellBooks){
            System.out.println(b.getTitle() + " (ISBN: " + b.getISBN() + ")");
        }

        try{
            lib.removeBookByISBN("123");
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

    public List<Book> searchBooksByAuthor(String author){
        List<Book> results = new ArrayList<>();
        for(Book book: books){
            if (book.getAuthor().equalsIgnoreCase(author)){
                results.add(book);
            }
        }
        return results;
    }
    public void removeBookByISBN(String ISBN) throws BookNotFoundException{
        boolean removed = books.removeIf(book -> book.getISBN().equals(ISBN));
        if(!removed){
            throw new BookNotFoundException("Book with ISBN" + ISBN + " not found.");
        }
    }
}
