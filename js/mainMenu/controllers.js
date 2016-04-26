angular.module('mainMenu')
.controller('MainMenuCtrl',['$scope','$state','superHeroData','$interval',function($scope,$state,superHeroData,$interval){
	// $scope.brands = superHeroData.getBrands();
	$scope.brands = [];
	superHeroData.getBrands(function(value){
		$scope.brands = value;
		$scope.$apply();
	});

	// $interval(function() {
 //        superHeroData.showCharsInfo();
 //        console.log('a ver');
 //    }, 3000);

	superHeroData.getAllCharacters();

	$scope.findBySH = function(){
		$state.go('/superHeros');	
	}
	
	
	$scope.searchText = "";
}])