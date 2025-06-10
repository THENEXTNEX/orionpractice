package com.PackageTracking;
import java.util.List;

public class Courier {
    private String name;
    private List<Package> packages;

    public Courier(String name, List<Package> packages){
        this.name = name;
        this.packages = packages;
    }

    public String getName(){return name;}
    
    public void setName(String name){this.name = name;}

    public List<Package> getPackage(){return packages;}

    public void addPackage(Package p){
        packages.add(p);
    }

    public void listPackages(){
        System.out.println(packages);
    }
}
