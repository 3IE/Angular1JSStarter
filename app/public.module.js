/**
 * Created by stephanegarnier on 02/04/2014.
 */

'use strict';


var app = angular.module('starterKit', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'starterKitAppSDK',
    'ui.utils'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                resolve: {

                }
            });
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                controller: 'ProfileController',
                resolve: {

                }
            });
}]);

