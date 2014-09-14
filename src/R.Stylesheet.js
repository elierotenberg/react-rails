var R = require("../");
var _ = require("lodash");

var Stylesheet = function Stylesheet() {
    this._rules = [];
};

_.extend(Stylesheet.prototype, /** @lends R.Stylesheet.prototype */ {
    registerRule: function registerRule(selector, style) {
        R.Debug.dev(function() {
            assert(_.isPlainObject(style), "R.Stylesheet.registerClassName(...).style: expecting Object.");
        });
        this._rules.push({
            selector: selector,
            style: style,
        });
    },
    slowlyExportToCSS: function toCSS(indent, shouldAutoPrefix) {
        if(_.isUndefined(indent)) {
            indent = "  ";
        }
        if(_.isUndefined(shouldAutoPrefix)) {
            shouldAutoPrefix = true;
        }
        var unprefixedCSS = _.map(this._rules, function(style, selector) {
            return selector + " {\n" + R.Style.fromReactStyleToCSS(style) + "}\n\n";
        }).join("");
        if(!shouldAutoPrefix) {
            return unprefixedCSS;
        }
        else {
            return autoprefixer.process(unprefixedCSS).css;
        }
    },
});

module.exports = {
    Stylesheet: Stylesheet,
};
