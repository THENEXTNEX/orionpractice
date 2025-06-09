package com.Hospital;
public class patient {

    private String name;
    private int age;

    public static void main(String[] args) {
        patient p = new patient("Caleb", 24);
        System.out.println(p.name);
        System.out.println(p.age);
    }

    public patient(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName() {
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(){
        this.age = age;
    }
}
