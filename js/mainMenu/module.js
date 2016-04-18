angular.module('mainMenu', [])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "js/mainMenu/views/mainMenu.html",
      controller: "MainMenuCtrl"
    })
}])