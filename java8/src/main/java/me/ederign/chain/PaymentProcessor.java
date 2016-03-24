package me.ederign.chain;


public abstract class PaymentProcessor {

    private PaymentProcessor next;

    public void setNext( PaymentProcessor processors ) {
        if ( next == null ) {
            next = processors;
        } else {
            next.setNext( processors );
        }
    }

    public Payment process( Payment p ) {
        handle( p );
        if ( next != null ) {
            return next.process( p );
        } else {
            return p;
        }
    }

    protected abstract void handle( Payment p );

}
