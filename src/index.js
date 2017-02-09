/**
 * Created by alice on 07/02/17.
 */


var m = require("mithril");
var UserList = require("./views/UserList");

m.route(document.body, "/list", {
    "/list": UserList
});
// m.mount(document.body, UserList);