package me.ederign.decorator.refactor;

import java.util.function.Function;

public class Main1 {

    public static void main( String[] args ) {
        Item book = new Item( 10 );
        Function<Integer, Integer> giftPacking = value -> value + 15;
        Function<Integer, Integer> intTaxes = value -> value + 50;

        book.setItemExtras( giftPacking, intTaxes );

        book.getPrice(); //75

    }
}
