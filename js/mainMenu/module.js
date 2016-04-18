angular.module('mainMenu', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/mainMenu/views/mainMenu.html',
    controller: 'MainMenuCtrl'
  });
}])