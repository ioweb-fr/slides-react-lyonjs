var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

var scopeImg = require("./assets/scopes.png");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        return <Slide title="États et portés" cat="Fonctionnement">
            <ul style={{float: "right", width: "65%"}}>
                <Slice subpart="1">
                    <li><strong>Propriétés : </strong> héritées et immutables</li>
                </Slice>
                <Slice subpart="2">
                    <li><strong>État : </strong> interne et mutable</li>
                </Slice>
                <Slice subpart="3">
                    <li><strong>Contexte : </strong> hérité et mutable par owner</li>
                </Slice>
            </ul>
            <img src={scopeImg}  style={{marginLeft: "5vw", display : "block", height: "60vh", maxWidth: "30%", marginTop: "5vh"}}/>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>  Notion de owner
                </li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};