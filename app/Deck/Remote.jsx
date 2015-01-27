var React = require("react/addons");
var qwest = require("qwest");
var Button = require("react-bootstrap/Button");

module.exports = React.createClass({

    goLeft: function () {
        qwest.post("/api/event?name=left");
    },

    goRight: function () {
        qwest.post("/api/event?name=right");
    },

    render: function () {
        return (
            <div className="remote">
                <Button bsStyle="danger" onClick={this.goLeft}></Button>
                <Button bsStyle="success" onClick={this.goRight}></Button>
            </div>
        );
    }
});