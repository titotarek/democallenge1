const express = require('express')
const app = express()
const router = require('./config/router')
const mongoose = require('./config/mongoose')



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(5700,console.log("server running on port 5700..."))