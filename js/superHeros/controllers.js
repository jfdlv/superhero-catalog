angular.module('superHeros')
.controller('SuperHerosCtrl',['$scope','$location','$uibModal','$stateParams','superHeroData','$state',function($scope,$location,$uibModal,$stateParams,superHeroData,$state){
				$scope.brand = $stateParams.brand
				$scope.superHeros= superHeroData.getSuperHeros($scope.brand);
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
				}

				$scope.showSuperHeroInfo = function (superHero) {
					$scope.superHero = superHero;
					$scope.heroData = superHeroData.getSelectedHero(superHero);


				 //    var modalInstance = $uibModal.open({
				 //      animation: $scope.animationsEnabled,
				 //      templateUrl: 'js/superHeros/views/superhero-modal.html',
				 //      controller: 'SuperHeroModalCtrl',
				 //      size: size,
				 //      resolve: {
				 //        superHero: function () {
				 //          return superHero;
				 //        }
				 //      }
				 //    });

				 //    modalInstance.result.then(function (milestones) {
				 //      $scope.milestones = milestones;
				 //      console.log($scope.milestones);
				 //    }, function () {
				 //      console.log('Modal dismissed at: ' + new Date());
				 //    });
			  	};

		  		$scope.getMilestones = function () {
		  			console.log($scope.superHero);
				  	$scope.milestones = superHeroData.getHeroMileStones($scope.superHero);
				  	console.log($scope.milestones);
				  	
			    };

			    $scope.hideMilestones = function(){
			    	$scope.milestones = null;
			    };

			  	$scope.back = function() { 
			  		if($scope.milestones || $scope.heroData || $scope.superHero)
			  		{
			  			$scope.milestones = null;
			  			$scope.heroData = null;	
			  			$scope.superHero = null;
			  		}
			  		else
			  		{
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