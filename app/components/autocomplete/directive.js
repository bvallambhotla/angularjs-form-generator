angular.module('app.components.vtdropdown', ['app.components.helpers'])
/**
  * @ngdoc directive
  * @name autocomplete.directive:controller: 
  * @restrict 'E'
  * @element ANY
  * @scope
  * priority: 1000
  * @description
  * A component which renders a searcheable dropdown and also capable of pulling the options from the server.
  * Will show the search field only whne the number of items is greater than 3
  * @param {model} property A property to bind the selected value from the control.
  * @param {items} array List of items to display
  * @param {disabled} boolean Makes the control disabled
  * @param {url} url Source from which, this control pulls the data(supports only http GET)
  * @param {displayField} string The field from which the name of the selected option
  * @param {name} string Name to identify the field in a form
  * @param {on-change} function Triggers this callback when an item is selected.
**/
.directive('vtDropdown', function (httpHelper, $log) {
    return {
      scope: {},
      restrict: 'E',
      bindToController: {
        model: '=',
        items: '=?',
        disabled: '=?',
        dependentOn: '=?',
        url: '@',
        displayField: '@',
        name: '@',
        onChange: '&'
      },
      controller: function ($scope) {
        var vm = this;
        function init() {
          vm.showDropdown = false;
          vm.showList = showList;
          vm.complete = complete;
          vm.selectItem = selectItem;
          if(vm.url) {
            loadFromServer();
          }
        } 

        function showList(){
            vm.showDropdown = !vm.showDropdown;            
            if(vm.showDropdown) {
              vm.complete();
            }
        }

        function complete(searchText){
          if(searchText) {
            var output=[];
            angular.forEach(vm.items, function(listItem){
              if(listItem[vm.displayField] && 
                listItem[vm.displayField].toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
                output.push(listItem);
              }
            });
            vm.filterItems = output;
          }
          else {
            vm.filterItems = vm.items;
          }
        }

        function selectItem(item, e){
          e.preventDefault();
          vm.model = item;
          vm.onChange && vm.onChange(item);
          vm.searchText = '';
          vm.showDropdown = false;
          vm.filterItems = null;
        }

        function loadFromServer() {
          httpHelper.get(vm.url)
            .then(function(data){
              if(data.hasError) {
                $log.error('::vt-dropdown:: Failed to load item from server.');
              }
              else {
                vm.items = data;
              }
            });
        }

        init();
      },
      link: function(scope, element, attrs, controller) {
        controller.dependentOn = angular.isUndefined(attrs.dependentOn) ? true: controller.dependentOn;
      },
      controllerAs: 'dropdownCtrl',
      templateUrl: 'components/autocomplete/directive.html'
    };
});