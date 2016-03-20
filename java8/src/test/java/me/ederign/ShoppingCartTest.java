package me.ederign;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

public class ShoppingCartTest {

    ShoppingCart cart;

    @Before
    public void setup() {
        Item item1 = new Item( 10 );
        Item item2 = new Item( 20 );
        cart = new ShoppingCart( Arrays.asList( item1, item2 ) );
    }

    @Test
    public void total() {
        cart.pay( PaymentTypes::credit );
        cart.pay( PaymentTypes::debit );
        cart.pay( PaymentTypes::money );
    }
}