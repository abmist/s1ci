angular.module("controllers", [])
.controller('HomeController',function($scope) {
       $scope.talk = "This is a test.";
     /*  $scope.moreInfo=false;
       $scope.showMoreInfo = function(){
	  return ($scope.moreInfo ? $scope.moreInfo=false : $scope.moreInfo=true) 
	}*/
  })

.controller('ProgrammeController',function($scope, ProgrammeService) {
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
    }
  });


