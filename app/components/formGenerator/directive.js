
/**
  * @ngdoc directive
  * @name formGenerator.directive:controller: 
  * @restrict 'E'
  * @element ANY
  * @scope
  * priority: 1000
  * @description
  * A component which generates form automtically on the fly(along with submit button). All this needs is a configuration as an input.
  * @param {fields} Array An array of fields(each contain different values to generate a field
  * @param {model} object The object that should be binded to the form(all form-fields will be filled into this model)
  * @param {formName} object Name for the generated form
  * 
  * Structure of Fields object
  *      @param {type} string can be 'text', 'password', 'text', 'radio', 'checkbox', 'searchbox'.
  *      @param {name} string Just the name of the field.
  *      @param {label} string Label to display for the field
  *      @param {required} boolean 
  *      @param {validate} string can be 'alphanumeric', 'alphabetical', 'numeric'
  *      @param {placeholder} string For displaying placeholder in 'text' type input
  *      @param {options} array Values to be rendered for fields. Applicable for 'checkbox', 'searchbox', 'radio'
  *      @param {dropDownUrl} url A valid url from where the 'searchbox' field pulls the data from.
**/
angular.module('app.components.formGenerator', ['app.directives.validator'])
  .directive("formGenerator", function($compile) {
    return {
        restrict: "E",
        terminal: true,
        priority: 1000,
        restrict: 'E',
        controller: function() {
            var vm = this;
            vm.model = {};
        },
        bindToController: {
          fields: '=',
          model: '=?',
          formName: '=?',
          onSubmit: '&'
        },
        controllerAs: 'formCtrl',
        templateUrl: 'components/formGenerator/directive.html',
        link: function(scope, element, attrs) {
        }
    }
})
