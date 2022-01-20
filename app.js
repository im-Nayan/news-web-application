const express = require('express')
const ejs = require('ejs');
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'view')

// Puplic Path
const publicPath = path.join(__dirname, './Public')
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: true }))
const route = require('./Route/router');
app.use(route)


app.listen(port, () => console.log(`Link:    http://localhost:${port}`))