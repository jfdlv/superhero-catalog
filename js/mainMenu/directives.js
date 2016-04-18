angular.module('mainMenu')
.directive('brandContainer',function(superHeroData){
	return{
		restrict: 'E',
		scope: {
      		'brand': '=brand',
    	},
		templateUrl: 'js/mainMenu/views/brand-container-tpl.html',
		controller: function($scope,$element,$location){
				
					$scope.onBrandClick = function(){
						superHeroData.setSelectedBrand($scope.brand);
						$location.path('/superheros');
					}
		}

	}
});