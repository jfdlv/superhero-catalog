angular.module('commons')
.service('superHeroData', function () {
        var property = 'First';
        var brands = {
			"DC":['batman','superman'],
			"MARVEL":['antman','spiderman'],
			"IMG COMICS":['spawn']
		};
        var superHeros = {
            "batman": {
                "name": "Batman",
                "realName": "Bruce Wayne",
                "ocupation": "billionare",
                "origins": "Description of batman's origin"
            },
            "superman": {
                "name": "Superman",
                "realName": "Clark Kent, Kal-el",
                "ocupation": "Reporter",
                "origins": "Description of superman's origin"
            }
        };
		var selectedBrand = '';

        return {
            getBrands: function () {
                return Object.keys(brands);
            },
            getSuperHeros: function() {
                return brands[selectedBrand];
            },
            setSelectedBrand:function(value){
            	selectedBrand = value;
            },
            getSelectedBrand: function(){
                return selectedBrand;
            },
            getSelectedHero: function(heroId){
                return superHeros[heroId];
            }

        };
});