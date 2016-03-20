package me.ederign.decorator;

public class RegularPacking extends ItemExtras {

    public RegularPacking( Item item ) {
        super( item );
    }

    @Override
    public int getPrice() {
        return 5;
    }
}
