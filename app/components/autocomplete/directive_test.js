describe('app.components.vtdropdown tests', function () {

    var  rootScope,
        compiler,
        element,
            templateCache;
    var fields =
    [
      { type: "text", name: "firstname", label: "Name", required: true, data: "", validate: "alphanumeric", placeholder: "Aplha numeric only" },
      { type: "radio", name: "color_id", label: "Colors", options: [{ id: 1, name: "orange" }, { id: 2, name: "pink" }, { id: 3, name: "gray" }, { id: 4, name: "cyan" }], required: true, data: "" },
      { type: "text", name: "city", label: "City", validate: "alphabetical", required: true, data: "", placeholder: "Alphabets Only" },
      { type: "password", name: "pass", label: "Password", min: 6, max: 20, required: true, data: "" },
      { type: "searchbox", name: "teacher_id", label: "Teacher", options: [{ name: "Bala" }, { name: "Raghav" }, { name: "Satish" }], displayName: 'name', required: true },
      { type: "searchbox", name: "assignee_id", label: "Assignee", dropDownUrl: 'http://jsonplaceholder.typicode.com/users', displayName: 'name', required: true },
      { type: "checkbox", name: "car_id", label: "Cars", options: [{ id: 1, name: "bmw" }, { id: 2, name: "audi" }, { id: 3, name: "porche" }, { id: 4, name: "jaguar" }], required: true, data: "" }
    ];
    beforeEach(module('app.components.vtdropdown'));
    beforeEach(module('app.components.helpers'));
    beforeEach(module('app-templates'));

    

    beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
        
        rootScope = $rootScope.$new();
        compiler = $compile;
        $httpBackend.whenGET('http://jsonplaceholder.typicode.com/users').respond(fields);
    }));

    var buildDirective = function () {
        var elTemplate = '<vt-dropdown items="[]" model="test123" display-field="input" url="http://jsonplaceholder.typicode.com/users"> </vt-dropdown>';
        element = angular.element(elTemplate);
        compiler(element)(rootScope);
        rootScope.$digest();
    };

    it('directive is created', function () {
        buildDirective();        
    });
});