package me.ederign.chain;

public class PaymentProcessorA extends PaymentProcessor {

    @Override
    protected void handle( Payment p ) {
        System.out.println( "PaymentProcessorA for payment: " + p.getAmount() );
    }
}
