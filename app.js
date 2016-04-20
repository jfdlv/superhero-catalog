angular.module('superheroApp', [
  'ui.router',
  'ui.bootstrap',
  'firebase',
  'mainMenu',
  'superHeros',
  'commons'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}]);