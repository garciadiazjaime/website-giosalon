'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var HeaderSection = require('./header-section');
var FooterSection = require('./footer-section');
var AutoScrollMixin = require('../mixins/autoscroll-mixin');
var TriggerPointMixin = require('../mixins/triggerpoint-mixin');


var Layout = React.createClass({

  mixins: [ Router.State, AutoScrollMixin, TriggerPointMixin],

  componentDidMount: function(){
    window.addEventListener('scroll', this.onScroll, false);
    this.autoScrollTo(this.getRoutes().slice(-1)[0].name);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  },

  render: function() {
    
    return (
        <div>
            <header id="header">
                <HeaderSection/>
            </header>
            <RouteHandler/>
            <footer id="footer">
                <FooterSection/>
            </footer>
        </div>
    );
  },

  onScroll: function(){
    this.watchPoint('mainPhrase', 'header', 'fixed');
    this.watchPoint('contact', 'appointmentWrap', 'hidden');
  }
});

module.exports = Layout;
