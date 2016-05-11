'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var PinterestButtonWidget = require('../widgets/pinterest-button-widget');


var HairbridePanel = React.createClass({

    render: function() {

        return (
            <section id="brides">
                <div className="container">
                    <Carousel id="brideCarousel" interval={30000}>
                        <CarouselItem id="bride-sample1">
                            <p>Modelo de vestido de novia</p>
                        </CarouselItem>
                        <CarouselItem id="bride-sample2">
                            <p>Modelo de vestido de novia</p>
                        </CarouselItem>
                        <CarouselItem id="bride-sample3">
                            <p>Modelo de vestido de novia</p>
                        </CarouselItem>
                        <CarouselItem id="bride-sample4">
                            <p>Modelo de vestido de novia</p>
                        </CarouselItem>
                    </Carousel>
                    <div id="brideFixedBlock">
                        <h2>Novias</h2>
                        <p className="darkPinkBox">Sabemos que el día de tu boda  es uno de los más importantes de tu vida, queremos ser parte de este momento tan especial,  con un peinado y maquillaje ideal para que luzcas radiante en éste día.</p>
                        <PinterestButtonWidget />
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = HairbridePanel;
