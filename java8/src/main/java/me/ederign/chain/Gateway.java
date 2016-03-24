package me.ederign.chain;


public abstract class Gateway {

    private Gateway next;

    public void setNext( Gateway processadoras ) {
        if ( next == null ) {
            next = processadoras;
        } else {
            next.setNext( processadoras );
        }
    }

    protected abstract boolean canHandle( Payment p );

    public String process( Payment p ) {
        if ( canHandle( p ) ) {
            return handle( p );
        } else {
            if ( next == null ) {
                throw new NoGatewayAvailable();
            }
            return next.process( p );
        }
    }

    protected abstract String handle( Payment p );

    private class NoGatewayAvailable extends RuntimeException {
    }
}
