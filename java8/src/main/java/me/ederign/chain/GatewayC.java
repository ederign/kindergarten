package me.ederign.chain;

public class GatewayC extends Gateway {

    @Override
    protected boolean canHandle( Payment p ) {
        //logic
        return false;
    }

    @Override
    protected String handle( Payment p ) {
        return "Gateway C: " + p.getAmount();
    }
}
