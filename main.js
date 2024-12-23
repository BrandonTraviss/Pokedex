import { getPokemon } from "./functions/getPokemon.js";

function getRandomValue() {
  return Math.floor(Math.random() * 1025) + 1;
}

//Event Listener Setup button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  let pokemon = document.getElementById("pokemon-search-input");
  // console.log(pokemon.value);
  getPokemon(pokemon.value.toLowerCase());
});
//Event Listerner Setup Input
const searchInput = document.getElementById("pokemon-search-input");
searchInput.addEventListener("keydown", function (e) {
  let pokemon = document.getElementById("pokemon-search-input");
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    // console.log(pokemon.value);
    getPokemon(pokemon.value.toLowerCase());
  }
});
//Event Listener Random
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", (e) => {
  e.preventDefault();
  let pokemon = getRandomValue();
  // console.log(pokemon);
  getPokemon(pokemon);
});
