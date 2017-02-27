// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 24, 2017
// Track: MEAN
// Belt Exam


var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: '/partials/login.html',
        controller: 'loginController'
    })
    .when('/dashboard/:name', {
        templateUrl: '/partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/new', {
        templateUrl: '/partials/new.html',
        controller: 'newController'
    })
    .when('/show/:id', {
        templateUrl: '/partials/show.html',
        controller: 'showController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
