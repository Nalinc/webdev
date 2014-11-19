
var app= angular.module('Holidays',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'js/ng/partials/about.html',
        controller: 'hController'
      }).
      when('/about', {
        templateUrl: 'js/ng/partials/ab.html',
        controller: 'hController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.controller("hController",function(){

});


app.directive("ngHeader",function(){
	return{
		restrict:'E',
		templateUrl:'js/ng/directives/ng-header.html'
	};
});

app.directive("ngFooter",function(){
	return{
		restrict:'E',
		templateUrl:'js/ng/directives/ng-footer.html'
	};
});


