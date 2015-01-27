var React = require("react/addons");

module.exports = React.createClass({
    contextTypes: {
        subpart: React.PropTypes.number
    },
    render: function(){
        var style = {
            "opacity" : this.context.subpart > this.props.subpart ? 0.4 :
                        this.context.subpart < this.props.subpart ? 0 :
                        1.0
        };
        return <div className="slice" style={style}>
			{this.props.children}
        </div>;
    }
});