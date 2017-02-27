// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("pollFactory");
app.factory('pollFactory', ["$http", function($http) {
    var factory = {};

    factory.create = function(newPoll, callback) {
        console.log("pollFactory.create: before", newPoll);
        $http.post("/new", newPoll).then(function (data) {
            console.log("pollFactory.create:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.all_polls = function(callback) {
        $http.get("/dashboard/").then(function (data) {
            console.log("pollFactory.all_polls:", data.data.polls);
            if (typeof(callback) === 'function') {
                callback(data.data.polls);
            }
        })
    };

    factory.show = function(id, callback) {
        console.log("pollFactory.show before $http.get: ", id);
        $http.get("/show/" + id).then(function (data) {
            console.log("pollFactory.show:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.update = function(id, votedFor, callback) {
        console.log("pollFactory.update:", id, votedFor);
        $http.delete("/delete/" + id).then(function (data) {
            console.log("pollFactory.delete:", data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    }

    factory.delete = function(id, callback) {
        console.log("pollFactory.delete:", id);
        $http.delete("/delete/" + id).then(function (data) {
            console.log("pollFactory.delete:", data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    }

    return factory;
}]);
