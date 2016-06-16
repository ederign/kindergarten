package me.ederign.chain.fp;

import me.ederign.chain.Payment;

import java.util.function.Function;

public class FunctionalMain {

    public static void main( String[] args ) {

        Function<Payment, Payment> processorA =
                p -> {
                    System.out.println( "Processor A " + p.getAmount() );
                    return p;
                };

        Function<Payment, Payment> processorB =
                p -> {
                    System.out.println( "Processor B " + p.getAmount() );
                    return p;
                };

        Function<Payment, Payment> processorC =
                p -> {
                    System.out.println( "Processor C " + p.getAmount() );
                    return p;
                };

        Function<Payment, Payment> chain =
                processorA.andThen( processorB ).andThen( processorC );

        chain.apply( new Payment( 10 ) );


    }
}
