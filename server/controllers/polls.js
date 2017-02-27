// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("Server/Controllers/polls.js");

var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model("User")


module.exports = {
    create: function(req, res){
        console.log(req.params);
        User.findOne({name: req.body._user}, function(err, user){
            console.log("create Poll: user", user);
            var poll = new Poll({
                _user: user,
                question: req.body.question,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4,
                votes1: 0,
                votes2: 0,
                votes3: 0,
                votes4: 0
            });

            user.polls.push(poll)
            poll.save(function(err, poll) {
                if(err) {
                    console.log('Unable to add new User!' + err);
                    res.json({err:err})
                }
                else {
                    console.log('New User added to database!');
                    console.log(poll);
                    res.json({poll:poll});
                }
                console.log("Server/Controllers/polls.js - create:", poll);
            })
        })
    },

    show: function(req, res){
        console.log("polls.js show req.body:", req.params);
        Poll.findOne({_id: req.params.id}, function(err, poll) {
            console.log("polls.js show:", req.params.id);
            console.log("polls.js show:", poll.poll);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            res.json({poll:poll});
        })
    },

    all_polls: function(req, res) {

        Poll.find({}).populate("_user").exec(function(err, polls) {
            console.log("populate _user:", polls);
            if (err) {
                console.log("Danger! Danger! Imminent Warp Core breach detected!" + err);
            }
            console.log("users.js all_polls:", polls);
            res.json({polls:polls});
        })
    },

    delete: function(req, res){
        Poll.remove({_id: req.params.id}, function (err) {
            console.log("polls.js delete:", req.params.id);
            if(err) {
                console.log('Unable to delete Poll!' + err);
            }
            else {
                console.log('Poll successfully deleted!');
            }
            // res.json({placeholder:'delete'});
        })
    },
}
