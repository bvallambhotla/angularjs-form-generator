describe('app.directives.validator tests', function () {
    
    var rootScope,        
        compiler,
        element;

    beforeEach(module('app.directives.validator'));

    beforeEach(inject(function ($rootScope, $compile) {
        rootScope = $rootScope.$new();
        compiler = $compile;
    }));

    var buildDirective = function () {
        var elTemplate = ' <input type="text" validate="alphanumeric" required="true" ng-model="test123"/>';
        element = angular.element(elTemplate);
        compiler(element)(rootScope);
        rootScope.$digest();
    };

    it('directive is created', function () {
        buildDirective();
        expect(element[0].required).toBeTruthy();
    });
});