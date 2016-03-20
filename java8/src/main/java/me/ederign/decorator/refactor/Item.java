package me.ederign.decorator.refactor;

import java.util.function.Function;
import java.util.stream.Stream;

public class Item {
    private int price;
    private Function<Integer, Integer>[] itemExtras = new Function[]{};

    public Item( int price ) {
        this.price = price;
    }

    public Item( int price, Function<Integer, Integer>... itemExtras ) {
        this.price = price;
        this.itemExtras = itemExtras;
    }

    public int getPrice() {
        Function<Integer, Integer> extras =
                Stream.of( itemExtras )
                .reduce( Function.identity(), Function::andThen );
        return extras.apply( price );
    }

    public void setItemExtras( Function<Integer, Integer>... itemExtras ) {
        this.itemExtras = itemExtras;
    }
}
