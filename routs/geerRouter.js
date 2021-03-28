const express = require("express")
const geerRouter = express.Router()
const Geer = require("../dbs/geerDb.js")
const { filterCategory, countNumInCategory } = require("../utils/dbUtil.js")

geerRouter.get("/", async (req, res) => {

    const geers = await Geer.find({})
    const categorys = filterCategory(geers)
    const count = countNumInCategory(geers, categorys)
    res.render("../views/geer/index", { categorys, count })
})

geerRouter.get("/add", (req, res) => {
    res.render("geer/add.ejs")
})

geerRouter.post("/add", async (req, res) => {
    console.log(req.body)
    res.send("ok")
})
module.exports = geerRouter;