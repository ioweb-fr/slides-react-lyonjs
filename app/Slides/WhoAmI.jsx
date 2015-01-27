var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");

var meImg = require("./assets/whoami.jpeg");
var iowebLogo = require("./assets/logo.png");
var wlLogo = require("./assets/worldline-logo.jpg");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        return <Slide title="Qui suis-je ?">
            <ul>
                <Slice subpart="1">
                    <li>développeur front-end...</li>
                    <li>...mais aussi porté sur le devops...</li>
                </Slice>
                <Slice subpart="2">
                    <li>... et sur la programmation fonctionnelle</li>
                </Slice>
                <Slice subpart="3">
                    <li>salarié de Worldline</li>
                    <li>co-fondateur d'Ioweb</li>
                </Slice>
            </ul>

            <Slice subpart="3">
                <div id="logo-bar">
                    <img src={wlLogo} style={{width: "20vw"}}/>
                    <img src={iowebLogo} style={{width: "25vw"}} />
                </div>
            </Slice>

            <div id="whoami" style={{width: "25vw"}}>
                <img src={meImg} style={{width: "24vw"}}/><br/>
                <strong>@fredericlb</strong>
            </div>

        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return null;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};