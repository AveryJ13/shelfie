require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require('massive')

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch((err) => { console.log(err) })

app.get('/api/inventory', controller.test)
app.post('/api/product', controller.post)
app.delete('/api/inventory/:deleteId', controller.delete)
app.put("/api/inventory/:id", controller.edit)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
})