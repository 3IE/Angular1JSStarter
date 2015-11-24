'use strict';

/* jasmine specs for services go here */

describe('Controller: Home page', function () {
    var scope;

    beforeEach(module('starterKit'));


    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        $controller('HomeController',
            {$scope: scope});

        scope.$digest();
    }));

    it('should contain a list of images', function() {

        expect(scope.images[0]).toBe('happy1');

    });
});
