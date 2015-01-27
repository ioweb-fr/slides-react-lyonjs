var React = require("react/addons");

module.exports = React.createClass({
    getProgressBarWidth: function () {
        return "" + Math.round(100 * (this.props.currentPart / this.props.numberOfParts)) + "%";
    },
    getProgressBarStyle: function () {
        return {width: this.getProgressBarWidth()};
    },

    render: function() {
        return <footer>
            <div className="footer-progress-bar" style={this.getProgressBarStyle()}></div>
            <div className="footer-content">
                <div className="page-count">{this.props.currentPart} / {this.props.numberOfParts}</div>
                <div className="title">{this.props.title}</div>
            </div>
        </footer>;
    }
});