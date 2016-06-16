package me.ederign.currying;

import java.util.function.DoubleUnaryOperator;

public class Main2 {


    static DoubleUnaryOperator curriedConverter( double f, double b ) {
        return x -> x * f + b;
    }

    public static void main( String[] args ) {

        DoubleUnaryOperator convertBRLtoUSD = curriedConverter( 0.27, 0 );

        double usd = convertBRLtoUSD.applyAsDouble( 100 );//27 USD

        DoubleUnaryOperator convertUSDtoEUR = curriedConverter( 0.89, 0 );
        convertUSDtoEUR.applyAsDouble( usd ); //24.03 EUR

        convertBRLtoUSD.andThen( convertUSDtoEUR ).applyAsDouble( 100 ); //24.03 EUR
    }
}
