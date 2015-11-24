/**
 * Created by stephanegarnier on 26/08/14.
 */


'use strict';

angular.module('starterKit').
    controller('NavBarController', ['$scope', function ($scope) {
        $scope.isCollapsed = true;
        $scope.pseudo = 'BeHappy';
    }]);
