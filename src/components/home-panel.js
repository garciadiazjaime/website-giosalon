'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AboutusPanel = require('./aboutus-panel');
var HaircutsPanel = require('./haircuts-panel');
var HaircolorPanel = require('./haircolor-panel');
var HairstylePanel = require('./hairstyle-panel');
var HairmakeupPanel = require('./hairmakeup-panel');
var HairbridePanel = require('./hairbride-panel');
var HairboutiquePanel = require('./hairboutique-panel');
var HairproductsPanel = require('./hairproducts-panel');
var ContactusPanel = require('./contactus-panel');
var MainbannerPanel = require('./mainbanner-panel');
var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var HomePanel = React.createClass({

    mixins : [ReactRouter.Navigation, AutoScrollMixin],
    
    handleClick: function(section, event){
        event.preventDefault();
        this.autoScrollTo(section);
    },

    render: function() {

        return (
            <div id="mainContent">
                <div id="appointmentWrap">
                    <Link to="contact" title="Contáctanos y haz una cita" id="appointment-button" onClick={this.handleClick.bind(this, 'contact')}><span>Agendar cita</span>
                    </Link><a href="tel:6646341158" title="Haz una cita telefónica" id="telAppointmentButton"><span>Llamar</span></a>
                </div>
                <MainbannerPanel />
                <AboutusPanel />
                <HaircutsPanel />
                <HaircolorPanel />
                <HairstylePanel />
                <HairmakeupPanel />
                <HairbridePanel />
                <HairboutiquePanel />
                <HairproductsPanel />
                <ContactusPanel />
            </div>
        );
    }
});

module.exports = HomePanel;
