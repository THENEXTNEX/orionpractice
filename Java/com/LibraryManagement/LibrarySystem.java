package com.LibraryManagement;
import java.util.List;
import java.util.ArrayList;

public class LibrarySystem {
    private List<LibraryBranch> branches;

    public static void main(String[] args){
        LibrarySystem libSys = new LibrarySystem();

        List<Book> branch1Books = new ArrayList<>();
        branch1Books.add(new Book("1984", "George Orwell", "9780451524935", "Available"));
        branch1Books.add(new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467", "Checked Out"));
        branch1Books.add(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Available"));

        List<Book> branch2Books = new ArrayList<>();
        branch2Books.add(new Book("Moby Dick", "Herman Melville", "9781503280786", "Reserved"));
        branch2Books.add(new Book("Pride and Prejudice", "Jane Austen", "9781503290563", "Available"));
        branch2Books.add(new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488", "Checked Out"));

        LibraryBranch branch1 = new LibraryBranch("Central Library", branch1Books);
        LibraryBranch branch2 = new LibraryBranch("East Branch", branch2Books);

        libSys.addBranch(branch1);
        libSys.addBranch(branch2);

        libSys.listBooks();

        libSys.findByISBN("9781503290563");

    }

    public LibrarySystem(){
        this.branches = new ArrayList<>();
    }

    public void addBranch(LibraryBranch LB){
        branches.add(LB);
    }

    public void listBooks(){
        for(LibraryBranch libB: branches){
            libB.listBooks();
        }
    }

    public void findByISBN(String isbn){
        boolean found = false;
        System.out.println("Finding book by isbn: " + isbn);
        for(LibraryBranch libB: branches){
            if(libB.findBookISBN(isbn)){
                System.out.println("Found book with isbn " + isbn + " at branch " + libB.getBranchName());
                found = true;
            }
        }
        if(!found){
            System.out.println("Could not find book with isbn " + isbn);
        }
    }
}
