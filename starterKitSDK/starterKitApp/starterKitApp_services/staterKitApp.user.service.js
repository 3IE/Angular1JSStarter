/**
 * Created by stephanegarnier on 19/11/14.
 */
(function () {
    'use strict';

    angular.module('starterKitAppSDKServices')
        .factory('starterKitAppSDKServicesUser', [ '$http', '$q', function($http, $q) {

            var starterKitAppSDKServicesUser = {};
            starterKitAppSDKServicesUser.isValid = function (value) {
            var defered = $q.defer();

                defered.reject(false);
            return defered.promise;
        };

            return starterKitAppSDKServicesUser;
    }]);

})();