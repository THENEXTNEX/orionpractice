package com.FleetManager;

public class Truck extends Vehicle implements Serviceable{
    private int payloadCapacity;
    public Truck(String make, String model, int year, int payloadCapacity){
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }

    public int getPayloadCapacity(){return payloadCapacity;}

    public void setPayloadCapacity(int payloadCapacity){this.payloadCapacity = payloadCapacity;}

    @Override
    public boolean isServiceDue(){
        return getPayloadCapacity() > 2500;
    }
    @Override
    public String toString() {
        return super.toString() + String.format(", Payload: %d kg", payloadCapacity);
    }

}
