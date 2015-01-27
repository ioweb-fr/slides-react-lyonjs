var React = require("react/addons");
var SlideContentMixin = require("../Mixins/SlideContent.jsx");
var Slide = require("../Deck/Slide.jsx");
var El = require("../Deck/Elements.jsx").El;
var Listing = require("../Deck/Elements.jsx").Listing;
var Slice = require("../Deck/Slice.jsx");
var Comment = require("../Deck/Comment.jsx");
var CodeMirror = require("react-code-mirror");

require("codemirror/mode/javascript/javascript");

const srcSample = [
        "React.createClass({",
        "    render: function(){",
        "        return (" ,
        "            <div className='test'>",
        "                Le test",
        "            </div>",
        "        );",
        "    }",
        "});"];

const jsSrcSample = [
    "React.createClass({",
    "    render: function(){",
    "        return React.createElement(",
    "           'div',",
    "           {'className' : 'test'}, ",
    "           'Le test');",
    "    }",
    "});",
    ""];

var Sl = React.createClass({
    mixins: [SlideContentMixin],
    getCodeSample: function(){
        return srcSample.join("\n");
    },
    getJSCodeSample: function(){
        return jsSrcSample.join("\n");
    },
    render: function(){
        return <Slide title="JSX" cat="Fonctionnement">
            <Slice subpart="1">
                <div style={{width: "45%", float: "left"}}>
                    <CodeMirror value={this.getCodeSample()} lineNumbers="true" readOnly="true"/>
                </div>
                <div style={{width: "50%", float: "left"}}>
                    <CodeMirror value={this.getJSCodeSample()} lineNumbers="true" readOnly="true"/>
                </div>
            </Slice>

            <Slice subpart="2">
                    <blockquote><p>“Templates separate technologies, not concerns.”</p></blockquote>
            </Slice>
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