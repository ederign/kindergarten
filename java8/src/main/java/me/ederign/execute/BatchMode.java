package me.ederign.execute;


@FunctionalInterface
public interface BatchMode {

    void execute( Path path );
}
