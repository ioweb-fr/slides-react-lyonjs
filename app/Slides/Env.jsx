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
        return <Slide title="React en mode projet" cat="Écosystème">
            <ul>
                <Slice subpart="1">
                    <li>React peut-être utilisé seul</li>
                </Slice>
                <Slice subpart="2">
                    <li>Mais il peut-être inclut dans un environnement qui le complète</li>
                </Slice>
            </ul>
            <ol>
                <Slice subpart="3">
                    <li>CommonJS : Browserify test ou WebPack</li>
                </Slice>
                <Slice subpart="4">
                    <li>Npm</li>
                </Slice>
                <Slice subpart="5">
                    <li>Flux</li>
                </Slice>
            </ol>
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