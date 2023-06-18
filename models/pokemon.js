const mongoose = require("./connection")

//destruct Schema and Model from the mongoose object
const {Schema, model} = mongoose

//create a schema, defines that shape of an object
const pokemonSchema = new Schema({
    name: String,
    img: String,
    type: Array,
    stats: Object,
    damages: {
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
      steel: String,
    },
})

// create a model using the schema
const Pokemon = model("Pokemon", pokemonSchema)

console.log(Pokemon)

// export the model
module.exports = Pokemon