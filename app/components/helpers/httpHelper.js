angular.module('app.components.helpers', [])
    /**
     * A helper class to retrieve the data. Also helps to return mock Data.
     * We can enchance this by proper error handling.
     */
    .service('httpHelper', ['$q', '$http', function($q, $http) {

        var configuration = {
            name: 'Car Configuration'
        };
        var data1 = [{}, {}];
        var errorContainer = {
            error: 'Unknown error'
        };

        this.getMock = function(id, needError) {
            //return $http.get('userData.json');
            var deferred = $q.defer();
            needError ? deferred.reject(errorContainer): deferred.resolve(configuration);
            return deferred.promise;
        }

        this.get = function(url, options) {
            return $http.get(url, options)
                    .then(function(res) {
                        return res.data;
                    })
                    .catch(function() {
                        return {
                            hasError: true
                        }
                    });
        };
    }])