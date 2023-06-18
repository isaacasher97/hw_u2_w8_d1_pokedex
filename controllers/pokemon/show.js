const Pokemon = require("../../models/pokemon") 

async function show(req, res){
    const id = req.params.id
    const pokemon = await Pokemon.findById(id,  'name img type stats damages')
    res.render("pokemon/show.ejs", {pokemon})
}

module.exports = show