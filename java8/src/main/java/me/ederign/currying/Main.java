package me.ederign.currying;

import java.util.function.DoubleUnaryOperator;

public class Main {


    static DoubleUnaryOperator curriedConverter( double f, double b ) {
        return x -> x * f + b;
    }

    public static void main( String[] args ) {

        DoubleUnaryOperator convertCtoF = curriedConverter( 9.0 / 5, 32 );

        convertCtoF.applyAsDouble( 35 ); //95 F

        DoubleUnaryOperator convertKmToMi = curriedConverter( 0.6214, 0 );

        System.out.println(convertKmToMi.applyAsDouble( 804.672 )); //500 milhas
    }
}
