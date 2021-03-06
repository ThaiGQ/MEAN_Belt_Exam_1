// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("successController");

app.controller('dashboardController', ['$scope', "$cookies", '$location', "$window", '$routeParams', 'pollFactory', "userFactory", function($scope, $cookies, $location, $window, rParams, pollFactory, userFactory) {
    console.log("HEYOOOO", $cookies.get("session"))
    if (!$cookies.get("session")) {
        $location.url("/login")
    }
    console.log("dashboardController rParams:", rParams);
    $scope.currentUser = $cookies.get("session");
    console.log("dashboardController currentUser:", $scope.currentUser);

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
        $window.localStorage.clear();
        $cookies.remove("session");
        $location.url("/login")
    }
    /* on load time */
    $scope.getUser();
    $scope.all_polls();
    // console.log("successController object:", $scope.getUser);

    // Code below used to check user database only
    // $scope.all_users = function() {
    //     console.log("dashboardController all_users before:");
    //     userFactory.all_users(function (users) {
    //         console.log("dashboardController all_users:", users);
    //         $scope.users = users;
    //     })
    // }
    //
    // $scope.all_users();
}]);
