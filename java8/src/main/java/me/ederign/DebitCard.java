package me.ederign;

public class DebitCard implements Payment {
    @Override
    public void pay( int amount ) {
        System.out.println( "make debit payment logic" );
    }
}
