angular.module('mainMenu')
.controller('MainMenuCtrl',['$scope','$location','superHeroData',function($scope,$location,superHeroData){
	// $scope.brands = superHeroData.getBrands();
	$scope.brands = [];
	superHeroData.getBrands(function(value){
		$scope.brands = value;
		$scope.$apply();
	});
}])