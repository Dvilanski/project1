
module.exports = function asyncWrap(func) {
    return (req, res, next) => {
        func(req, res, next).catch((e) => next(e))
    }
}