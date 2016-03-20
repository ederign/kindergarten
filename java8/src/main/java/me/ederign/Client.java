package me.ederign;

public class Client {

    private String name;
    private String email;
    private Company company;

    public Client( String name, String email, Company company ) {
        this.name = name;
        this.email = email;
        this.company = company;
    }

    public Client( String name ) {
        this.name = name;
    }

    public Client( String name, String email ) {
        this.name = name;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public Company getCompany() {
        return company;
    }
}
