package me.ederign.decorator;

public class InternationalDelivery extends ItemExtras {

    public InternationalDelivery( Item item ) {
        super( item );
    }

    @Override
    public int getPrice() {
        return 5  + super.getPrice();
    }
}
