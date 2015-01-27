var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

require("codemirror/mode/python/python");

const srcSample = "# Pseudo-code\n" +
        "b ← 5\n" +
        "c ← 3\n" +
        "a = b + c\n" +
        "print a\n" +
        "b ← 0\n" +
        "print a";

const srcProcSample = "# Version procédurale\n" +
    "b ← 5\n" +
    "c ← 3\n" +
    "a = b + c\n" +
    "print a # -> 8\n" +
    "b ← 0\n" +
    "print a # -> 8";

const srcReactiveSample = "# Version réactive\n" +
    "b ← 5\n" +
    "c ← 3\n" +
    "a = b + c\n" +
    "print a # -> 8\n" +
    "b ← 0\n" +
    "print a # -> 3";


var Sl = React.createClass({
    mixins: [SlideContentMixin],
    getCodeSample: function(){
        return this.props.getSubpart() == 1 ? srcSample :
               this.props.getSubpart() == 2 ? srcProcSample :
               srcReactiveSample;
    },
    render: function(){
        return <Slide title="Introduction" cat="Programmation réactive">
            <CodeMirror value={this.getCodeSample()} mode="python" lineNumbers="true" readOnly="true"/>
            <Slice subpart="1"/>
            <Slice subpart="2"/>
            <Slice subpart="3"/>
            <ul>
                <Slice subpart="4">
                    <li><strong>a</strong> est décrit de façon universelle</li>
                </Slice>
                <Slice subpart="5">
                    <li><strong>b</strong> et <strong>c</strong> représentent un état</li>
                    <li><strong>a</strong> représente un rendu</li>
                </Slice>
                <Slice subpart="6">
                    <li>une variable réactive est un ensemble d'opérations sur ses dépendances</li>
                </Slice>
            </ul>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>Définition perso</li>
                <li>3e niveau de programmation haut niveau (procédurale, object, réactif)</li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};