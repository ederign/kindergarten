package me.ederign.decorator;

public abstract class ItemExtras implements Item {

    private Item item;

    public ItemExtras( Item IItem ) {
        this.item = IItem;
    }

    @Override
    public int getPrice() {
        return item.getPrice();
    }
}
