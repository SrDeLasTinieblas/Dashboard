const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 3012)
const dbOptions = {
    charset: 'utf8mb4',
    host: 'localhost',
    port: '',
    user: 'root',
    password: 'tinieblas',
    database: 'dolcelivelli'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.urlencoded({extended:true}))
app.use(cors())
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/reportes-card-3', routes)


// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
    console.log('http://localhost:'+app.get('port') + '/reportes-card-3')
})