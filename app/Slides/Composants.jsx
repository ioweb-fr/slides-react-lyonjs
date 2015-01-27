var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

var materialUi = require("./assets/material-ui.png");
var bootstrap = require("./assets/bootstrap.png");
var codeMirror = require("./assets/codemirror.png");
var foundation = require("./assets/foundation.png");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        var flStyle = {float: "left", width: "40%", marginLeft: "5%"};
        var imStyle = {height: "35vh", marginTop: "5vh"};
        return <Slide title="Composants" cat="Écosystème">
            <div style={flStyle}>
                <Slice subpart="1">
                    <img src={materialUi} style={imStyle}/>
                </Slice>
            </div>
            <div style={flStyle}>
                <Slice subpart="2">
                    <img src={bootstrap} style={imStyle}/>
                </Slice>
            </div>
            <div style={flStyle}>
                <Slice subpart="3">
                    <img src={codeMirror} style={imStyle}/>
                </Slice>
            </div>
            <div style={flStyle}>
                <Slice subpart="4">
                    <img src={foundation} style={imStyle}/>
                </Slice>
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