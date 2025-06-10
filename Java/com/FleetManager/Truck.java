package com.FleetManager;

public class Truck extends Vehicle{
    private int payloadCapacity;
    public Truck(String make, String model, int year, int payloadCapacity){
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }

    public int getPayloadCapacity(){return payloadCapacity;}

    public void setPayloadCapacity(int payloadCapacity){this.payloadCapacity = payloadCapacity;}

    @Override
    public String toString() {
        return super.toString() + String.format(", Payload: %d kg", payloadCapacity);
    }

}
