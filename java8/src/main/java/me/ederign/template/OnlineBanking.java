package me.ederign.template;

public class OnlineBanking extends Banking {

    @Override
    protected void preProcessing( Operation op ) {
        //pre processing online logic
    }

    @Override
    protected void postProcessing( Operation op ) {
        //post processing online logic
    }
}
