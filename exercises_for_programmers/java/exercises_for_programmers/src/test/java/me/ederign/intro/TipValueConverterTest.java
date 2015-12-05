package me.ederign.intro;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TipValueConverterTest {

    @Test
    public void tipConverterTest() {
        assertEquals( 15, TipValueConverter.convert( "15%" ) );
    }
}