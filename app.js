let superHeroPhonebookData = [
  { name: 'Batman', phoneNumber: 5551234, affiliation: 'DC', image_url: 'placeholder'},
  { name: 'Superman', phoneNumber: 5551234, affiliation: 'DC', image_url: 'placeholder'},
  { name: 'Ironman', phoneNumber: 5551234, affiliation: 'Marvel', image_url: 'placeholder'},
  { name: 'Hulk', phoneNumber: 5551234, affiliation: 'Marvel', image_url: 'placeholder'}

]





angular
  .module("superHeroPhonebook", [])
  .controller("superHeroPhonebookController", [
    superHeroPhonebookControllerFunction
  ])


// function superHeroPhonebookControllerFunction () {
//   this.hero = superHeroPhonebookData
//   this.addHero = function(){
//   let hero = {name: this.newHero}
//   this.hero.push(hero)
// };
// }

function superHeroPhonebookControllerFunction () {
  this.heroes = superHeroPhonebookData
  this.addHero = function() {
    console.log("clicked!")
  }
}
