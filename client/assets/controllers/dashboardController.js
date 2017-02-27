// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("successController");

app.controller('dashboardController', ['$scope', "$cookies", '$location', '$routeParams', 'pollFactory', "userFactory", function($scope, $cookies, $location, rParams, pollFactory, userFactory) {
    console.log("dashboardController:", rParams);
    $cookies.put('session', rParams.name);
    $scope.currentUser = $cookies.get("session")
    console.log("currentUser:", $scope.currentUser);

    $scope.getUser = function() {
        console.log("dashboardController getUser:", rParams.name);
        userFactory.show(rParams.name, function (user) {
            console.log("dashboardController getUser:", user);
            $scope.user = user;
        })
    }

    $scope.all_polls = function() {
        console.log("dashboardController all_polls before:");
        pollFactory.all_polls(function (polls) {
            console.log("dashboardController all_polls:", polls);
            $scope.polls = polls;
        })
    }

    $scope.delete = function (poll_id) {
        console.log(poll_id);
        pollFactory.delete (poll_id)
        $scope.all_polls();
    }

    $scope.logout = function () {
        $cookies.remove("session");
        $location.url("/login")
    }
    /* on load time */
    $scope.getUser();
    $scope.all_polls();
    // console.log("successController object:", $scope.getUser);
}]);
