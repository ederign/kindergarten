package me.ederign.execute;

import java.util.List;

public class Main {
    IOService ioService = new IOService();
    Path path = new Path();


    public void store( final ServerTemplate serverTemplate,
                       final List<ServerTemplateKeys> keys ) {

        ioService.processInBatch( path, ( path ) -> {
            ioService.write( path, serverTemplate );
            ioService.write( path, keys );
        } );
    }

    public void delete( final ServerTemplate serverTemplate,
                       final List<ServerTemplateKeys> keys ) {

        ioService.processInBatch( path, ( path ) -> {
            ioService.delete( path, serverTemplate );
            ioService.delete( path, keys );
        } );
    }
}
