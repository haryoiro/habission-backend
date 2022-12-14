require('dotenv').config();

const  routes  = require('./routes/routes')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/', routes)

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port} !`)
})


