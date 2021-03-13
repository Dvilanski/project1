const Geer = require("../geerDb.js")
const { Instractor } = require("../instractors.js")

const seedGeer = async () => {
    await Geer.deleteMany({})
    const ben = await Instractor.findOne({ username: "dvilanski" })
    const illi = await Instractor.findOne({ username: "illi" })
    const naor = await Instractor.findOne({ username: "green1" })
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "Ambu", barcode: i, instractor: ben })
        newGeer.save()
    }
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "AED", barcode: i, instractor: illi })
        newGeer.save()
    }
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "Anny", barcode: i })
        await newGeer.save()
        const updateDoc = await Geer.findByIdAndUpdate(newGeer.id, { instractor: naor }, { new: true })
        console.log(updateDoc)
    }
    console.log("save succsuful")
}

seedGeer()
