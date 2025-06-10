package com.FleetManager;

public class Truck extends Vehicle{
    private int payloadCapacity;
    public Truck(String make, String model, int year, int payloadCapacity){
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }
}
