angular.module('mainMenu')
.controller('MainMenuCtrl',['$scope','$state','superHeroData',function($scope,$state,superHeroData){
	// $scope.brands = superHeroData.getBrands();
	$scope.brands = [];
	superHeroData.getBrands(function(value){
		$scope.brands = value;
		$scope.$apply();
	});
	
	$scope.findBySH = function(){
		$state.go('/superHeros');	
	}
	
	$scope.searchText = "";
}])