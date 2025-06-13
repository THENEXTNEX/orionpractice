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
        String checkCategory = "";

        while (true) {
            System.out.println("Welcome to the expense tracker! Please select from the following!");
            System.out.println("1. Add Expense\n2. View All Expenses\n3. View by Category\n4. Show Summary\n5. Exit");
            int choice = -1;

            try {
                choice = scanner.nextInt();
                scanner.nextLine();
            } catch (InputMismatchException e) {
                System.out.println("Invalid input. Please enter a number between 1 and 5: ");
                scanner.nextLine();
            }

            switch (choice) {
                case 1:
                    System.out.println("Adding Expense...");
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
                            System.out.println("Please enter a valid category");
                            System.out.println("");
                        }
                    }
                    Expense expense1 = new Expense(name, amount, category);
                    expenseM.addExpense(expense1);
                    System.out.println("Expense Added!");
                    break;

                case 2:
                    System.out.println("Listing all expenses...");
                    System.out.println("");
                    expenseM.listExpenses();
                    System.out.println("");
                    break;
                case 3:
                    while (true) {
                        System.out.println("Select a category you want to view by: ");
                        System.out.println("Food --- Travel --- Personal or type \"Exit\" to return to the main menu!");
                        checkCategory = scanner.nextLine();
                        if (isValidCategory(checkCategory)) {
                            System.out.println("You have selected the category: " + checkCategory);
                            System.out.println("Displaying " + checkCategory + " Expenses...");
                            System.out.println("");
                            expenseM.listCategory(checkCategory);
                            System.out.println("");
                        } else if (checkCategory.equalsIgnoreCase("Exit")) {
                            break;
                        } else {
                            System.out.println("Please enter a valid category...");
                            System.out.println("");

                        }
                    }
                    break;
                case 4:
                    expenseM.summaryCheck();
                    break;

                case 5:
                    System.out.println("Thank you for using this expense manager!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Please enter a valid number between 1 - 5");
                    System.out.println("");
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

    public void listCategory(String category) {
        int count = 0;
        for (Expense e : expenseList) {
            if (e.getCategory().equalsIgnoreCase(category)) {
                count++;
                System.out.println(e);
            }
        }
        if (count == 0) {
            System.out.println("No expenses under the category: " + category);
        }
    }

    public void summaryCheck() {

        String food = "Food";
        String travel = "Travel";
        String personal = "Personal";
        double foodTotal = 0;
        double travelTotal = 0;
        double personalTotal = 0;
        double total = 0;
        double average = 0;
        int numExpenses = 0;

        if (expenseList.isEmpty()) {
            System.out.println("No expense added yet, please add them in the first menu!");
        } else {
            for (Expense e : expenseList) {
                if (e.getCategory().equalsIgnoreCase(food)) {
                    foodTotal += e.getAmount();
                    numExpenses++;
                } else if (e.getCategory().equals(travel)) {
                    travelTotal += e.getAmount();
                    numExpenses++;
                } else if (e.getCategory().equals(personal)) {
                    personalTotal += e.getAmount();
                    numExpenses++;
                }
            }
            total = foodTotal + travelTotal + personalTotal;
            average = total / (double) numExpenses;
            System.out.println("");
            System.out.println("Total Number of Expenses: " + numExpenses + "\n");
            System.out.println("Food Cost: " + foodTotal);
            System.out.println("Travel Total: " + travelTotal);
            System.out.println("Personal Total: " + personalTotal);
            System.out.println("Total Cost: " + total);
            System.out.println("Average Expense Cost: " + average);
            System.out.println("");
        }

    }
}
