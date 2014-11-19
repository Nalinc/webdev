(function(){
var app=angular.module("carstore",['ngSanitize']);

app.controller("carcontroller",function(){
this.car=cars;
this.test='<b> nalin </b>'
})

app.controller("tabController",function(){
this.tab=1;

this.isSet=function(t){
	return this.tab===t
}

this.setTab=function(t){
	this.tab=t
}

})

app.directive("carInfo",function(){
	return{
		restrict:'E',
		templateUrl:'js/ng/directives/car-info.html'
	};
});


cars=[{
	name:'Mercedes',
	model:'1234',
	description:'Monster on the road',
	features:'Top Speed:200Kmph <br> Milage:20km',
	path:'images/1.jpg'
	},
	{
	name:'lamborghini',
	model:'23qw1',
	description:'White Dragon',
	features:'Top Speed:200Kmph <br> Milage:20km',
	path:'images/2.jpg'
	}]

}())