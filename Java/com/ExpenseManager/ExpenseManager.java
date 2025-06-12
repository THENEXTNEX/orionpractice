package com.ExpenseManager;

import java.util.List;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Set;

public class ExpenseManager {
    private List<Expense> expenseList;
    private static final Set<String> ALLOWED_CATEGORIES = Set.of("Food", "Travel", "Personal");

    public static void main(String[] args) {
        ExpenseManager expenseM = new ExpenseManager();
        Scanner scanner = new Scanner(System.in);
        String name = "";
        double amount = 0.0;
        String category = "";


        while (true) {
            System.out.println("Welcome to the expense tracker! Please select from the following!");
            System.out.println("1. Add Expense\n2. View All Expenses\n3. View by Category\n4. Show Summary\n5. Exit");
            switch (scanner.nextInt()) {
                case 1:
                    System.out.println("Adding Expense...");
                    scanner.nextLine();
                    while (true) {
                        System.out.println("Please enter expense name: ");
                        name = scanner.nextLine();

                        if (name.trim().isEmpty()) {
                            System.out.println("Expense name can not be empty. Please try again.");
                        } else {
                            System.out.println("Valid name accepted!");
                            break;
                        }
                    }

                    while (true) {
                        System.out.println("Please enter the amount: ");
                        try {
                            amount = scanner.nextDouble();
                            System.out.println("Valid amount accepted!");
                            scanner.nextLine();
                            break;
                        } catch (InputMismatchException e) {
                            System.out.println("Invalid number. Please try again.");
                            scanner.nextLine();
                        }

                    }
                    while (true) {
                        System.out.println("Please enter the category \"Food\", \"Travel\", or \"Personal\": ");
                        category = scanner.nextLine();
                        if (isValidCategory(category)) {
                            System.out.println("Valid category accepted!");
                            break;
                        } else {
                            System.out.println("Please enter a category of \"Food\", \"Travel\", or \"Personal\".");
                            scanner.nextLine();
                        }
                    }
                    Expense expense1 = new Expense(name, amount, category);
                    expenseM.addExpense(expense1);
                    System.out.println("Expense Added!");
                    break;

                case 2:
                    scanner.nextLine();
                    expenseM.listExpenses();
            }
        }
        
    }

    public static boolean isValidCategory(String category) {
        return ALLOWED_CATEGORIES.contains(category);
    }

    public ExpenseManager() {
        this.expenseList = new ArrayList<>();
    }

    public void addExpense(Expense e) {
        expenseList.add(e);
    }

    public void listExpenses() {
        if (expenseList.isEmpty()) {
            System.out.println("No expense added yet, please add them in the first menu!");
        }
        for (Expense e : expenseList) {
            System.out.println(e);
        }
    }
}
