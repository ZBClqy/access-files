const express = require('express')
const app = express()
const port = 3000
const FilmRouter=require('./router/film.js')

app.use('/film',FilmRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})