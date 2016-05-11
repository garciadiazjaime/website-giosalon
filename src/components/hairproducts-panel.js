'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;

var HairproductsPanel = React.createClass({

    render: function() {

        return (
            <section id="productos">
                <h2>Productos</h2>
                <Carousel id="productsCarousel" interval={3000}>
                    <CarouselItem>
                        <p id="kerastaseLogo">Kérastase Paris</p>
                    </CarouselItem>
                    <CarouselItem>
                        <p id="sebastianLogo">Professional Sebastian</p>
                    </CarouselItem>
                    <CarouselItem>
                        <p id="lorealLogo">LOREAL Paris</p>
                    </CarouselItem>
                    <CarouselItem>
                        <p id="macLogo">MAC</p>
                    </CarouselItem>
                </Carousel>
            </section>    
        );
    }
});

module.exports = HairproductsPanel;
