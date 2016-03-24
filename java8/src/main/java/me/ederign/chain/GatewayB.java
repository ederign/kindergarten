package me.ederign.chain;

public class GatewayB extends Gateway {

    @Override
    protected boolean canHandle( Payment p ) {
        //logic
        return true;
    }

    @Override
    protected String handle( Payment p ) {
        return "Gateway B: " + p.getAmount();
    }
}
