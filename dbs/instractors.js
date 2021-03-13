const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Joi = require("joi");
//const { string } = require('joi');
const passportLocalMongoose = require('passport-local-mongoose')



mongoose.connect('mongodb://localhost:27017/project1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res, err) => {
        console.log("conected to mongoose")
    })
    .catch((res, req) => {
        console.log("faild connectiong to mongoose");
    })

const instractorSchema = Schema({
    name: String,
    lastName: String,
    username: String,
    level: String
})

const joiSchema = Joi.object({
    name: Joi.string().min(1),
    lastName: Joi.string().min(1),
    username: Joi.string(),
    level: Joi.string()
})

const instValid = (req, res, next) => {
    const { name, lastName, username, level } = req.body
    const { error } = joiSchema.validate({ name, lastName, username, level })
    if (error) {
        console.log(error)
    } else {
        next()
    }
    module.exports
}

instractorSchema.plugin(passportLocalMongoose)


//instractorSchema.pre("save", async function (next) {
//    console.log(this.password)
//    this.password = await bcrypt.hash(this.password, 10)
//    next()
//})

function validateUser(req, res, next) {
    if (!req.session._userId) {
        return res.redirect("/")
    } else {
        next()
    }

}

const isLogedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login")
    }
    next()
}

const Instractor = mongoose.model("Instractor", instractorSchema);


module.exports = { Instractor, instValid, isLogedin }