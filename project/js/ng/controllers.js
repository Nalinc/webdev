var appCtrl=angular.module('appCtrl',[]);

app.controller("hController",function(){

});


app.controller("aController",function($scope,$http){

  $http.get('js/ng/lDetails.json').success(function(data) {
    $scope.datum = data;

	});
  
});

