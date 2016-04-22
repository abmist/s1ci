angular.module("services", [])
       .factory('ProgrammeService', function($http) {
               
           return  { getProgramme: getProgramme };
 
           function getProgramme() {
                return $http.get('programme.json'); 
           }
       });
