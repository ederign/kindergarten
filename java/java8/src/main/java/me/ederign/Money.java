package me.ederign;

public class Money implements Payment {
    @Override
    public void pay( int amount ) {
        System.out.println( "make money payment logic" );
    }
}
