package me.ederign.execute;

import java.util.function.Consumer;

public class IOService {


    public void startBatch( Object fileSystem ) {
        System.out.println( "startBatch" );

    }

    public void endBatch() {
        System.out.println( "endBatch" );
    }

    public void write( Path path, Object serverTemplate ) {
        System.out.println( "write" );
    }

    public void delete( Path path, Object serverTemplate ) {
        System.out.println("delete");
    }

    public void processInBatch( Path path, Consumer<Path> batchMode ) {
        try {
            startBatch( path.getFileSystem() );
            batchMode.accept( path );
        } finally {
            endBatch();
        }
    }
}
