// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("Server/Models/user.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name cannot be empty!"],
        trim: true
    },
    polls: [{
        type: Schema.Types.ObjectId, ref: "Poll"
    }],
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
