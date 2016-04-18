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
        var mileStones = {
            "batman": {
                "0":{
                    "title":"batman year one",
                    "summary": "First steps of bruce wayne in becoming the batman, bla bla bla"
                },
                "1":{
                    "title":"A dead in the family",
                    "summary": "The dead of jason todd, the second robin"
                }
            },
            "superman":{
                "0":{
                    "title":"some important story",
                    "summary": "summary of some important story"
                },
                "1":{
                    "title":"other important story",
                    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsa quam inventore qui, impedit, minus quasi nostrum molestias a in atque eius nobis nihil asperiores enim consequatur cum. Sint praesentium hic voluptas ratione fugiat, non culpa aut! Deleniti placeat sed dolorem cumque, qui tempore reiciendis aspernatur dolores dignissimos error incidunt magnam ducimus quaerat quidem adipisci voluptas omnis beatae vero tempora voluptate voluptatibus, blanditiis commodi recusandae ratione. Vel, nulla animi. Explicabo totam rerum atque excepturi provident cum odio quae maiores laborum nihil, culpa rem animi tempore placeat id eius. Expedita quod aspernatur earum harum, quibusdam voluptates, consequuntur ad. Sed, quam, quo?"
                }
            }
        }
		var selectedBrand = '';

        return {
            getBrands: function () {
                return Object.keys(brands);
            },
            getSuperHeros: function(brand) {
                return brands[brand];
            },
            getSelectedBrand: function(){
                return selectedBrand;
            },
            getSelectedHero: function(heroId){
                return superHeros[heroId];
            },
            getHeroMileStones: function(heroId){
                return mileStones[heroId];
            }

        };
});