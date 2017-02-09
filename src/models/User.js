/**
 * Created by alice on 07/02/17.
 */

var m = require("mithril");

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "http://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
        .then(function(result) {
            User.list = result.data;
        })
    }
};

module.exports = User;