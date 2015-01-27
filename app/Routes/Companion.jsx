var React = require("react/addons");
var Presenter = require("../Deck/Presenter.jsx");

var Slide1 = require("../Slides/WhoAmI.jsx").comments;
var Slide2 = require("../Slides/Plan.jsx").comments;
var Slide3 = require("../Slides/Reactive_1.jsx").comments;
var Slide4 = require("../Slides/Reactive_2.jsx").comments;
var Slide5 = require("../Slides/Reactive_3.jsx").comments;
var Slide6 = require("../Slides/Why_1.jsx").comments;
var Slide7 = require("../Slides/ReactJsWorld.jsx").comments;
var Slide8 = require("../Slides/JSX.jsx").comments;
var Slide10 = require("../Slides/LifeCycle.jsx").comments;
var Slide9 = require("../Slides/Scope.jsx").comments;
var Slide11 = require("../Slides/Func_Misc.jsx").comments;
var Slide13 = require("../Slides/Env.jsx").comments;
var Slide14 = require("../Slides/Flux.jsx").comments;
var Slide15 = require("../Slides/Composants.jsx").comments;
var Slide16 = require("../Slides/Futur.jsx").comments;

var Comments = require("../Deck/Comment.jsx");
var Remote = require("../Deck/Remote.jsx");
var Timer = require("../Misc/Timer.jsx");

var EmptyComments = React.createClass({
    render: function () {
        return <Comments></Comments>;
    }
});

module.exports = React.createClass({
    render: function () {
        return (
            <div className="companion">
                <Remote/>
                <Presenter>
                    <EmptyComments/>
                    <Slide1/>
                    <Slide2/>
                    <EmptyComments/>
                    <Slide3/>
                    <Slide4/>
                    <Slide5/>
                    <EmptyComments/>
                    <Slide6/>
                    <Slide7/>
                    <EmptyComments/>
                    <Slide8/>
                    <Slide9/>
                    <Slide10/>
                    <Slide11/>
                    <EmptyComments/>
                    <EmptyComments/>
                    <Slide13/>
                    <Slide14/>
                    <Slide15/>
                    <EmptyComments/>
                    <Slide16/>
                    <EmptyComments/>
                </Presenter>
                <Timer/>
            </div>
        );
    }
});