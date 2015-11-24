/**
 * Created by stephanegarnier on 13/08/14.
 */

'use strict';

angular.module('starterKit').
    controller('HomeController', ['$scope', 'starterKitAppSDKInterfacesUser', function ($scope, starterKitAppSDKInterfacesUser) {

        $scope.errors = {
            invalidName: ''
            };
        $scope.isValid = function(value){
            starterKitAppSDKInterfacesUser.isValid(value)
                .then(function(data){
                    return data;
                })
                .catch(function(data){
                    $scope.errors.invalidName = 'invalid name WS';
                    return data;
                });
        };
        $scope.images = ['happy1', 'happy2'];


    }]);