var React = require("react/addons");

module.exports = React.createClass({
    getTitle: function () {
        return ! this.props.title ? null :
            this.props.cat ? <h1><span className="cat">{this.props.cat}  /</span> {this.props.title}</h1> :
                             <h1>{this.props.title}</h1>;
    },
    render: function () {
        return (
            <div className="slide">
                {this.getTitle()}
				<div className="slide-content">{this.props.children}</div>
            </div>
        );
    }
});