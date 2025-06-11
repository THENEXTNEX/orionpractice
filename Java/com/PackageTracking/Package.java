package com.PackageTracking;

public class Package {
    private String trackingNumber;
    private String destination;
    private String status;

    public Package(String trackingNumber, String destination, String status){
        this.trackingNumber = trackingNumber;
        this.destination = destination;
        this.status = status;
    }

    public String getTrackingNumber(){return trackingNumber;}

    public void setTrackingNumber(String trackingNumber){this.trackingNumber = trackingNumber;}

    public String getDestination(){return destination;}

    public void setDestination(String destination){this.destination = destination;}

    public String getStatus(){return status;}

    public void setStatus(String status){this.status = status;}

    @Override
    public String toString(){
        return String.format("Package details: Tracking Number: %s, Destination: %s, Status: %s", trackingNumber, destination, status);
    }
}
