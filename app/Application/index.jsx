var React = require("react/addons");
var RouteHandler = require("react-router").RouteHandler;
var key = require("keymaster");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");

module.exports = React.createClass({
	render: function(){
		return <RouteHandler />;
	}
});
