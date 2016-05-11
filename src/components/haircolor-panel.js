'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var PinterestButtonWidget = require('../widgets/pinterest-button-widget');


var HaircolorPanel = React.createClass({

    render: function() {

        return (
            <section id="color">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Color</h2>
                            <div className="yellowBox">
                                <p>Un corte adecuado conforme a tu tez, facciones y personalidad.</p>
                                <span id="generalHairColorImage">Productos de alta calidad para teñir tu pelo</span>
                            </div>
                            <Row>
                                <Col xs={12} sm={7}>
                                    <Carousel id="hairColorCarousel" interval={3000}>
                                        <CarouselItem id="hairColor-sample1">
                                            <p>Tinte de cabello</p>
                                        </CarouselItem>
                                        <CarouselItem id="hairColor-sample2">
                                            <p>Tinte de cabello</p>
                                        </CarouselItem>
                                        <CarouselItem id="hairColor-sample3">
                                            <p>Tinte de cabello</p>
                                        </CarouselItem>
                                    </Carousel>
                                </Col>
                                <Col xs={12} sm={5}>
                                    <span id="featuredHairColorImage">Te ayudamos a elegir el color para tí</span>
                                    <PinterestButtonWidget />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6}>
                            <span id="colorBrushImage">Cambia tu color de cabello con herramientas y productos de calidad</span>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HaircolorPanel;
