var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

if(!Object.assign)
	Object.assign = React.__spread;

module.exports = (
	<Route name="app" path="/" handler={require("./Application")}>
		<Route name="present" path="/companion" handler={require("./Routes/Companion.jsx")}/>
		<DefaultRoute name="deck" handler={require("./Routes/SlideDeck")} />
	</Route> 
);
  