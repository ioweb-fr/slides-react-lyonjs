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
        return <Slide title="Raisons" cat="Pourquoi">
            <ul>
                <Slice subpart="1">
                    <li>Manipulations du DOM complexes et coûteuses</li>
                </Slice>
                <Slice subpart="2">
                    <li>Sac de noeud évenementiel difficilement maintenable</li>
                </Slice>
                <Slice subpart="3">
                    <li>Complexité des frameworks</li>
                </Slice>
                <Slice subpart="4">
                    <li>Problème du premier rendu</li>
                </Slice>
            </ul>
        </Slide>;
    }
});

var Comms = React.createClass({
    render: function(){
        return <Comment>
            <ul>
                <li>  React est rapide, bcp de démos sur Internet mais pas le but ici, ici but
                est de montrer pourquoi intéressant niveau programmation
                </li>
                <li>Beaucoup de soucis proviennent d'une somme d'interaction avec l'utilisateur qui n'a pas été prévue</li>
            </ul>
        </Comment>;
    }
});


module.exports = {
    slide : Sl,
    comments: Comms
};