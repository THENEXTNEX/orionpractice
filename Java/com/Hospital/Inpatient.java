package com.Hospital; // or com.hospital — match your folder

public class Inpatient extends Patient {
    public Inpatient(String name, int age) {
        super(name, age);
    }

    public static void main(String[] args) {
        Inpatient ip = new Inpatient("Jeff", 30);
        System.out.println(ip.getAge());
        System.out.println(ip.getName());
    }
}