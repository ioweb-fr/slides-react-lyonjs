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
        return <Slide cat="Programmation réactive" title="React">
            <ul>
                <Slice subpart="1">
                    <li>Difficile de dire si du code est réactif ou non...</li>
                </Slice>
                <Slice subpart="2">
                    <li>... mais possible de dire si du code s'en approche</li>
                </Slice>
                <Slice subpart="3">
                    <li>React s'en approche mais ne l'est pas complétement</li>
                </Slice>
                <Slice subpart="4">
                    <li>Réciproque : de FP vers FRP</li>
                </Slice>
                <Slice subpart="5">
                    <li>Pour les curieux: <strong>Elm</strong>, <strong>RxJS</strong>, <strong>BaconJS</strong>...</li>
                </Slice>
            </ul>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>two way data binding -> forme de réaction</li>
                <li>FRP : Problème inverse (mener un langage fonctionnel vers assez d'effets de bord pour supporter le réactif)</li>
                <li>La tortue et les signaux</li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};