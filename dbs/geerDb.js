const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Joi = require("Joi")

mongoose.connect('mongodb://localhost:27017/project1', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((res, err) => {
        console.log("conected to mongoose")
    })
    .catch((res, req) => {
        console.log("faild connectiong to mongoose");
    })

const geerSchema = Schema({
    name: String,
    barcode: String,
    instractor: Schema.Types.ObjectId,
    img: String
})

const Geer = mongoose.model("Geer", geerSchema)

module.exports = Geer