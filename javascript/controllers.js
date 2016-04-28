angular.module("controllers", [])

.controller('ProgrammeController',function($scope, ProgrammeService) {
    $scope.view = 'Programme';
    $scope.programme = {};
    ProgrammeService.getProgramme()
        .then( function(result) {                                  
                $scope.programme=result.data;
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
    $scope.maps = [{
        address: 'Merrion Square, Dublin 2, Ireland',
        zoom: 16,
        width: 800      
        }];
    $scope.map = $scope.maps[0];
    $scope.contact = {};
    $scope.wasSubmitted = false;
    $scope.titles = ["Ms.", "Mr."];
    $scope.selectedTitle = $scope.titles[0];
    $scope.newsletter = {"option": "no"};
    $scope.hotel = {"option": "no"};
    $scope.transport = {"option": "no"};
    $scope.pickUp= {"optionA":false, "optionB": false };
    $scope.submit = function() {
    $scope.wasSubmitted = true;
    };
})

.controller('TermsController',function($scope) {
    $scope.view = "Terms & Conditions";
})



