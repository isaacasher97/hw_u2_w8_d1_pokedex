const Pokemon = require("../../models/pokemon")

async function update(req, res) {
    try {
      const { id } = req.params;
      const updatedPokemon = await Pokemon.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.redirect(`/pokemon/${updatedPokemon._id}`);
    } catch (error) {
      console.error("Error updating Pokemon:", error);
      res.redirect("/pokemon");
    }
  }
  

module.exports = update