const express = require("express")
const logRouter = express.Router()
const { Instractor } = require("../dbs/instractors")
const passport = require("passport")


logRouter.get("/login", async (req, res) => {
    res.render('./login')
})

logRouter.post("/login", passport.authenticate('local', { failureRedirect: "/login" }), (req, res) => {
    console.log(req.user._id)
    res.redirect("/instractors")
})

logRouter.get("/logout", (req, res) => {
    req.logOut()
    res.redirect("/login")
})

module.exports = logRouter