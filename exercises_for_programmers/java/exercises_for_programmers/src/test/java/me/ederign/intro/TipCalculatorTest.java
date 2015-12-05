package me.ederign.intro;

import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class TipCalculatorTest {

    private TipCalculator tipCalculator;


    @Test
    public void simpleBillAmountTest() {
        tipCalculator = new TipCalculator( 10, 15 );

        assertEquals("Tip: USD1.50", tipCalculator.tipTotal());
        assertEquals("Total: USD11.50", tipCalculator.total());
    }

    @Test
    public void simpleBillPercentageAmountTest() {
        tipCalculator = new TipCalculator( 10, "15%" );

        assertEquals("Tip: USD1.50", tipCalculator.tipTotal());
        assertEquals("Total: USD11.50", tipCalculator.total());
    }

    @Test
    public void decimalBillAmountTest() {
        tipCalculator = new TipCalculator( 11.25, 15 );
        assertEquals("Tip: USD1.69", tipCalculator.tipTotal());
        assertEquals("Total: USD12.94", tipCalculator.total());
    }


}
