package me.ederign.decorator;

public class NationalDelivery extends ItemExtras {

    public NationalDelivery( Item item ) {
        super( item );
    }

    @Override
    public int getPrice() {
        return 2;
    }
}
