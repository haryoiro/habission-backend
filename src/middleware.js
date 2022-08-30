
const httpRequestLogger = (req, res, next) => {
    const { params, method, path, body } = req
    console.log('================================================ ')
    console.log('Params:', params)
    console.log('Method:', method)
    console.log('Path  :', path)
    console.log('Body  :', body)
    console.log('================================================ ')
    next()
    }


module.exports = {
    httpRequestLogger
}
