/**
 * Created by stephanegarnier on 02/04/2014.
 */

'use strict';


var app = angular.module('starterKit', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'starterKitAppSDK',
    'ui.utils',
    'angular-google-analytics'
]);

app.config(['$stateProvider', '$urlRouterProvider', 'AnalyticsProvider', function ($stateProvider, $urlRouterProvider, AnalyticsProvider) {
        $urlRouterProvider.otherwise('/');

        AnalyticsProvider.setAccount([
            {
                tracker: 'UA-12345-12',
                name: 'tracker1',
                cookieConfig: {
                    cookieDomain: 'foo.example.com',
                    cookieName: 'myNewName',
                    cookieExpires: 20000
                },
                crossDomainLinker: true,
                crossLinkDomains: ['domain-1.com', 'domain-2.com'],
                trackEvent: true,
                trackEcommerce: true
            }
        ]);


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

