/**
 * Created by stephanegarnier on 19/11/14.
 */
(function () {
    'use strict';

    angular.module('starterKitAppSDKInterfaces')
        .factory('starterKitAppSDKInterfacesUser',[ 'starterKitAppSDKServicesUser', '$q', function(starterKitAppSDKServicesUser, $q){

            var starterKitAppSDKInterfacesUser = {};

        starterKitAppSDKInterfacesUser.isValid = function(value){

            var defered = $q.defer();

            starterKitAppSDKServicesUser.isValid(value)
                .then(function(data){

                    defered.resolve(data);
                })
                .catch(function(error){

                    defered.reject(error);
                });

            return defered.promise;
        };

            return starterKitAppSDKInterfacesUser;
    }]);
})();