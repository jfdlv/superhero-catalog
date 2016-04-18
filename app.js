angular.module('superheroApp', [
  'ngRoute',
  'ui.bootstrap',
  'mainMenu',
  'superHeros',
  'commons'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);