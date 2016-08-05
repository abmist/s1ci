angular.module("controllers", [])

.controller('HomeController',function($scope) {
    $scope.view = 'Home';
})

.controller('VenueController',function($scope) {
        $scope.view = 'Venue';
})

.controller('ProgrammeController',function($scope, ProgrammeService) {
    $scope.view = 'Programme';
    $scope.programme = {};
    ProgrammeService.getProgramme()
        .then( function(result) {                                  
                $scope.programme = result.data;
                })
        .catch( function(error) { 
                console.log('There is an error.', error); 
                });
    $scope.orderF = function(x) {
        $scope.order = x;
    };
})

.controller('SpeakersController',function($scope, SpeakersService) {
    $scope.view = 'Speakers';
    $scope.speakers = {};
    SpeakersService.getSpeakers()
        .then( function(result) {                                  
                $scope.speakers=result.data;
                })
        .catch( function(error) { 
                console.log('There is an error.', error); 
                }); 
})

.controller('PartnersController',function($scope, PartnersService) {
    $scope.view = 'Partners';
    $scope.partners = {};
    PartnersService.getPartners()
        .then( function(result) {                                  
                $scope.partners=result.data;
                })
        .catch( function(error) { 
                console.log('There is an error.', error); 
                });  
})

.controller('ContactController',function($scope) {
    $scope.view = 'Contact';
    $scope.contact = {};
    $scope.wasSubmitted = false;
    $scope.newsletter = {"option": "no"};
     /*In this controller there are included additional elements,
     because initial plan was to have a larger contact form. 
    Finally it was decided to just leave name, email, message and newsletter option.
    In the event that you wanted to include these extra elements in the contact form,
     you should also add their validations.*/
    //$scope.titles = ["Ms.", "Mr."];
    //$scope.selectedTitle = $scope.titles[0];
    //$scope.hotel = {"option": "no"};
    //$scope.transport = {"option": "no"};
    //$scope.pickUp = {"optionA":false, "optionB": false};
    $scope.submit = function() {
        $scope.wasSubmitted = true;
    };
})

.controller('TermsController',function($scope) {
    $scope.view = "Legal";
})

.controller('NavigationController', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  }])



