angular.module('superheroApp', [
  'ui.router',
  'ui.bootstrap',
  'mainMenu',
  'superHeros',
  'commons'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}]);