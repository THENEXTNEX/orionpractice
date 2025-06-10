package com.FleetManager;

public class Car extends Vehicle implements Serviceable{
    private int numberOfDoors;
    public Car(String make, String model, int year, int numberOfDoors){
        super(make,model,year);
        this.numberOfDoors = numberOfDoors;
    }
    public int getNumberOfDoors(){return numberOfDoors;}

    public void setNumberOfDoors(int numberOfDoors){this.numberOfDoors = numberOfDoors;}

    @Override
    public boolean isServiceDue(){
        return getYear() < 2015;
    }

    @Override
    public String toString() {
        return super.toString() + String.format(", Doors: %d", numberOfDoors);
    }

}
