const express = require("express")
const app = express()
const path = require("path")
const engine = require("ejs-mate")
const session = require('express-session')
const { isLogedin, Instractor } = require("./dbs/instractors")
const passport = require("passport")
const localStrategy = require("passport-local")
const methodOverride = require("method-override")


const instRouter = require("./routs/instractorsRouter.js")
const logRouter = require("./routs/loginRouter")


app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.engine('ejs', engine)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

passport.use(new localStrategy(Instractor.authenticate()))
passport.serializeUser(Instractor.serializeUser());
passport.deserializeUser(Instractor.deserializeUser());


app.use("/", logRouter)

app.use("/instractors", isLogedin, instRouter)

app.use((err, req, res, next) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log("connected thrwo port 3000")
})

