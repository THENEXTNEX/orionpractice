package com.FleetManager;

import java.util.ArrayList;
import java.util.List;

public class FleetManager {
    private List<Vehicle> vehicles;

    public static void main(String[] args) {
        FleetManager FM = new FleetManager();

        Car car1 = new Car("Honda", "Accord", 2008, 4);
        Car car2 = new Car("Toyota", "Alteza", 2000, 4);
        Truck truck1 = new Truck("Ford", "Ranger", 2019, 2000);
        Truck truck2 = new Truck("Nissan", "Navara", 2025, 3000);

        FM.addVehicle(car1);
        FM.addVehicle(car2);
        FM.addVehicle(truck1);
        FM.addVehicle(truck2);

        FM.listVehicles();
        System.out.println("\nSearch Results for 'Toyota':");
        for (Vehicle v : FM.searchByMake("Toyota")) {
            System.out.println(v);
        }
    }

    public FleetManager() {
        this.vehicles = new ArrayList<>();
    }

    public void addVehicle(Vehicle v) {
        vehicles.add(v);
    }

    public void listVehicles() {
        for (Vehicle v : vehicles) {
            System.out.println(v);
        }
    }

    public List<Vehicle> searchByMake(String make) {
        List<Vehicle> results = new ArrayList<>();
        for (Vehicle v : vehicles) {
            if (v.getMake().equalsIgnoreCase(make)) {
                results.add(v);
            }
        }
        return results;
    }
}
