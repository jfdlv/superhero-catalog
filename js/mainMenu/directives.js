angular.module('mainMenu')
.directive('brandContainer',function(superHeroData){
	return{
		restrict: 'E',
		scope: {
      		'brand': '=brand',
    	},
		templateUrl: 'js/mainMenu/views/brand-container-tpl.html',
		controller: function($scope,$element,$state){
				
					$scope.onBrandClick = function(){
						superHeroData.setSelectedBrand($scope.brand);
						$state.go('/superHeros');
					}
		}

	}
});