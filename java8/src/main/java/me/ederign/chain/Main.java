package me.ederign.chain;

public class Main {

    public static void main( String[] args ) {

        Gateway g = new GatewayA();

        g.setNext( new GatewayB() );
        g.setNext( new GatewayC() );

        g.process( new Payment( 10 ) ); //Gateway B: 10

    }
}
