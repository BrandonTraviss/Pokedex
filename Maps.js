export const WEAKNESS_MAP = new Map();
WEAKNESS_MAP.set("normal", ["fighting"]);
WEAKNESS_MAP.set("fighting", ["fairy", "flying", "psychic"]);
WEAKNESS_MAP.set("flying", ["electric", "ice", "rock"]);
WEAKNESS_MAP.set("poison", ["ground", "psychic"]);
WEAKNESS_MAP.set("ground", ["grass", "ice", "water"]);
WEAKNESS_MAP.set("bug", ["fire", "flying", "rock"]);
WEAKNESS_MAP.set("ghost", ["dark", "ghost"]);
WEAKNESS_MAP.set("steel", ["fighting", "fire", "ground"]);
WEAKNESS_MAP.set("fire", ["ground", "rock", "water"]);
WEAKNESS_MAP.set("water", ["electric", "grass"]);
WEAKNESS_MAP.set("grass", ["bug", "fire", "flying", "ice", "poison"]);
WEAKNESS_MAP.set("electric", ["ground"]);
WEAKNESS_MAP.set("psychic", ["bug", "dark", "ghost"]);
WEAKNESS_MAP.set("ice", ["fighting", "fire", "rock", "steel"]);
WEAKNESS_MAP.set("dragon", ["dragon", "fairy", "ice"]);
WEAKNESS_MAP.set("dark", ["bug", "fairy", "fighting"]);
WEAKNESS_MAP.set("fairy", ["poison", "steel"]);
WEAKNESS_MAP.set("rock", ["fighting", "ground", "steel", "water", "grass"]);

export const STRENGTH_MAP = new Map();
STRENGTH_MAP.set("normal", null);
STRENGTH_MAP.set("fire", ["fire", "grass", "ice", "bug", "steel", "fairy"]);
STRENGTH_MAP.set("water", ["fire", "water", "ice", "steel"]);
STRENGTH_MAP.set("grass", ["water", "grass", "electric", "ground"]);
STRENGTH_MAP.set("electric", ["electric", "flying", "steel"]);
STRENGTH_MAP.set("ice", ["ice"]);
STRENGTH_MAP.set("fighting", ["bug", "rock", "dark"]);
STRENGTH_MAP.set("poison", ["grass", "fighting", "poison", "bug", "fairy"]);
STRENGTH_MAP.set("ground", ["poison", "rock"]);
STRENGTH_MAP.set("flying", ["grass", "fighting", "bug"]);
STRENGTH_MAP.set("psychic", ["fighting", "psychic"]);
STRENGTH_MAP.set("bug", ["grass", "fighting", "ground"]);
STRENGTH_MAP.set("rock", ["normal", "fire", "poison", "flying"]);
STRENGTH_MAP.set("ghost", ["poison", "bug"]);
STRENGTH_MAP.set("dragon", ["fire", "water", "grass", "electric"]);
STRENGTH_MAP.set("dark", ["ghost", "dark"]);
STRENGTH_MAP.set("steel", [
  "normal",
  "grass",
  "ice",
  "flying",
  "psychic",
  "bug",
  "rock",
  "dragon",
  "steel",
  "fairy",
]);
STRENGTH_MAP.set("fairy", ["fighting", "bug", "dark"]);

export const IMMUNE_MAP = new Map();
IMMUNE_MAP.set("normal", ["ghost"]);
IMMUNE_MAP.set("ground", ["electric"]);
IMMUNE_MAP.set("flying", ["ground"]);
IMMUNE_MAP.set("ghost", ["normal", "fighting"]);
IMMUNE_MAP.set("dark", ["psychic"]);
IMMUNE_MAP.set("steel", ["poison"]);
IMMUNE_MAP.set("fairy", ["dragon"]);
