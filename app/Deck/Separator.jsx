var React = require("react/addons");
var Slide = require("./Slide.jsx");

module.exports = React.createClass({
    render: function () {
        return <Slide title={null}>
            <h2>{this.props.title}</h2>
        </Slide>;
    }
});