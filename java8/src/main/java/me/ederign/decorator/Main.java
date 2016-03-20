package me.ederign.decorator;

public class Main {

    public static void main( String[] args ) {
        Item book = new Book( 10 );
        System.out.println( book.getPrice() ); //10

        Item international = new InternationalDelivery( new Book( 10 ) );
        System.out.println( international.getPrice() ); //15

        Item internationalGift = new GiftPacking( new InternationalDelivery( new Book( 10 ) ) );
        System.out.println( internationalGift.getPrice() ); //30

        Item internationalGiftWithTaxes = new InternacionalTaxes(
                new GiftPacking( new InternationalDelivery( new Book( 10 ) ) ) );
        System.out.println( internationalGiftWithTaxes.getPrice() ); //80
    }
}
