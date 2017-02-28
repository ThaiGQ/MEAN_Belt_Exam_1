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
    all_polls: function(req, res) {

        Poll.find({}).populate("_user").exec(function(err, polls) {
            console.log("populate _user:", polls);
            if (err) {
                console.log("Danger! Danger! Imminent Warp Core breach detected!" + err);
            }
            console.log("polls.js all_polls:", polls);
            res.json({polls:polls});
        })
    },

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
            console.log("polls.js show:", poll);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            res.json({poll:poll});
        })
    },

    vote: function (req, res) {
        console.log("polls.js vote req.params", req.params);
        console.log("polls.js vote req.body", req.body);
        Poll.findOne({_id: req.params.id}, function(err, poll) {
            console.log("polls.js vote:", req.body.option);
            console.log("polls.js vote:", poll);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            if (poll) {
                switch (req.body.option) {
                    case "option_1":
                        poll.votes1 += 1;
                        break;
                    case "option_2":
                        poll.votes2 += 1;
                        break;
                    case "option_3":
                        poll.votes3 += 1;
                        break;
                    case "option_4":
                        poll.votes4 += 1;
                        break;
                }
                poll.save(function(err, poll) {
                    if(err) {
                        console.log('Unable to update new vote!' + err);
                        res.json({err:err})
                    }
                    else {
                        console.log('Vote tallied!');
                        console.log(poll);
                        res.json({poll:poll});
                    }
                    console.log("Server/Controllers/polls.js - vote:", poll);
                })
            }
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
