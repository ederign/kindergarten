package me.ederign.currying;

import java.util.function.DoubleUnaryOperator;

public class Main1 {


    static DoubleUnaryOperator curriedConverter( double f, double b ) {
        return x -> x * f + b;
    }

    public static void main( String[] args ) {


        DoubleUnaryOperator convertCtoF = curriedConverter( 9.0 / 5, 32 );

        convertCtoF.applyAsDouble( 35 ); //95 F
        convertCtoF.applyAsDouble( 15 ); //59 F

    }
}
