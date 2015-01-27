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
        return <Slide cat="Fonctionnement" title="Cycle de vie">
            <ol>
                <Slice subpart="1">
                    <li>Initialisation</li>
                </Slice>
                <Slice subpart="2">
                    <li>Montage</li>
                </Slice>
                <Slice subpart="3">
                    <li>Mise à jour<ul>
                        <li>interne</li>
                        <li>externe</li>
                        <li>forcée</li>
                    </ul></li>
                </Slice>
                <Slice subpart="4">
                    <li>Démontage</li>
                </Slice>
            </ol>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};