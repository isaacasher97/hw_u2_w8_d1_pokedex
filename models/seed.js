const Pokemon = require("./pokemon")
const mongoose = require("./connection")
const pokemons = require("./seedData")

async function seed() {
    //delete eeverything in the database
    await Pokemon.deleteMany({})
    //what you want to do in here
    const createdPokemons = await Pokemon.create(pokemons)
    console.log(createdPokemons.length)
    console.log(createdPokemons[0])
}


// run the seed function when the database connects
mongoose.connection.on("open", () => {seed()})