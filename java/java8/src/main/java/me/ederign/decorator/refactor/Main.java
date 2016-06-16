package me.ederign.decorator.refactor;

import java.util.function.Function;

public class Main {

    public static void main( String[] args ) {

        Item book = new Item( 10 );
        book.getPrice(); //10

        Function<Integer, Integer> giftPacking = value -> value + 15;
        giftPacking.apply( book.getPrice() ); //25

        Function<Integer, Integer> intTaxes = value -> value + 50;
        intTaxes.apply( book.getPrice() ); //60

        giftPacking.andThen( intTaxes ).apply( book.getPrice() ); //75

    }
}
