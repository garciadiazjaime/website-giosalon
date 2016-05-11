'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var PinterestButtonWidget = require('../widgets/pinterest-button-widget');


var HairstylePanel = React.createClass({

    render: function() {

        return (
            <section id="hairstyle">
                <div className="container">
                    <div className="row">
                        <Col xs={12} sm={6}>
                           <span id="hairdryerImage">Peinados para esa ocasión especial</span> 
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2>Peinados</h2>
                            <div className="blueBox">
                                <p>Tu estilo es nuestro estilo, entendemos lo 
    que necesitas para cada ocasión.</p>
                                <span id="generalHairstyleImage">Productos de alta calidad para teñir tu pelo</span>
                            </div>
                            <Row>
                                <Col xs={12} sm={7}>
                                    <Carousel id="hairstyleCarousel" interval={3000}>
                                        <CarouselItem id="hairstyle-sample1">
                                            <p>Muestra de peinado</p>
                                        </CarouselItem>
                                        <CarouselItem id="hairstyle-sample2">
                                            <p>Muestra de peinado</p>
                                        </CarouselItem>
                                        <CarouselItem id="hairstyle-sample3">
                                            <p>Muestra de peinado</p>
                                        </CarouselItem>
                                    </Carousel>
                                </Col>
                                <Col xs={12} sm={5}>
                                    <span id="featuredHairstyleImage">Peinados profesionales</span>
                                    <PinterestButtonWidget />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = HairstylePanel;
