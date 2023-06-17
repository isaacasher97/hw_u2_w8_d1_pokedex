const mongoose = require("./connection")

//destruct Schema and Model from the mongoose object
const {Schema, model} = mongoose

//create a schema, defines that shape of an object
const pokemonSchema = new Schema({
    name: String,
    type: Array,
    stats: Object
})

// create a model using the schema
const Pokemon = model("Pokemon", pokemonSchema)

console.log(Pokemon)

// export the model
module.exports = Pokemon