var React = require("react/addons");
var RouteHandler = require("react-router").RouteHandler;

var Part = require("../Deck/Separator.jsx");

var Slide1 = require("../Slides/WhoAmI.jsx").slide;
var Slide2 = require("../Slides/Plan.jsx").slide;
var Slide3 = require("../Slides/Reactive_1.jsx").slide;
var Slide4 = require("../Slides/Reactive_2.jsx").slide;
var Slide5 = require("../Slides/Reactive_3.jsx").slide;
var Slide6 = require("../Slides/Why_1.jsx").slide;
var Slide7 = require("../Slides/ReactJsWorld.jsx").slide;
var Slide8 = require("../Slides/JSX.jsx").slide;
var Slide10 = require("../Slides/LifeCycle.jsx").slide;
var Slide9 = require("../Slides/Scope.jsx").slide;
var Slide11 = require("../Slides/Func_Misc.jsx").slide;
var Slide13 = require("../Slides/Env.jsx").slide;
var Slide14 = require("../Slides/Flux.jsx").slide;
var Slide15 = require("../Slides/Composants.jsx").slide;
var Slide16 = require("../Slides/Futur.jsx").slide;


var Deck = require("../Deck/Deck.jsx");


require("../Application/style.css");
require("../Application/codemirror.css");
require("../Application/solarized.css")

module.exports = React.createClass({
    render: function(){
        return <div className="application">
            <Deck>
                <Part title="React.JS"/>
                <Slide1/>
                <Slide2/>
                <Part title="Programmation réactive"/>
                <Slide3/>
                <Slide4/>
                <Slide5/>
                <Part title="Pourquoi ?"/>
                <Slide6/>
                <Slide7/>
                <Part title="Fonctionnalités"/>
                <Slide8/>
                <Slide9/>
                <Slide10/>
                <Slide11/>
                <Part title="Démonstration"/>
                <Part title="Écosystème"/>
                <Slide13/>
                <Slide14/>
                <Slide15/>
                <Part title="Futur"/>
                <Slide16/>
                <Part title="Questions ?"/>
            </Deck>
        </div>;
    }
});
