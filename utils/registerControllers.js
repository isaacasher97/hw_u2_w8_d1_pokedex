const pokemonRoutes = require("../routes/pokemon")

function registerConstrollers(app) {
    app.use("/pokemon", pokemonRoutes)
}

module.exports = registerConstrollers