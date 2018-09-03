angular.module('app.configuration')
    .service('configService', ['$q',function($q) {
        
        var formConfiguration = {
            name : "Test Drive Registration", 
            fields :
              [
                { type: "text", name: "firstname", label: "Name", required: true, validate: "alphanumeric", placeholder: "Aplha numeric only"},
                { type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, when:"firstname"},    
                { type: "radio", name: "car_id", label: "Cars" , options:[{id: 1, name: "i20"},{id: 2, name: "Grand i10"}], required: true},
                { type: "text", name: "city", label: "City" , validate: "alphabetical", required: true, placeholder: "Alphabets Only"},
                { type: "checkbox", name: "needPickup", label: "Need Pickup" , options:[{id: 1, name: ""}], required: true},
                { type: "searchbox", name: "pickup_location", label: "Location", options:[{name: "Home"},{name: "Office"}, {name: "Other"}], displayName: 'name', when: 'needPickup'},
                { type: "searchbox", name: "representatve", label: "Advisor", dropDownUrl: 'https://jsonplaceholder.typicode.com/users', displayName: 'name'},
                { type: "textarea", name: "comments", label: "Comments"},
              ]
            };
        var errorContainer = {
            error: 'Unknown error'
        };

        this.get = function(id, needError) {
            var deferred = $q.defer();
            needError ? deferred.reject(errorContainer): deferred.resolve(formConfiguration);
            return deferred.promise;
        }
    }])