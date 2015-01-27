var React = require("react/addons");

module.exports = React.createClass({

    timer_ : null,
    startedAt_ : 0,

    getInitialState: function(){
        return {minutes: 0, seconds :0};
    },
    getPaddedMinutes: function(){
        console.log(this.state.minutes);
        return this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes;
    },
    getPaddedSeconds: function(){
        return this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds;
    },

    updateTime: function(){
        var elapsed = Date.now() - this.startedAt_;
        this.setState({
            minutes: Math.round(elapsed / 1000 / 60),
            seconds: Math.round(elapsed / 1000) % 60
        });

        setTimeout(this.updateTime, 1000);
    },

    componentDidMount: function(){
        this.startedAt_ = Date.now();
        this.updateTime();
    },

    componentWillUnmount: function(){
        clearTimeout(this.timer_);
    },

    render: function () {
        return (
            <div className="timer">
                {this.getPaddedMinutes()} : {this.getPaddedSeconds()}
            </div>
        );
    }
});