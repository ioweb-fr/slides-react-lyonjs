var React = require("react/addons");
var key = require("keymaster");

module.exports = {
    childContextTypes: {
        subpart: React.PropTypes.number
    },
    getChildContext: function() {
        return { subpart: this.props.getSubpart() };
    }
};