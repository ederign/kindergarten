package me.ederign.chain.fp;

import me.ederign.chain.Payment;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public class FunctionalMain {

    public static void main( String[] args ) {

        Function<Payment, String> gatewayA =
                p -> "Gateway A " + p.getAmount();
        Function<Payment, String> gatewayB =
                p -> "Gateway b " + p.getAmount();
        Function<Payment, String> gatewayC =
                p -> "Gateway c " + p.getAmount();



    }
}
