package me.ederign.intro;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.Slider;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class TipGui extends Application {

    private TextField billAmountValue = new TextField();
    private Slider tipSlider = new Slider();
    private Text totalReport = new Text();

    private TipCalculator tipCalculator;

    @Override
    public void start( Stage primaryStage ) {
        primaryStage.setTitle( "Tip Calculator" );

        GridPane grid = createGrid();

        createScene( primaryStage, grid );
    }

    private void createScene( Stage primaryStage, GridPane grid ) {
        Scene scene = new Scene( grid, 300, 275 );
        primaryStage.setScene( scene );
        primaryStage.show();
    }

    private HBox createCalculateButton() {
        final Button calculate = new Button( "Calculate" );
        calculate.setOnAction( new EventHandler<ActionEvent>() {

            @Override
            public void handle( ActionEvent e ) {
                tipCalculator = new TipCalculator( new Double( billAmountValue.getText() ), tipSlider.getValue() );

                totalReport.setText( tipCalculator.tipTotal() + "\n" + tipCalculator.total() );
            }
        } );

        HBox hbBtn = new HBox( 10 );
        hbBtn.setAlignment( Pos.BOTTOM_RIGHT );
        hbBtn.getChildren().add( calculate );
        return hbBtn;
    }

    private Text createSceneTitle() {
        Text scenetitle = new Text( "Tip Calculator" );
        scenetitle.setFont( Font.font( "Tahoma", FontWeight.NORMAL, 20 ) );
        return scenetitle;
    }

    private GridPane createGrid() {
        GridPane grid = new GridPane();
        grid.setAlignment( Pos.CENTER );
        grid.setHgap( 10 );
        grid.setVgap( 10 );
        grid.setPadding( new Insets( 25, 25, 25, 25 ) );

        grid.add( createSceneTitle(), 0, 0, 2, 1 );

        grid.add( new Label( "Bill Amount:" ), 0, 1 );

        grid.add( billAmountValue, 1, 1 );

        grid.add( new Label( "Tip:" ), 0, 2 );

        grid.add( createTipSlider(), 1, 2 );

        grid.add( createCalculateButton(), 1, 4 );

        grid.add( totalReport, 1, 6 );

        return grid;
    }

    private Slider createTipSlider() {
        tipSlider.setMin( 0 );
        tipSlider.setMax( 100 );
        tipSlider.setValue( 10 );
        tipSlider.setShowTickLabels( true );
        tipSlider.setShowTickMarks( true );
        tipSlider.setMajorTickUnit( 50 );
        tipSlider.setMinorTickCount( 5 );
        tipSlider.setBlockIncrement( 10 );
        return tipSlider;
    }
}