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
        return <Slide cat="Pourquoi" title="React et le monde JavaScript">
            React n'est pas :
            <ul>
                <Slice subpart="1">
                    <li>Angular/Ember</li>
                </Slice>
                <Slice subpart="2">
                    <li>Handlebars</li>
                </Slice>
                <Slice subpart="3">
                    <li>Polymer</li>
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