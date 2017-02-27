// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("Server/Models/poll.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    question: {
        type: String,
        required: [true, "Question cannot be empty!"],
        minlength: [8, "Question must be at least 8 characters long!"],
        trim: true
    },
    option1: {
        type: String,
        required: [true, "Option 1 cannot be empty!"],
        minlength: [3, "Option 1 must be at least 3 characters long!"],
        trim: true
    },
    option2: {
        type: String,
        required: [true, "Option 2 cannot be empty!"],
        minlength: [3, "Option 2 must be at least 3 characters long!"],
        trim: true
    },
    option3: {
        type: String,
        required: [true, "Option 3 cannot be empty!"],
        minlength: [3, "Option 3 must be at least 3 characters long!"],
        trim: true
    },
    option4: {
        type: String,
        required: [true, "Option 4 cannot be empty!"],
        minlength: [3, "Option 4 must be at least 3 characters long!"],
        trim: true
    },
    votes1: {
        type: Number
    },
    votes2: {
        type: Number
    },
    votes3: {
        type: Number
    },
    votes4: {
        type: Number
    },
}, {timestamps: true});

var Poll = mongoose.model('Poll', PollSchema);
