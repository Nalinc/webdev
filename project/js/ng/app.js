var app= angular.module('Holidays',['ngRoute','appCtrl']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'js/ng/partials/home.html',
        controller: 'hController'
      }).
      when('/about', {
        templateUrl: 'js/ng/partials/about.html',
        controller: 'aController'
      }).
      when('/popular', {
        templateUrl: 'js/ng/partials/popular.html',
        controller: 'aController'
      }).      
      otherwise({
        redirectTo: '/'
      });
  }]);


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


