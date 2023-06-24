const Pokemon = require("../../models/pokemon")

async function edit(req, res){
        let updatedPokemon = {
        name: req.body.name,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    }
    const id = req.params.id
    const pokemon = await Pokemon.findById(id)
    console.log(updatedPokemon, req.body)
    res.render("pokemon/edit.ejs", {pokemon, updatedPokemon})
}

module.exports = edit