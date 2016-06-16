package me.ederign.decorator.refactor;

public class Main2 {

    public static void main( String[] args ) {
        Item book = new Item( 10, Packing::giftPacking, Taxes::internacional );

        System.out.println( book.getPrice() ); //75
    }

}
