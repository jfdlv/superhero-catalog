angular.module('commons')
.service('superHeroData', function ($firebase) {

    
        var ref = new Firebase("https://superhero-catalog.firebaseio.com");

        function getAllBrands (callback){
            ref.child('Brands').once("value", function(snap) {
                var keys = [];
                snap.forEach(function(childSnap){
                        keys.push(childSnap.key());
                })
                callback(keys);
            });
        }

        function getAllSuperHeros (callback){
            ref.child('Brands').once("value",function(snap){
                var superHeros = [];
                snap.forEach(function(brandSnap){
                    brandSnap.forEach(function(shSnap){
                        superHeros.push(shSnap.val());
                    })
                })
                callback(superHeros);
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
            },
            getAllSuperHeros: function(callback){
                getAllSuperHeros(function(value){
                    callback(value);
                })
            }

        };
});