package me.ederign.template;

import me.ederign.template.Operation;

//package me.ederign.template;
//
//import java.util.function.Consumer;
//
//public class Banking {
//
//    public void processOperation( Operation op ) {
//        process( op );
//    }
//
//    public void processOperation( Operation op,
//                                  Consumer<Operation> preProcessing,
//                                  Consumer<Operation> postProcessing ) {
//        preProcessing.accept( op );
//        process( op );
//        postProcessing.accept( op );
//    }
//
//    private void process( Operation op ) {
//        //logic
//        op.process( op );
//    }
//}
public abstract class Banking {

    public void processOperation( Operation op ) {
        preProcessing( op );
        process( op );
        postProcessing( op );
    }

    protected abstract void postProcessing( Operation op );

    protected abstract void preProcessing( Operation op );

    private void process( Operation op ) {
        //logic
        op.process( op );
    }
}

