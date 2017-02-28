console.log("successController");

app.controller('showController', ['$scope', "$cookies", '$location', '$routeParams', 'pollFactory', function($scope, $cookies, $location, rParams, pollFactory) {

    $scope.currentUser = $cookies.get("session")
    console.log("showController currentUser: ", $scope.currentUser);

    $scope.getPoll = function() {
        console.log("showController getPoll:", rParams.id);
        pollFactory.show(rParams.id, function (poll) {
            console.log("showController getPoll:", poll.poll);
            $scope.poll = poll.poll;
        })
    }

    $scope.vote = function(option) {
        var vote = {
            option: option
        }
        console.log("showController $scope.option: ", vote);
        pollFactory.vote($scope.poll._id, vote, function () {
            $scope.getPoll();
        })
    }

    $scope.getPoll();
    // console.log("successController object:", $scope.getUser);
}]);
