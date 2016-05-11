'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var PinterestButtonWidget = require('../widgets/pinterest-button-widget');


var HaircutsPanel = React.createClass({

    render: function() {

        return (
            <section id="haircuts">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <span id="scissorsImage">Imagen de herramientas de corte de pelo</span>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2>Cortes</h2>
                            <div className="leftPinkBox">
                                <p>Un corte adecuado conforme a tu tez, facciones y personalidad.</p>
                                <span id="generalHaircutsImage">Elegimos el mejor corte para tí</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                        </Col>
                        <Col xs={12} sm={8}>
                            <div className="long-wrap">
                                <Row id="hairCutsRow">
                                    <Col xs={12} sm={6}>
                                        <h3>Masculino</h3>
                                        <Carousel id="maleCutsCarousel" interval={3000}>
                                            <CarouselItem id="maleCuts-haistyle1">
                                                <p>Corte para hombre</p>
                                            </CarouselItem>
                                            <CarouselItem id="maleCuts-haistyle2">
                                                <p>Corte para hombre</p>
                                            </CarouselItem>
                                            <CarouselItem id="maleCuts-haistyle3">
                                                <p>Corte para hombre</p>
                                            </CarouselItem>
                                        </Carousel>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <h3>Femenino</h3>
                                        <Carousel id="femaleCutsCarousel" interval={3000}>
                                            <CarouselItem id="femaleCuts-haistyle1">
                                                <p>Corte para mujer</p>
                                            </CarouselItem>
                                            <CarouselItem id="femaleCuts-haistyle2">
                                                <p>Corte para mujer</p>
                                            </CarouselItem>
                                            <CarouselItem id="femaleCuts-haistyle3">
                                                <p>Corte para mujer</p>
                                            </CarouselItem>
                                            <CarouselItem id="femaleCuts-haistyle4">
                                                <p>Corte para mujer</p>
                                            </CarouselItem>
                                        </Carousel>
                                        <PinterestButtonWidget />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HaircutsPanel;
