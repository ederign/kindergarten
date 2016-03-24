package me.ederign.chain;

public class PaymentProcessorB extends PaymentProcessor {

    @Override
    protected void handle( Payment p ) {
        System.out.println( "PaymentProcessorB for payment: " + p.getAmount() );
    }
}
