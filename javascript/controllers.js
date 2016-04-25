angular.module("controllers", [])

.controller('HomeController',function($scope) {
    $scope.talk = "This is a test.";
     /*  $scope.moreInfo=false;
       $scope.showMoreInfo = function(){
	  return ($scope.moreInfo ? $scope.moreInfo=false : $scope.moreInfo=true) 
	}*/
  })

.controller('VenueController',function($scope) {
     $scope.view = 'Venue';
     $scope.maps = [{
        address: 'North Wall Quay, Dublin 1, Ireland',
        zoom: 16,
        width: 800      
        }];

  })

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

