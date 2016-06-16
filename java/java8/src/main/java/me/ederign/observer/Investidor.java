package me.ederign.observer;

public class Investidor implements Observer {

    @Override
    public void notify( Cotacao cotacao ) {
        //some cool stuff here
        System.out.println( "Investidor: " + cotacao );
    }

}
