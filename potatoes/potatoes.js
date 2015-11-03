function PotatoImg(fileName, height) {
  this.src = "./potatoes/media/" + fileName;
  this.height = height;
}

var aPotato = new PotatoImg("aPotato.gif", "50px");
var babyPotato = new PotatoImg("babyPotato.png", "50px");
var dancingPotato = new PotatoImg("dancingPotato.gif", "50px");
var potato = new PotatoImg("potato.gif", "50px");
var potatoAT = new PotatoImg("potatoAT.gif", "50px");
var potatoDance = new PotatoImg("potatoDance.gif", "50px");
var potatoFry = new PotatoImg("potatoFry.gif", "62px");
var potatoGlasses = new PotatoImg("potatoGlasses.gif", "56px");
var potatoSlide = new PotatoImg("potatoSlide.gif", "50px");
var sweetPotato = new PotatoImg("sweetPotato.gif", "52px");
var tato = new PotatoImg("tato.png", "50px");

var potatoArray = [];
potatoArray.push(aPotato, babyPotato, dancingPotato,
  potato, potatoAT, potatoDance, potatoFry, potatoGlasses,
  potatoSlide, sweetPotato, tato);

function randomPotato() {
  var ranPo = potatoArray[Math.floor(Math.random() * (potatoArray.length - 1))];
  return ranPo;
}