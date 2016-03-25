package me.ederign.observer.fp;

import me.ederign.observer.Cotacao;
import me.ederign.observer.ServidorCotacao;

public class Main {

    public static void main( String[] args ) {


        ServidorCotacao servidorCotacao = new ServidorCotacao();


        servidorCotacao.registerObserver(
                cotacao -> System.out.println( "Banco:  " + cotacao ) );
        servidorCotacao.registerObserver(
                cotacao -> {
                    //some cool stuff here
                    System.out.println( "Investidor:  " + cotacao )
                } );

        servidorCotacao.novaCotacao( new Cotacao( "BRL", 1 ) );

    }
}
