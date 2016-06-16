package me.ederign.chain;

public class PaymentProcessorC extends PaymentProcessor {

    @Override
    protected void handle( Payment p ) {
        System.out.println( "PaymentProcessorC for payment: " + p.getAmount() );
    }
}
