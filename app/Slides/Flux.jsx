var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

var diagramImg = require("./assets/flux-diagram.png");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        return <Slide cat="Écosystème" title="Flux">
            <img src={diagramImg} style={{width: "80vw"}}/>
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