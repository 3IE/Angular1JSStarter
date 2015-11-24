/**
 * Created by stephanegarnier on 13/08/14.
 */

'use strict';

angular.module('starterKit').
    controller('ProfileController', ['$scope', function ($scope)  {
        $scope.description = 'A big project';
        $scope.name = 'developer developer';
        $scope.schools = [{name: 'school 1'}, {name: 'school 2'}];
    }]);