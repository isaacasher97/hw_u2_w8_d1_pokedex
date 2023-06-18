const index = require("./indexRoute")
const newCartoon = require("./new")
const show = require("./show")

module.exports = {
    index,
    new: newCartoon,
    show
}