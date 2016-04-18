angular.module('superHeros')
.controller('SuperHerosCtrl',['$scope','$location','$uibModal','$stateParams','superHeroData',function($scope,$location,$uibModal,$stateParams,superHeroData){
				$scope.brand = $stateParams.brand
				$scope.superHeros= superHeroData.getSuperHeros($scope.brand);
				$scope.showHideContainers = function(){
					if($scope.milestones){
						return true;
					}
					return false;
				};
				console.log($scope.superHeros);

				$scope.open = function (size,superHero) {

				$scope.superHero = superHero;
			    var modalInstance = $uibModal.open({
			      animation: $scope.animationsEnabled,
			      templateUrl: 'js/superHeros/views/superhero-modal.html',
			      controller: 'SuperHeroModalCtrl',
			      size: size,
			      resolve: {
			        superHero: function () {
			          return superHero;
			        }
			      }
			    });

			    modalInstance.result.then(function (milestones) {
			      $scope.milestones = milestones;
			      console.log($scope.milestones);
			    }, function () {
			      console.log('Modal dismissed at: ' + new Date());
			    });
			  };
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