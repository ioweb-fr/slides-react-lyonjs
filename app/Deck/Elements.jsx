var React = require("react/addons");

module.exports = {
    El : React.createClass({
        render: function() {
            return <li>{this.props.children}</li>;
        }
    }),
    Listing: React.createClass({
        render: function() {
            return <ul>{this.props.children}</ul>;
        }
    })
};