/**
 * Created by alice on 07/02/17.
 */


var m = require("mithril");

// Components
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");

m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm
});
// m.mount(document.body, UserList);