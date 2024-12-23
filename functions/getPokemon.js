import { IMMUNE_MAP, STRENGTH_MAP, WEAKNESS_MAP } from "../Maps.js";

const pokemonImg = document.getElementById("pokemon-img");
const pokemonInfoDiv = document.getElementById("pokemon-info-div");
const pokemonWeaknessDiv = document.getElementById("pokemon-weakness-div");
const pokemonStrengthDiv = document.getElementById("pokemon-strength-div");
const pokemonImmuneDiv = document.getElementById("pokemon-immune-div");
const pokemonName = document.getElementById("pokemon-name");
const searchInput = document.getElementById("pokemon-search-input");

const BLANK_MAP = new Map()
BLANK_MAP.set("normal", 0);
BLANK_MAP.set("fire", 0);
BLANK_MAP.set("fighting", 0);
BLANK_MAP.set("water", 0);
BLANK_MAP.set("flying", 0);
BLANK_MAP.set("grass", 0);
BLANK_MAP.set("poison", 0);
BLANK_MAP.set("electric", 0);
BLANK_MAP.set("ground", 0);
BLANK_MAP.set("psychic", 0);
BLANK_MAP.set("rock", 0);
BLANK_MAP.set("ice", 0);
BLANK_MAP.set("bug", 0);
BLANK_MAP.set("dragon", 0);
BLANK_MAP.set("ghost", 0);
BLANK_MAP.set("dark", 0);
BLANK_MAP.set("steel", 0);
BLANK_MAP.set("fairy", 0);

pokemonInfoDiv.innerHTML = "";

function createStats(data) {
  BLANK_MAP.forEach((value, key, map) => {
    console.log(value, key, map)
    if (value > 0) {
      data.strengths.push(key)
    }
    if (value < 0) {
      data.weakness.push(key)
    }
    if (value == "immune") {
      data.immune.push(key)
    }
  })
}

function capFirst(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function removeDuplicates(arr) {
  console.log("Removing Duplicates from ", arr);
  console.log(...new Set(arr));
  return [...new Set(arr)];
}

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function resetMap() {
  BLANK_MAP.set("normal", 0)
  BLANK_MAP.set('ghost', 0)
  BLANK_MAP.set("fire", 0)
  BLANK_MAP.set("fighting", 0)
  BLANK_MAP.set("water", 0)
  BLANK_MAP.set("flying", 0)
  BLANK_MAP.set("grass", 0)
  BLANK_MAP.set("poison", 0)
  BLANK_MAP.set("electric", 0)
  BLANK_MAP.set("ground", 0)
  BLANK_MAP.set("psychic", 0)
  BLANK_MAP.set("rock", 0)
  BLANK_MAP.set("ice", 0)
  BLANK_MAP.set("bug", 0)
  BLANK_MAP.set("dragon", 0)
  BLANK_MAP.set("dark", 0)
  BLANK_MAP.set("steel", 0)
  BLANK_MAP.set("fairy", 0)
}

function mapWeakness(type) {
  console.log(type);
  type.forEach((element) => {
    console.log(element.type.name);
    let weaknessArray = WEAKNESS_MAP.get(element.type.name);
    if (weaknessArray.length > 0) {
      weaknessArray.forEach((weak) => {
        console.log("Weakness :", weak);
        BLANK_MAP.set(weak, (BLANK_MAP.get(weak) - 1));
      });
    }
  });
}

function mapStrength(type) {
  type.forEach((element) => {
    let strengthArray = STRENGTH_MAP.get(element.type.name);
    if (strengthArray == null) {
      return
    }
    if (strengthArray.length > 0) {
      strengthArray.forEach((str) => {
        console.log("Strength :", str);
        BLANK_MAP.set(str, (BLANK_MAP.get(str) + 1));
      });
    }
  });
}

function mapImmune(type) {
  console.log(type);
  type.forEach((element) => {
    console.log(element.type.name);
    let immuneArray = IMMUNE_MAP.get(element.type.name);
    if (immuneArray) {
      immuneArray.forEach((immune) => {
        console.log("Immune :", immune);
        BLANK_MAP.set(immune, 'immune');
      });
    }
  });
}

function parsePokemonData(json) {
  let data = {
    name: json.forms[0].name,
    types: json.types,
    imgSrc: json.sprites.front_default,
    weakness: [],
    strengths: [],
    immune: [],
  };
  return data;
}
function resetData(data) {
  data.weakness = []
  data.strengths = []
  data.immune = []
}
export async function getPokemon(name) {
  resetMap()
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const jsonData = await response.json();
  const data = parsePokemonData(jsonData);
  console.log(data);
  setPokemon(data);
  mapWeakness(data.types)
  mapStrength(data.types)
  mapImmune(data.types)
  createStats(data)
  setWeakness(data)
  setStrength(data)
  setImmune(data)
  console.log(data);
  console.log("Final Element Map :", BLANK_MAP);
  resetMap()
  resetData(data)
}

function setPokemon(data) {
  pokemonImg.src = data.imgSrc;
  pokemonInfoDiv.innerHTML = "";
  data.types.forEach((type) => {
    //Create Elements for Type section
    let typeDivElement = document.createElement("div");
    typeDivElement.classList.add("type-div");

    let typeElement = document.createElement("img");
    typeElement.src = `icons/${type.type.name}.svg`;

    let typeTextElement = document.createElement("p");
    typeTextElement.classList.add("type");
    typeTextElement.innerText = capFirst(type.type.name);

    typeElement.classList.add("type-small");

    typeDivElement.appendChild(typeElement);
    typeDivElement.appendChild(typeTextElement);

    pokemonInfoDiv.appendChild(typeDivElement);

    pokemonName.innerText = capFirst(data.name);
    searchInput.value = "";
    // End of Create Elements for Type Section
  });
}

function setWeakness(data) {
  pokemonWeaknessDiv.innerHTML = "";
  data.weakness.forEach((type) => {
    console.log(type)
    //Create Elements for Type section
    let typeDivElement = document.createElement("div");
    typeDivElement.classList.add("type-div");

    let typeElement = document.createElement("img");
    typeElement.src = `icons/${type}.svg`;

    let typeTextElement = document.createElement("p");
    typeTextElement.classList.add("type");
    typeTextElement.innerText = capFirst(type);

    typeElement.classList.add("type-small");

    typeDivElement.appendChild(typeElement);
    typeDivElement.appendChild(typeTextElement);

    pokemonWeaknessDiv.appendChild(typeDivElement);
    // End of Create Elements for Type Section
  });
}

function setStrength(data) {
  pokemonStrengthDiv.innerHTML = "";
  data.strengths.forEach((type) => {
    console.log(type)
    //Create Elements for Type section
    let typeDivElement = document.createElement("div");
    typeDivElement.classList.add("type-div");

    let typeElement = document.createElement("img");
    typeElement.src = `icons/${type}.svg`;

    let typeTextElement = document.createElement("p");
    typeTextElement.classList.add("type");
    typeTextElement.innerText = capFirst(type);

    typeElement.classList.add("type-small");

    typeDivElement.appendChild(typeElement);
    typeDivElement.appendChild(typeTextElement);

    pokemonStrengthDiv.appendChild(typeDivElement);
    // End of Create Elements for Type Section
  });
}

function setImmune(data) {
  pokemonImmuneDiv.innerHTML = "";
  data.immune.forEach((type) => {
    console.log(type)
    //Create Elements for Type section
    let typeDivElement = document.createElement("div");
    typeDivElement.classList.add("type-div");

    let typeElement = document.createElement("img");
    typeElement.src = `icons/${type}.svg`;

    let typeTextElement = document.createElement("p");
    typeTextElement.classList.add("type");
    typeTextElement.innerText = capFirst(type);

    typeElement.classList.add("type-small");

    typeDivElement.appendChild(typeElement);
    typeDivElement.appendChild(typeTextElement);

    pokemonImmuneDiv.appendChild(typeDivElement);
    // End of Create Elements for Type Section
  });
}


