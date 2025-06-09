package com.Hospital;

public class Doctor {
    private String name;

    public Doctor(String name) {
        this.name = name;
    }

    public void checkPatient(Patient p) {
        System.out.println("Dr. " + name + " is checking patient " + p.getName() + " (" + p.getAge() + " years old).");
    }

    public static void main(String[] args) {
        Inpatient ip = new Inpatient("Caleb", 24);
        Doctor dr = new Doctor("Nguyen");

        dr.checkPatient(ip);  // Demonstrates polymorphism and class collaboration
    }
}
