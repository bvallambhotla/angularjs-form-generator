'use strict';

angular.module('app.configuration', ['ngRoute', 'app.components.vtdropdown', 'app.components.formGenerator'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'modules/configuration/configuration.html',
    controller: 'configurationController',
    controllerAs: 'vm'
  });
}])

.controller('configurationController', ['configService', function(configService) {
    var vm = this;
    vm.model = {};
    vm.selectedItem = {};

    var onConfigLoad = function(data) {
      vm.entity = data;
    };
    var onDataError = function() {};

    //Read the form configuration from server.
    configService.get()
      .then(onConfigLoad, onDataError);

    vm.itemSelected = function(selectedItem) {
      console.error(selectedItem);
    };

    vm.submitForm = function(){
      $log.debug(vm.model);
    }

}]);