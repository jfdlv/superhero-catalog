angular.module('superHeros')
.controller('SuperHerosCtrl',['$scope','$location','$uibModal','$stateParams','superHeroData','$state',function($scope,$location,$uibModal,$stateParams,superHeroData,$state){
				$scope.brand = $stateParams.brand
				$scope.showHeroInfoError = false;
				$scope.showMilestonesError = false;
				$scope.searchText = "";
				// $scope.superHeros= superHeroData.getSuperHeros($scope.brand);
				superHeroData.getSuperHeros($scope.brand,function(value){
					$scope.superHeros = value;
					$scope.$apply()
				})
				$scope.milestones = null;
				$scope.showMilestones = function(){
					if($scope.milestones){
						console.log($scope.milestones);
						return true;
					}
					return false;
				};
				$scope.existsHeroData = function(){
					if($scope.heroData){
						return true;
					}
					return false;
				};

				$scope.showSuperHeroInfo = function (superHero) {
					$scope.superHero = superHero;
					superHeroData.getSelectedHero(superHero,function(value){
						$scope.heroData = value ? value : null;
						$scope.superHero = value ? $scope.superHero : null;
						$scope.showHeroInfoError = value ? false : true;
						$scope.$apply();
					});
			  	};

		  		$scope.getMilestones = function () {
		  			console.log($scope.superHero);
				  	superHeroData.getHeroMileStones($scope.superHero,function(value){
				  		$scope.milestones = value;
				  		$scope.showMilestonesError = value ? false : true;
				  		$scope.$apply();
				  	});
			    };

			    $scope.hideMilestones = function(){
			    	$scope.milestones = null;
			    };

			  	$scope.back = function() { 
			  		console.log("$scope.milestones:" + $scope.milestones);
			  		console.log("$scope.heroData:" + $scope.heroData);
			  		console.log("$scope.superHero:" + $scope.superHero);
			  		if($scope.milestones || $scope.heroData || $scope.superHero)
			  		{
			  			$scope.milestones = null;
			  			$scope.heroData = null;	
			  			$scope.superHero = null;
			  			$scope.showMilestonesError = false;
			  		}
			  		else
			  		{
			  			console.log('todos null');
			  			$state.go('/');
			  		}
			  	}
}])
.controller('SuperHeroModalCtrl',['$scope','$uibModalInstance','superHeroData','superHero',function($scope,$uibModalInstance,superHeroData,superHero){
	  $scope.heroData = superHeroData.getSelectedHero(superHero);
	  $scope.close = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	  $scope.milestones = function () {
	  	var milestones = superHeroData.getHeroMileStones(superHero);
	    $uibModalInstance.close(milestones);
	  };
}]);