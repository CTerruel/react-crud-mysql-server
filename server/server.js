const express = require('express')
const app = express()

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', `http://localhost:3000`)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next();
  })

app.use(express.json())
app.use('/', require('./routes/usersRoutes'))

app.listen(3333)