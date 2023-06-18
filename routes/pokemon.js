const Router = require("express").Router
const controller = require("../controllers/pokemon")

const router = Router()

// my routes


// index
router.get("/", controller.index)

// show
router.get("/:id", controller.show)

// new
router.get("/new", controller.new)

// edit
router.get("/:id/edit", (req, res) => {res.send("not implemented yet")})

// create
router.post("/", (req, res) => {res.send("not implemented yet")})

// update
router.put("/:id", (req, res) => {res.send("not implemented yet")})

// destroy
router.delete("/:id", (req, res) => {res.send("not implemented yet")})

module.exports = router