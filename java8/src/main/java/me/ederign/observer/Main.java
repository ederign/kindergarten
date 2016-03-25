package me.ederign.observer;

public class Main {

    public static void main( String[] args ) {

        Banco banco = new Banco();
        Investidor investidor = new Investidor();

        ServidorCotacao servidorCotacao = new ServidorCotacao();


        servidorCotacao.registerObserver( banco );
        servidorCotacao.registerObserver( investidor );

        servidorCotacao.novaCotacao( new Cotacao( "USD", 4 ) );

    }
}
