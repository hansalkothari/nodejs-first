const express = require('express')
const middlewar = require('./middlewar')
const app = express()
const port = 3000
const reqFilter = require('./middlewar')
const route = express.Router()
//it is an application layer middleware,applied to all the routes.1
// app.use(reqFilter)


//middleware is applied to this route.
app.get('/',reqFilter, (req, res) => {
    res.send('welcome to the home page')
})

//middleware is applied to this route
app.get('/users',reqFilter, (req, res) => {
    res.send('welcome to the users page')
})

//route is to apply middleware to this route..
route.use(reqFilter)
route.get('/contact',(req, res) => {
    res.send('welcome to the contact page')
})
app.use('/',route)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))