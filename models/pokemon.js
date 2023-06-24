const mongoose = require("./connection")

//destruct Schema and Model from the mongoose object
const {Schema, model} = mongoose

//create a schema, defines that shape of an object
const pokemonSchema = new Schema({
  name: String,
  img: String,
  type: [String],
  stats: {
    hp: String,
    attack: String,
    defense: String,
    spattack: String,
    spdefense: String,
    speed: String
},
  damages: {
    type: {
      normal: String,
      fire: String,
      water: String,
      electric: String,
      grass: String,
      ice: String,
      fight: String,
      poison: String,
      ground: String,
      flying: String,
      psychic: String,
      bug: String,
      rock: String,
      ghost: String,
      dragon: String,
      dark: String,
      steel: String
    },
    default: {
    normal: "1",
    fire: "2",
    water: "0.5",
    electric: "0.5",
    grass: "0.25",
    ice: "2",
    fight: "0.5",
    poison: "1",
    ground: "1",
    flying: "2",
    psychic: "2",
    bug: "1",
    rock: "1",
    ghost: "1",
    dragon: "1",
    dark: "1",
    steel: "1"
  }
}
});

// create a model using the schema
const Pokemon = model("Pokemon", pokemonSchema)

console.log(Pokemon)

// export the model
module.exports = Pokemon