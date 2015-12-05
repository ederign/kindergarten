package me.ederign.intro;

import org.javamoney.moneta.Money;

import javax.money.*;
import javax.money.format.MonetaryAmountFormat;
import javax.money.format.MonetaryFormats;
import java.util.Locale;

import static me.ederign.intro.TipValueConverter.convert;

public class TipCalculator {


    private final MonetaryAmount billAmount;
    private final Number tipRate;

    private final CurrencyUnit usd = MonetaryCurrencies.getCurrency( Locale.US );
    private final MonetaryOperator roundingOperator = MonetaryRoundings.getRounding( usd );
    private final MonetaryAmountFormat fmt =
            MonetaryFormats.getAmountFormat( Locale.US );

    public TipCalculator( Number billAmount, Number tipRate ) {
        this.billAmount = Money.of( billAmount, usd );
        this.tipRate = tipRate;
    }

    public TipCalculator( Number billAmount, String tipRate ) {
        this.billAmount = Money.of( billAmount, usd );
        this.tipRate = convert(tipRate);
    }

    public String tipTotal() {
        final MonetaryAmount tipWithRounding = calculateTip();
        return "Tip: " + fmt.format( tipWithRounding );
    }

    private MonetaryAmount calculateTip() {
        final MonetaryAmount tip = billAmount.multiply( tipRate ).divide( 100 );
        return tip.with( roundingOperator );
    }

    public String total() {
        return "Total: " + fmt.format( calculateTotal() );
    }

    private MonetaryAmount calculateTotal() {
        return billAmount.add( calculateTip() );
    }

    public static void main( String[] args ) {
    }
}
