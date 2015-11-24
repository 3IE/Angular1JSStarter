'use strict';

/* jasmine specs for services go here */

describe('Controller: Navigation Bar', function () {
    var scope;

    beforeEach(module('starterKit'));


    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        $controller('NavBarController',
            {$scope: scope});

        scope.$digest();
    }));

    it('should be collapse', function() {

        expect(scope.isCollapsed).toBeTruthy();

    });

    it('should contain the avatar name', function() {

        expect(scope.pseudo).toBe('BeHappy');

    });

});
