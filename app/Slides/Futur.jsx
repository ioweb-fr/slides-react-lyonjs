var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        return <Slide title="Futur">
            <ul>
                <Slice subpart="1">
                    <li><strong>React : </strong> stabilisation, architecture et ES6</li>
                </Slice>
                <Slice subpart="2">
                    <li><strong>Alternatives :</strong> micro-librairies</li>
                </Slice>
                <Slice subpart="3">
                    <li><strong>Intégration :</strong> frameworks</li>
                </Slice>
                <Slice subpart="4">
                    <li><strong>Concepts :</strong> frameworks reactifs</li>
                </Slice>
                <Slice subpart="5">
                    <li><strong>Concepts :</strong> gestion d'états</li>
                </Slice>
            </ul>
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