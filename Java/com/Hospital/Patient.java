package com.Hospital;
public class Patient {

    private String name;
    private int age;

    public static void main(String[] args) {
        Patient p = new Patient("Caleb", 24);
        System.out.println(p.name);
        System.out.println(p.age);
    }

    public Patient(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }
}
