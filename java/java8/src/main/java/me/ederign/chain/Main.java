package me.ederign.chain;

public class Main {

    public static void main( String[] args ) {

        PaymentProcessor paymentProcessor = getPaymentProcessor();

        paymentProcessor.process( new Payment( 10 ) );

    }

    private static PaymentProcessor getPaymentProcessor() {
        PaymentProcessor g = new PaymentProcessorA();

        g.setNext( new PaymentProcessorB() );
        g.setNext( new PaymentProcessorC() );

        return g;
    }
}
