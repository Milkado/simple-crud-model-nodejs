const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)


app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resizes')))

mongoose.connect(`mongodb://localhost:27017/bdsi`, {
    useNewUrlParser: true,
})

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors())

app.use(require('./routes'))

app.listen(3333)

