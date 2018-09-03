angular.module('app.directives.validator', [])
  .directive('validate', function () {
    var validations = {
        alphabetical: /^([a-zA-Z]*(?=[^a-zA-Z]))./,
        alphanumeric: /^([a-zA-Z0-9]*(?=[^a-zA-Z0-9]))./,
        numeric: /^(\d*(?=[^\d]))./
    };

    return {
        require: 'ngModel',
        scope: {
            validate: '@'
        },

        link: function (scope, element, attrs, modelCtrl) {
            var pattern = validations[scope.validate] || scope.validate;

            modelCtrl.$parsers.push(function (inputValue) {
            var transformedInput = inputValue.replace(pattern, '$1');
            
            if (transformedInput != inputValue) {
                modelCtrl.$setViewValue(transformedInput);
                modelCtrl.$render();
            }

            return transformedInput;
            });
        }
    };
});