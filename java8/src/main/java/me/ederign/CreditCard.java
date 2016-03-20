package me.ederign;

public class CreditCard implements Payment {
    @Override
    public void pay( int amount ) {
        System.out.println( "make credit payment logic" );
    }
}
