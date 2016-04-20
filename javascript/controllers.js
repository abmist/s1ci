angular.module("controllers", [])
.controller('HomeController',function($scope) {
       $scope.talk = "This is a test.";
       $scope.moreInfo=false;
       $scope.showMoreInfo = function(){
	  return ($scope.moreInfo ? $scope.moreInfo=false : $scope.moreInfo=true)
	}
  })
.controller('ProgrammeController',function($scope) {
       $scope.talk = "This is a test.";
  })
.controller('TicketsController',function($scope) {
       $scope.talk = "This is a test.";
  });


