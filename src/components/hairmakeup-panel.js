'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var PinterestButtonWidget = require('../widgets/pinterest-button-widget');


var HairmakeupPanel = React.createClass({

    render: function() {

        return (
            <section id="makeup">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Maquillaje</h2>
                            <div className="pinkBox">
                                <p>Realzamos tus facciones aprovechando las
    características de tu rostro para que luzcas mas bella.</p>
                                <span id="generalMakeupImage">Productos de alta calidad para teñir tu pelo</span>
                            </div>
                            <Row>
                                <Col xs={12} sm={7}>
                                    <Carousel id="makeupCarousel" interval={3000}>
                                        <CarouselItem id="makeup-sample1">
                                            <p>Muestra de maquillaje</p>
                                        </CarouselItem>
                                        <CarouselItem id="makeup-sample2">
                                            <p>Muestra de peinado</p>
                                        </CarouselItem>
                                        <CarouselItem id="makeup-sample3">
                                            <p>Muestra de peinado</p>
                                        </CarouselItem>
                                    </Carousel>
                                </Col>
                                <Col xs={12} sm={5}>
                                    <span id="featuredMakeupImage">Maquillaje profesional</span>
                                    <PinterestButtonWidget />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6}>
                            <span id="brushImage">Maquillaje con productos de alta calidad</span>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HairmakeupPanel;
