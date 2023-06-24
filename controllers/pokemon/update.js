const Pokemon = require("../../models/pokemon")

async function update(req, res) {
      const { id } = req.params;
      const updatedPokemon = await Pokemon.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.redirect(`/pokemon/${updatedPokemon._id}`);
  
  }
  

module.exports = update