// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("newController");

app.controller('newController', ['$scope', "$cookies", "$location", 'pollFactory', function($scope, $cookies, $location, pollFactory) {

    var currentUser = $cookies.get("session")

    $scope.create = function(){
        $scope.newPoll._user = currentUser;
        console.log("newController - create: before", $scope.newPoll);
        pollFactory.create($scope.newPoll, function (data) {
            console.log("newController - create: $scope.newPoll", $scope.newPoll);
            console.log("newController - create: data", data);
            $scope.flag = false;
            $scope.data = data;
            console.log("newController - create: $scope.data", $scope.data);
            if ($scope.data.err) {
                $scope.flag = true;
            }
            else {
                console.log("newController - success:", $scope.data.poll.question);
                $location.url("/dashboard/" + currentUser)
            }
            console.log("newController flag:", $scope.flag);
            $scope.newPoll = {};
        })
    }
}]);
