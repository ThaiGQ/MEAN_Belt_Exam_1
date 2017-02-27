console.log("successController");

app.controller('showController', ['$scope', "$cookies", '$location', '$routeParams', 'pollFactory', function($scope, $cookies, $location, rParams, pollFactory) {

    $scope.currentUser = $cookies.get("session")

    $scope.getPoll = function() {
        console.log("showController getPoll:", rParams.id);
        pollFactory.show(rParams.id, function (poll) {
            console.log("showController getPoll:", poll.poll);
            $scope.poll = poll.poll;
        })
    }

    $scope.vote = function(vote_id) {
        console.log("showController getPoll:");
        pollFactory.update( function (vote_id) {
            
        })
    }

    $scope.getPoll();
    // console.log("successController object:", $scope.getUser);
}]);
