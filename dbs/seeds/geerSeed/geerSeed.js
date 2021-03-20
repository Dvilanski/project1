const Geer = require("../../geerDb.js")
const { Instractor } = require("../../instractors.js")

const seedGeer = async () => {
    await Geer.deleteMany({})
    const ben = await Instractor.findOne({ username: "dvilanski" })
    const illi = await Instractor.findOne({ username: "illi" })
    const naor = await Instractor.findOne({ username: "green1" })

    // need to change image source
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "Ambu", barcode: i, instractor: ben, img: "https://images.unsplash.com/photo-1544991713-bf7d1d977ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" })
        newGeer.save()
    }
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "AED", barcode: i, instractor: illi, img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/AED_open_cutout.jpg" })
        newGeer.save()
    }
    for (let i = 0; i < 10; i++) {
        const newGeer = new Geer({ name: "Anny", barcode: i, instarctor: naor, img: "https://images-na.ssl-images-amazon.com/images/I/81Xt8i%2BjBIL._SL1500_.jpg" })
        await newGeer.save()
    }
    console.log("save succsuful")
}

seedGeer()
