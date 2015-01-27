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
        return <Slide title="Concepts" cat="Fonctionnement">
            <ul>
                <Slice subpart="1">
                    <li>Isomorphismes : rendu côté serveur</li>
                </Slice>
                <Slice subpart="2">
                    <li>Virtual DOM et patchs</li>
                </Slice>
                <Slice subpart="3">
                    <li>Mixins</li>
                </Slice>
            </ul>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>Problème de Twitter</li>
                <li>Un composant React est un module compatible CommonJS</li>
                <li>Aller plus loin : react-nexus</li>
                <li>Pas d'héritage dans React -> Les différents états permettent de gérer des mixins sans contraintes</li>
                <li>Mixins multiples</li>

                <li><strong>Quand React est-il utile</strong></li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};