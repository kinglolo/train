var app = angular.module('app', ['ngRoute']);
app.directive('header', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '@'
        },
        templateUrl: '/header/header.html',
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});

app.directive('footer', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '@'
        },
        templateUrl: '/footer/footer.html',
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});

app.config(function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: '/monitor/monitor.html',
            controller: ''
        })

        .when('/monitor', {
            templateUrl: '/monitor/monitor.html',
            controller: ''
        })

        .when('/analytics', {
            templateUrl: '/analytics/analytics.html',
            controller: ''
        })
});
