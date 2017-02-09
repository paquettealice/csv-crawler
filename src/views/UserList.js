/**
 * Created by alice on 07/02/17.
 */

var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m(".user-list-item", user.firstName + " " + user.lastName)
        }))
    }
};
