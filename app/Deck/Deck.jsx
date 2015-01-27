var React = require("react/addons");
var key = require("keymaster");
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Footer = require("../Deck/Footer.jsx");
var RemoteMixin = require("../Mixins/RemoteMixin.jsx");
var qwest = require("qwest");

module.exports = React.createClass({
    mixins: [RemoteMixin],

    getCurrentSubpart: function(){
        return this.state.subpart;
    },

    children: null,
    remoteEventsTimer: null,

    componentWillMount: function(){
        var slidePart = 0;

        this.children = React.Children.map(this.props.children, (slide) => {
            slidePart ++;

            var slide =  React.addons.cloneWithProps(slide, {
                getSubpart: this.getCurrentSubpart
            });

            var style = {"zIndex" : 1000 - slidePart};
            return <div style={style} key={slidePart} className="slide-cont">{slide}</div>;
        });

    },

    onNewPartReceived: function(newPart){
        if (newPart < this.state.currentPart) {
            this.setState({movement: "left"});
            setTimeout(() => {
                this.setState({subpart : this.getNumberOfParts()});
            }, 200);
        } else if (newPart > this.state.currentPart) {
            this.setState({movement: "right"});
            this.setState({subpart : 1});
        }
    },

    pollEventsQueue: function () {
        qwest.get("/api/event")
            .then((jsonString) => {
                JSON.parse(jsonString).map((event) => {
                    event == "left" && this.goPreviousPart();
                    event == "right" && this.goNextPart();
                });
            });
    },

    updateEventsTimer: function () {
        this.pollEventsQueue();
        this.remoteEventsTimer = setTimeout(this.updateEventsTimer, 100);
    },

    componentDidMount: function(){
        key("left", this.goPreviousPart);
        key("right", this.goNextPart);
        this.updateEventsTimer();
    },


    componentWillUnmount: function(){
        key.unbind("left");
        key.unbind("right");
        clearTimeout(this.remoteEventsTimer);
    },

    goPreviousPart: function(){
        var n = this.state.subpart;
        if (n > 1) {
            this.setState({subpart: n - 1});
        } else {
            this.goPreviousSlide();
        }
    },

    getNumberOfParts: function(){
        var all = this.getDOMNode().querySelectorAll("div.slice").length;
        var leaving = this.getDOMNode().querySelectorAll(".slide-leave div.slice").length;
        return all - leaving;
    },

    goNextPart: function(){
        var n = this.state.subpart;
        if (n < this.getNumberOfParts()) {
            this.setState({subpart: n + 1});
        } else {
            this.goNextSlide();
        }
    },

    getNumberOfSlides: function(){
        return React.Children.count(this.props.children);
    },

    goPreviousSlide: function(){
        if (this.state.currentPart > 1) {
            var n = this.state.currentPart - 1;
            qwest.post("/api/part?num=" + n);
            return true;
        }
        return false;
    },

    goNextSlide: function(){
        if (this.state.currentPart < this.getNumberOfSlides()) {
            var n = this.state.currentPart + 1;
            qwest.post("/api/part?num=" + n);
            return true;
        }
        return false;
    },


    getInitialState: function() {
        return {subpart: 1, movement: "none"};
    },

    render: function(){
        return (
            <div className="deck">
                <div className="slides">
                    <ReactCSSTransitionGroup transitionName="slide" className={this.state.movement}>
                        {this.renderChildren()}
                    </ReactCSSTransitionGroup>
                </div>
                <Footer currentPart={this.state.currentPart} numberOfParts={this.getNumberOfSlides()}
                    title="React.JS" />
            </div>
        );
    }
});