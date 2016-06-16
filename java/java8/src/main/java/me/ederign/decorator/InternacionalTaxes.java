package me.ederign.decorator;

public class InternacionalTaxes extends ItemExtras {

    public InternacionalTaxes( Item item ) {
        super( item );
    }

    @Override
    public int getPrice() {
        return 50 + super.getPrice();
    }
}