'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var FacebookButtonWidget = require('../widgets/facebook-button-widget');


var HairboutiquePanel = React.createClass({

    render: function() {

        return (
            <section id="boutique">
                <div className="container">
                    <h2><span>Essenza</span> <span>Boutique</span></h2>
                    <Row>
                        <Col xs={12} sm={5}>
                            <span id="boutiqueImage">Featured boutique image</span>
                        </Col>
                        <Col xs={12} sm={4}>
                            <p className="aquaBox">Encuentra ese atuendo ideal para tu próximo evento o reunión, contamos con una amplia variedad de opciones en vestidos y accesorios.</p>
                            <FacebookButtonWidget />
                        </Col>
                        <Col xs={12} sm={3}>
                            <Carousel id="boutiqueCarousel" interval={3000}>
                                <CarouselItem id="boutique-sample1">
                                    <p>Vestido rosa</p>
                                </CarouselItem>
                                <CarouselItem id="boutique-sample2">
                                    <p>Vestido negro</p>
                                </CarouselItem>
                                <CarouselItem id="boutique-sample3">
                                    <p>Vestido rojo</p>
                                </CarouselItem>
                                <CarouselItem id="boutique-sample4">
                                    <p>Vestido con patrón</p>
                                </CarouselItem>
                                <CarouselItem id="boutique-sample5">
                                    <p>Vestido en color plata</p>
                                </CarouselItem>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HairboutiquePanel;
