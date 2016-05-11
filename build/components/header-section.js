'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Nav = rb.Nav;
var Navbar = rb.Navbar;
var NavItem = rb.NavItem;
var CollapsibleNav = rb.CollapsibleNav;
var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var HeaderSection = React.createClass({displayName: "HeaderSection",

    mixins : [AutoScrollMixin],

    componentDidMount: function(){
        document.getElementsByClassName('navbar-toggle')[0].addEventListener("click", this.onClickNavbar);
    },

    componentWillUnmount: function(){
        document.getElementsByClassName('navbar-toggle')[0].removeEventListener('click', this.onClickNavbar, false);
    },

    render: function() {
        return (
            React.createElement(Navbar, {brand: "Volver a inicio de Gio Salon", toggleNavKey: 0, className: "navbar-static-top", onClick: this.handleParentClick.bind(this, 'home')}, 
                React.createElement(CollapsibleNav, {eventKey: 0, id: "menu-navbar"}, 
                  React.createElement(Nav, {navbar: true}, 
                    React.createElement(NavItem, {eventKey: 1, href: "/inicio", onClick: this.handleClick.bind(this, 'home')}, "Inicio"), 
                    React.createElement(NavItem, {eventKey: 2, href: "/nosotros", onClick: this.handleClick.bind(this, 'aboutus')}, "Nosotros"), 
                    React.createElement(NavItem, {eventKey: 3, href: "/cortes", onClick: this.handleClick.bind(this, 'haircuts')}, "Cortes"), 
                    React.createElement(NavItem, {eventKey: 4, href: "/color", onClick: this.handleClick.bind(this, 'color')}, "Color"), 
                    React.createElement(NavItem, {eventKey: 5, href: "/peinados", onClick: this.handleClick.bind(this, 'hairstyle')}, "Peinados"), 
                    React.createElement(NavItem, {eventKey: 6, href: "/maquillaje", onClick: this.handleClick.bind(this, 'makeup')}, "Maquillaje"), 
                    React.createElement(NavItem, {eventKey: 7, href: "/novias", onClick: this.handleClick.bind(this, 'brides')}, "Novias"), 
                    React.createElement(NavItem, {eventKey: 8, href: "/boutique", onClick: this.handleClick.bind(this, 'boutique')}, "Boutique"), 
                    React.createElement(NavItem, {eventKey: 9, href: "/contacto", onClick: this.handleClick.bind(this, 'contact')}, "Contacto")
                  )
                ), 
                React.createElement("ul", {className: "social"}, 
                    React.createElement("li", null, React.createElement("a", {href: "https://www.facebook.com/gioelsalon?fref=ts", title: "Síguenos en facebooks", target: "_blank"}, React.createElement("span", null, "Facebook")))
                )
            )
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
