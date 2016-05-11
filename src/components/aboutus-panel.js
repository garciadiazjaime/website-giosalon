'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;


var AboutusPanel = React.createClass({

    render: function() {

        return (
            <section id="aboutus">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Nosotros</h2>
                            <p>En <em>giO</em> salón proponemos un servicio vanguardista, exclusivo, de calidad y creativo para que cada corte, tinte, peinado y maquillaje sea único, sobresaliente y llene de seguridad a quien lo porte.</p>
                            <p>Contamos con más de 15 años de experiencia, ofreciendo a nuestros clientes un servicio personalizado,  estando siempre a la vanguardia en estilos y tendencias, dándole acceso a nuestros clientes a servicios y productos de primer nivel. </p>

                            <Carousel id="aboutusCarousel" interval={3000}>
                                <CarouselItem id="aboutus-slideA" >
                                    <p>Seleccionamos el mejor corte para tí</p>
                                </CarouselItem>
                                <CarouselItem id="aboutus-slideB">
                                    <p>Seleccionamos el mejor corte para tí</p>
                                </CarouselItem>
                                <CarouselItem id="aboutus-slideC">
                                    <p>Seleccionamos el mejor corte para tí</p>
                                </CarouselItem>
                                <CarouselItem id="aboutus-slideD">
                                    <p>Seleccionamos el mejor corte para tí</p>
                                </CarouselItem>
                            </Carousel>
                        </Col>
                        <Col xs={12} sm={6}>
                            <span id="professionaToolsImage">Imagen de herramientas de estilizado profesionales</span>


                            <Carousel id="aboutusCarousel2" interval={3000}>
                                <CarouselItem id="aboutus2-slideA" >
                                    <p>Lavado de cabello</p>
                                </CarouselItem>
                                <CarouselItem id="aboutus2-slideB">
                                    <p>Servicio de peinado</p>
                                </CarouselItem>
                                <CarouselItem id="aboutus2-slideC">
                                    <p>Contamos con servicio de maquillaje</p>
                                </CarouselItem>
                            </Carousel>
                            
                        </Col>
                    </Row>   
                </div>
            </section>
        );
    }
});

module.exports = AboutusPanel;
