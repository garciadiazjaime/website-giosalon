'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var FooterSection = React.createClass({

  mixins : [AutoScrollMixin],

  render: function() {
    return (
        <div className="container">
            <nav id="footerNavigation">
                <ul>
                    <li>
                        <Link to="home" title="Inicio" onClick={this.handleClick.bind(this, 'home')}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="aboutus" title="Nosotros" onClick={this.handleClick.bind(this, 'aboutus')}>Nosotros</Link>
                    </li>
                    <li>
                        <Link to="haircuts" title="Cortes" onClick={this.handleClick.bind(this, 'haircuts')}>Cortes</Link>
                    </li>
                    <li>
                        <Link to="color" title="Color" onClick={this.handleClick.bind(this, 'color')}>Color</Link>
                    </li>    
                    <li>
                        <Link to="hairstyle" title="Peinados" onClick={this.handleClick.bind(this, 'hairstyle')}>Peinados</Link>
                    </li>
                    <li>
                        <Link to="makeup" title="Maquillaje" onClick={this.handleClick.bind(this, 'makeup')}>Maquillaje</Link>
                    </li>
                    <li>
                        <Link to="brides" title="Novias" onClick={this.handleClick.bind(this, 'brides')}>Novias</Link>
                    </li>
                    <li>
                        <Link to="boutique" title="Boutique" onClick={this.handleClick.bind(this, 'boutique')}>Boutique</Link>
                    </li>
                    <li>
                        <Link to="contact" title="Contacto" onClick={this.handleClick.bind(this, 'contact')}>Contacto</Link>
                    </li>    
                </ul>
            </nav>
            <Row>
                <Col xs={12} sm={5}>
                    <p>Todos los derechos reservados giO Salón ®</p>
                </Col>
                <Col xs={12} sm={5}>
                    <p id="credit"><span>Un proyecto de: <a href="http://somospool.com/" title="Visita Branding POOL" target="_blank">POOL</a> </span>Código por: <a href="http://mintitmedia.com/" title="Mint IT Media - Diseño y desarrollo web" target="_blank">MINT</a></p>
                </Col>
                <Col xs={12} sm={2}>
                </Col>
            </Row>    
        </div>
    );
  },

  handleClick: function(section, event){
    event.preventDefault();
    this.autoScrollTo(section);
  }
});

module.exports = FooterSection;