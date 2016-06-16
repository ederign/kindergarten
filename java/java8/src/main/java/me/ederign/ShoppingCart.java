package me.ederign;

import java.util.List;
import java.util.function.Consumer;

public class ShoppingCart {

    private List<Item> items;

    public ShoppingCart( List<Item> items ) {
        this.items = items;
    }

    public void pay( Consumer<Integer> method ) {
        int total = cartTotal();
        method.accept( total );
    }

    private int cartTotal() {
        int total = 0;
        for ( Item item : items ) {
            total += item.getValue();
        }
        return total;
    }

}