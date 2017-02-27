// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam

console.log("loginController");

app.controller('loginController', ['$scope', "$location", 'userFactory', function($scope, $location, userFactory) {

    $scope.login = function(){
        userFactory.login($scope.user, function (data) {
            console.log("loginController - login: $scope.user", $scope.user);
            console.log("loginController - login: data", data);
            $scope.flag = false;
            $scope.data = data;
            console.log("loginController - login: $scope.data", $scope.data);
            if ($scope.data.err) {
                $scope.flag = true;
            }
            else {
                console.log("loginController - success:", $scope.data.user.name);
                $location.url("/dashboard/" + $scope.data.user.name)
            }
            console.log("loginController flag:", $scope.flag);
            $scope.user = {};
        })
    }
}]);
