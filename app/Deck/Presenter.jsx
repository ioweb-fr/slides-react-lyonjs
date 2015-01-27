var React = require("react/addons");
var RemoteMixin = require("../Mixins/RemoteMixin.jsx");

module.exports = React.createClass({
    children: null,
    mixins: [RemoteMixin],

    componentWillMount: function(){
        this.children = this.props.children;
    },

    onNewPartReceived: function(){

    },

    render: function(){
        return (
            <div className="presenter">
                {this.renderChildren()}
            </div>
        );
    }
});