angular.module('superHeros',[])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('/superHeros', {
      url: "/superHeros",
      params: {
        brand: null
	  },
      templateUrl: "js/superHeros/views/superHeros.html",
      controller: "SuperHerosCtrl"
    })
}]);