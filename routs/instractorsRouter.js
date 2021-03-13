
const express = require("express")
const instRouter = express.Router()
const { Instractor, instValid } = require("../dbs/instractors.js")
const asyncWraper = require('../utils/asyncWraper')




instRouter.post("/add", instValid, asyncWraper(async (req, res, next) => {
    const { name, lastName, username, level, password } = req.body
    const newIns = new Instractor({ name, lastName, username, level })
    await Instractor.register(newIns, password)
    console.log("instractor registerd")
    res.redirect("/instractors")

}))

instRouter.delete("/:id", asyncWraper(async (req, res, next) => {
    const { id } = req.params
    const delInst = await Instractor.findByIdAndDelete(id)
    res.redirect("/instractors")
}))

instRouter.get("/add", (req, res, next) => {
    res.render("instractors/add")
})

instRouter.get("/:id/show", asyncWraper(async (req, res, next) => {
    const { id } = req.params

    const instractor = await Instractor.findById(id)
    res.render("instractors/show", { instractor })
}))


instRouter.get("/", asyncWraper(async (req, res, next) => {
    const instractors = await Instractor.find({})

    res.render("./instractors/allIns", { instractors })
}))

module.exports = instRouter