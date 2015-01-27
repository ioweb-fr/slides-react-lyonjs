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
        return <Slide cat="Programmation réactive" title="Pour le web">
            <ul>
                <Slice subpart="1">
                    <li>Dans le cas du web : <ul>
                        <li>L'état est une structure de donnée clé/valeur</li>
                        <li>Le rendu est le DOM</li>
                        </ul>
                    </li>
                </Slice>
                <Slice subpart="2">
                    <li>Le rendu est décrit de façon déclarative</li>
                </Slice>
                <Slice subpart="3">
                    <li>Dans un cas non-reactif : <ul>
                        <li>L'état et le rendu sont confondus</li>
                        <li>Le rendu est décrit par la somme des effets de bords</li>
                        <li>L'état existe mais n'est pas centralisé</li>
                        </ul>
                    </li>
                </Slice>
                <Slice subpart="4">
                    <li>Régle de validité : l'état peut être exporté puis ré-importé</li>
                </Slice>
            </ul>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>Seul l'état est modifié par les interactions</li>
                <li>toute manipulation du DOM dans du code impératif (jQuery) brise la réaction</li>
                <li>    L'état est indépendant, on peut idéalement l'envoyer à quelqu'un d'autre qui en l'appliquant au même code
                obtiendra la même réaction, sans pour autant être passé par les même interactions</li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};