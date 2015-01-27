var React = require("react/addons");
var qwest = require("qwest");

module.exports = {

    updateTimer: null,

    renderChildren: function(){
        var slidePart = 0;
        var currentPart = this.state.currentPart;

        return React.Children.map(this.children, (slide) => {
            slidePart ++;
            //console.log(currentPart, slidePart);
            return currentPart == slidePart ? slide : null;
        });
    },


    getInitialState: function(){
        return {currentPart : 1};
    },

    updateSlidePart: function(){
        qwest.get("/api/part")
            .then((resp) => {
                if (+ resp != this.state.currentPart) {
                    this.onNewPartReceived(+resp);
                }
                this.setState({currentPart: + resp});
            });
    },


    timedUpdate: function(){
        this.updateSlidePart();
        this.updateTimer = setTimeout(this.timedUpdate, 200);
    },


    componentDidMount: function(){
        this.timedUpdate();
    },

    componentWillUnmount: function(){
        key.unbind("left");
        key.unbind("right");
    }

};