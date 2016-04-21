angular.module('commons')
.service('superHeroData', function ($firebase) {

    
        var ref = new Firebase("https://superhero-catalog.firebaseio.com");
        
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

        function getAllBrands (callback){
            ref.child('Brands').once("value", function(snap) {
                var keys = [];
                snap.forEach(function(childSnap){
                        keys.push(childSnap.key());
                })
                callback(keys);
            });
        }

        function getSuperHeros(brand,callback){
            ref.child('Brands').child(brand).once("value",function(snap){
                callback(snap.val());
            })
        }

        function getSelectedHero(heroId,callback){
            ref.child('superHeros').child(heroId).once("value",function(snap){
                callback(snap.val());
            })
        }

        function getHeroMileStones(heroId,callback){
                ref.child('mileStones').child(heroId).once("value",function(snap){
                      callback(snap.val());  
                })
        }   



        return {
            getSuperHeros: function(brand,callback) {
                getSuperHeros(brand,function(value){
                    callback(value);
                });
            },
            getSelectedHero: function(heroId,callback){
                getSelectedHero(heroId,function(value){
                    callback(value);
                });
                // return superHeros[heroId];
            },
            getHeroMileStones: function(heroId,callback){
                getHeroMileStones(heroId,function(value){
                    callback(value);
                });
            },
            getBrands: function(callback){
                getAllBrands(function(value){
                    callback(value);
                })
            }

        };
});