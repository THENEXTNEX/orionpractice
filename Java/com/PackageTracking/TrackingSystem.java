package com.PackageTracking;
import java.util.ArrayList;
import java.util.List;

public class TrackingSystem {
    List<Courier> couriers;
    public static void main(String[] args){
        TrackingSystem system = new TrackingSystem();
        Package package1 = new Package("hello123", "Auckland", "In Transit");
        Package package2 = new Package("goodbye123", "Auckland", "Delivered");
        Package package3 = new Package("jefferson123", "Auckland", "Delayed");
        Package package4 = new Package("caleb123", "Auckland", "In Transit");
        Package package5 = new Package("jenny123", "Auckland", "Delivered");
        Package package6 = new Package("daniel123", "Auckland", "Delayed");
        
        List<Package> courierPackages = new ArrayList<>();
        courierPackages.add(package1);
        courierPackages.add(package2);
        courierPackages.add(package3);
        Courier courier1 = new Courier("Justin", courierPackages);

        List<Package> newCourPackages = new ArrayList<>();
        newCourPackages.add(package4);
        newCourPackages.add(package5);
        newCourPackages.add(package6);
        Courier courier2 = new Courier("Ryan", newCourPackages);

        system.addCourier(courier1);
        system.addCourier(courier2);

        system.listCouriers();

        system.updateToDelivered();

        System.out.println("Searching for tracking number hello123 :");
        Package found = system.findPackageByTrackingNumber("hello123");
        if(found != null){
            System.out.println(found);
        }else{
            System.out.println("Package not found");
        }
    }

    public TrackingSystem(){
        this.couriers = new ArrayList<>();
    }

    public void addCourier(Courier courier){
        couriers.add(courier);
    }

    public void listCouriers(){
        for(Courier courier: couriers){
            System.out.println("Courier: " + courier.getName());
            courier.listPackages();
            System.out.println();
            
        }
    }

    public Package findPackageByTrackingNumber(String trackingNumber){
        for(Courier courier: couriers){
            for(Package p: courier.getPackages()){
                if(p.getTrackingNumber().equalsIgnoreCase(trackingNumber)){
                    return p;
                }
            }
        }
        return null;
    }

    public void updateToDelivered(){
        for(Courier courier: couriers){
            for(Package p: courier.getPackages()){
                if(p.getStatus().equalsIgnoreCase("In Transit")){
                    System.out.println("Parcel "+ p + " has been updated to delivered.");
                    p.setStatus("Delivered");
                }
            }
        }
    }
}
