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

module.exports = geerRouter;