angular.module("firstApp", ["controllers", "services", "ngRoute"]);

angular.module("firstApp").config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		.when('/programme', {
			templateUrl : 'templates/programme.html',
			controller  : 'ProgrammeController'
		})
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'AboutController'
		})
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})
		.when('/speakers', {
			templateUrl : 'templates/speakers.html',
			controller  : 'ContactController'
		})
		.otherwise({redirectTo: '/'}); 
});
