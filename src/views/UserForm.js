/**
 * Created by grosb on 2/9/2017.
 */

var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[type=text][placeholder=Last name]", {value: User.current.lastName}),
            m("button.button[type=submit]", "Save")
        ])
    }
};