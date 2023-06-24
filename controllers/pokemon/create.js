const Pokemon = require("../../models/pokemon")

async function create(req, res){
    let newPokemon = {
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
    const pokemon = Pokemon.create(newPokemon)
    console.log(newPokemon, req.body)
    res.redirect("/pokemon")
}

module.exports = create