angular.module('superHeros',[])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/superheros', {
    templateUrl: 'js/superHeros/views/superheros.html',
    controller: 'SuperHerosCtrl'
  });
}]);