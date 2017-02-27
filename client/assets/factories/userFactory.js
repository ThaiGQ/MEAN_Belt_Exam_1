// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("userFactory");
app.factory('userFactory', ["$http", function($http) {
    var factory = {};

    factory.login = function(userData, callback) {
        $http.post("/login", userData).then(function (data) {
            console.log("userFactory.login:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.show = function(name, callback) {
        console.log("userFactory.show before $http.get: ", name);
        $http.get("/dashboard/" + name).then(function (data) {
            console.log("userFactory.show:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data.user);
            }
        })
    };


    return factory;
}]);
