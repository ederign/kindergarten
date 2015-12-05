package me.ederign.intro;

public class TipValueConverter {

    public static Number convert( String tipPercentage ) {
        return new Integer(tipPercentage.replace( "%", "" ));
    }
}
