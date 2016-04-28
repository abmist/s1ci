angular.module("services", [])

.factory('ProgrammeService', function($http) {
       
    return  { getProgramme: getProgramme };

    function getProgramme() {
        return $http.get('information.json'); 
    }
})

.factory('SpeakersService', function($http) {
       
    return  { getSpeakers: getSpeakers };

    function getSpeakers() {
        return $http.get('information.json'); 
    }
})

.factory('PartnersService', function($http) {
       
    return  { getPartners: getPartners };

    function getPartners() {
        return $http.get('partners.json'); 
    }
});
