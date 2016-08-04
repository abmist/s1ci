angular.module("directives", [])

.directive('speakersInfo', function() {
    return {
        restrict: 'E',    
        scope: {
          speaker: '=info'    
        },
        templateUrl: 'templates/directives/speakersInfo.html'
    };
})

.directive('partnersInfo', function() {
    return {
        restrict: 'E',    
        scope: {
          partner: '=info'    
        },
        templateUrl: 'templates/directives/partnersInfo.html'
    };
})

.directive('mapSummit', function() {
    return {
        restrict: 'E',
        link: function($scope, element) {
            var thePosition = {lat: 53.347868, lng: -6.239501};
            var mapOptions = {
                center: thePosition,
                zoom: 16,
                scrollwheel: false,
                draggable: false,
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var marker= new google.maps.Marker({
                position:thePosition,
                animation:google.maps.Animation.BOUNCE});
            marker.setMap(map);
        }
    };
})

.directive('mapOffice', function() {
    return {
        restrict: 'E',
        link: function(scope, element) {
            var thePosition = {lat: 53.3389021, lng: -6.252878499999952};
            var mapOptions = {
                center: thePosition,
                zoom: 17,
                scrollwheel: false,
                draggable: false,
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var marker= new google.maps.Marker({
                position:thePosition,
                animation:google.maps.Animation.BOUNCE});
            marker.setMap(map);
        }  
    };
});
