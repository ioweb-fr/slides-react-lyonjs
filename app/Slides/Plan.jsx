var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    render: function(){
        return (
            <Slide title="Plan">
                <ol>
                    <li>La programmation réactive</li>
                    <li>Pourquoi React</li>
                    <li>React et le monde JavaScript</li>
                    <li>Fonctionnement</li>
                    <li>Démo</li>
                    <li>L'écosystème</li>
                    <li>Le futur</li>
                </ol>
            </Slide>
        );
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