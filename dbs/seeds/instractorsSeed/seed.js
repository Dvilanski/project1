const [Instractor, instValid] = require("../../instractors.js")
const [names, lastName] = require("./names.js")
const passport = require("passport")
const LocalStrategy = require("passport-local")


async function seed(names, lastNames) {
    console.log(Instractor)
    await Instractor.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const newIns = Instractor({ name: names[i], lastName: lastNames[i], username: `admin${i}`, password: "admin" })
        await newIns.save()
        console.log(`instructor: ${names[i]} saved`)
    }
}

seed(names, lastName)