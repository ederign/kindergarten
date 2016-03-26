package me.ederign.currying;

public class Main0 {


    static double converter( double x, double f, double b ) {
        return x * f + b;
    }

    public static void main( String[] args ) {

        Double celsius = 15.0;
        Double fahrenheit = converter( celsius, 9.0 / 5, 32 ); //59 F
    }
}
