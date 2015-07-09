/**
 * Created by stephanegarnier on 13/08/14.
 */

'use strict';

angular.module('starterKit').
    controller('HomeController', ['$scope', 'starterKitAppSDKInterfacesUser', function ($scope, starterKitAppSDKInterfacesUser) {

        $scope.errors = {
            invalid_name: ""
            };
        $scope.isValid = function(value){
            starterKitAppSDKInterfacesUser.isValid(value)
                .then(function(data){
                    return data;
                })
                .catch(function(data){
                    $scope.errors.invalid_name = 'invalid name WS';
                    return data;
                });
        };


    }]);