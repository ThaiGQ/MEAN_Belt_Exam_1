// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log('Server/Config/routes.js');

var users = require("../controllers/users.js");
var polls = require("../controllers/polls.js");

module.exports = function(app){
    app.post("/login", users.login);
    app.get("/dashboard/:name", users.show);
    app.get("/dashboard", polls.all_polls);
    app.post('/new', polls.create);
    app.get("/show/:id", polls.show);
    app.put("/vote/:id", polls.vote);
    app.delete("/delete/:id", polls.delete)
}
