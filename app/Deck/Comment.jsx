var React = require("react/addons");

module.exports = React.createClass({
    render: function () {
        return (
            <div className="comment">
                {this.props.children}
            </div>
        );
    }
});