package me.ederign;

public class PaymentTypes {

    public static void money( int amount ) {
        System.out.println( "Pay with Money: " + amount );
    }

    public static void debit( int amount ) {
        System.out.println( "Pay with Debit: " + amount );
    }

    public static void credit( int amount ) {
        System.out.println( "Pay with Credit: " + amount );
    }

}
