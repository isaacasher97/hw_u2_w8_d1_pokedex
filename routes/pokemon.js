const Router = require("express").Router

const router = Router()

// my routes


// index
router.get("/", (req, res) => {res.send("not implemented yet")})

// show
router.get("/:id", (req, res) => {res.send("not implemented yet")})

// new
router.get("/new", (req, res) => {res.send("not implemented yet")})

// edit
router.get("/:id/edit", (req, res) => {res.send("not implemented yet")})

// create
router.post("/", (req, res) => {res.send("not implemented yet")})

// update
router.put("/:id", (req, res) => {res.send("not implemented yet")})

// destroy
router.delete("/:id", (req, res) => {res.send("not implemented yet")})

module.exports = router