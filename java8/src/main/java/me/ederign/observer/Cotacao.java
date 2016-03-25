package me.ederign.observer;

public class Cotacao {

    private String moeda;
    private Integer valor;

    public Cotacao( String moeda, Integer valor ) {
        this.valor = valor;
        this.moeda = moeda;
    }

    @Override
    public String toString() {
        return "Cotacao{" +
                "moeda='" + moeda + '\'' +
                ", valor=" + valor +
                '}';
    }
}
