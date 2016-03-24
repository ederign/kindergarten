package me.ederign.chain;

public class GatewayA extends Gateway {

    @Override
    protected boolean canHandle( Payment p ) {
        //logic
        return false;
    }

    @Override
    protected String handle( Payment p ) {
        return "Gateway a: " + p.getAmount();
    }
}
