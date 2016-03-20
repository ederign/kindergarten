package me.ederign.decorator;

public class GiftPacking extends ItemExtras {

    public GiftPacking( Item item ) {
        super( item );
    }

    @Override
    public int getPrice() {
        return 15 + super.getPrice();
    }
}
