'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Nav = rb.Nav;
var Navbar = rb.Navbar;
var NavItem = rb.NavItem;
var CollapsibleNav = rb.CollapsibleNav;
var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var HeaderSection = React.createClass({

    mixins : [AutoScrollMixin],

    componentDidMount: function(){
        document.getElementsByClassName('navbar-toggle')[0].addEventListener("click", this.onClickNavbar);
    },

    componentWillUnmount: function(){
        document.getElementsByClassName('navbar-toggle')[0].removeEventListener('click', this.onClickNavbar, false);
    },

    render: function() {
        return (
            <Navbar brand='Volver a inicio de Gio Salon' toggleNavKey={0} className="navbar-static-top" onClick={this.handleParentClick.bind(this, 'home')}>
                <CollapsibleNav eventKey={0} id="menu-navbar">
                  <Nav navbar>
                    <NavItem eventKey={1} href='/inicio' onClick={this.handleClick.bind(this, 'home')}>Inicio</NavItem>
                    <NavItem eventKey={2} href='/nosotros' onClick={this.handleClick.bind(this, 'aboutus')}>Nosotros</NavItem>
                    <NavItem eventKey={3} href='/cortes' onClick={this.handleClick.bind(this, 'haircuts')}>Cortes</NavItem>
                    <NavItem eventKey={4} href='/color' onClick={this.handleClick.bind(this, 'color')}>Color</NavItem>
                    <NavItem eventKey={5} href='/peinados' onClick={this.handleClick.bind(this, 'hairstyle')}>Peinados</NavItem>
                    <NavItem eventKey={6} href='/maquillaje' onClick={this.handleClick.bind(this, 'makeup')}>Maquillaje</NavItem>
                    <NavItem eventKey={7} href='/novias' onClick={this.handleClick.bind(this, 'brides')}>Novias</NavItem>
                    <NavItem eventKey={8} href='/boutique' onClick={this.handleClick.bind(this, 'boutique')}>Boutique</NavItem>
                    <NavItem eventKey={9} href='/contacto' onClick={this.handleClick.bind(this, 'contact')}>Contacto</NavItem>
                  </Nav>
                </CollapsibleNav>
                <ul className="social">
                    <li><a href="https://www.facebook.com/gioelsalon?fref=ts" title="Síguenos en facebooks" target="_blank"><span>Facebook</span></a></li>
                </ul>
            </Navbar>
        );
    },

    handleParentClick: function(section, event){
        if(!this.flag.navbarClicked && !this.flag.childClicked){
            this.autoScrollTo(section);
        }
        
        this.flag = initFlags();
    },

    handleClick: function(section, event){
        event.preventDefault();
        this.flag.childClicked = true

        // fix to close bootstrap menu on mobile
        if(window.innerWidth < 768){
            document.getElementsByClassName('navbar-toggle')[0].click();
            event.stopPropagation();
        }

        this.autoScrollTo(section);
    },

    onClickNavbar: function(event){
        this.flag.navbarClicked = true
    },

    flag: initFlags()
});

function initFlags(){
    return {
        navbarClicked: false,
        childClicked: false
    }
};

module.exports = HeaderSection;
