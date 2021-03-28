const express = require("express")
const axiosApiRouter = express.Router()
const { Instractor } = require("../../dbs/instractors.js")


axiosApiRouter.get("/user", (req, res) => {
    console.log("axios api riched")
    const back = {
        a: 1,
        b: 2,
        c: 3
    }

    res.json(back)
})



module.exports = axiosApiRouter