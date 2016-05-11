var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Layout = require('./components/layout');
var HomePanel = require('./components/home-panel');

var routes = (
	<Route path="/" handler={Layout}>
		<DefaultRoute name="home" handler={HomePanel}/>
		<Route name="aboutus" path="nosotros" handler={HomePanel} />
		<Route name="haircuts" path="cortes" handler={HomePanel} />
		<Route name="color" path="color" handler={HomePanel} />
		<Route name="hairstyle" path="peinados" handler={HomePanel} />
		<Route name="makeup" path="maquillaje" handler={HomePanel} />
		<Route name="brides" path="novias" handler={HomePanel} />
		<Route name="boutique" path="boutique" handler={HomePanel} />
		<Route name="contact" path="contacto" handler={HomePanel} />
	</Route>
);

module.exports = routes;