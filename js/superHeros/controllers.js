angular.module('superHeros')
.controller('SuperHerosCtrl',['$scope','$location','$uibModal','superHeroData',function($scope,$location,$uibModal,superHeroData){
				$scope.superHeros= superHeroData.getSuperHeros();
				$scope.brand = superHeroData.getSelectedBrand();
				console.log($scope.superHeros);

				$scope.open = function (size,superHero) {

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

			    modalInstance.result.then(function (selectedItem) {
			      $scope.selected = selectedItem;
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
}]);