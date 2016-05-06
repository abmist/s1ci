angular.module("firstApp", ["controllers", "services", "directives", "ngRoute"]);

angular.module("firstApp").config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		.when('/intro', {
			templateUrl : 'templates/intro.html',
			controller  : 'IntroController'
		})
		.when('/programme', {
			templateUrl : 'templates/programme.html',
			controller  : 'ProgrammeController'
		})
		.when('/venue', {
			templateUrl : 'templates/venue.html',
			controller  : 'VenueController'
		})
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})
		.when('/speakers', {
			templateUrl : 'templates/speakers.html',
			controller  : 'SpeakersController'
		})
		.when('/partners', {
			templateUrl : 'templates/partners.html',
			controller  : 'PartnersController'
		})
		.when('/terms', {
			templateUrl : 'templates/terms.html',
			controller  : 'TermsController'
		})
		.otherwise({redirectTo: '/'}); 
});
