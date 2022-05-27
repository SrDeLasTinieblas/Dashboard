const express = require('express') // import express module ayuda a crear una api de una manera mas rapida
const mysql = require('mysql') // usamos la libreria de mysql
const myconn = require('express-myconnection') // crea una conexion del tipo singleton
const cors = require('cors') // el cors nos permite hacer peticiones 
const routes = require('./routes') // importamos las rutas

const app = express()
app.set('port', process.env.PORT || 7000) // configuramos el puerto  y le decimos que si no hay un puerto definido 
//                                              lo tome en el puerto 7000
const dbOptions = {         // creamos un objeto con las opciones de la conexion
    charset: 'utf8mb4',
    host: 'localhost',
    port: '',
    user: 'root',
    password: 'tinieblas',
    database: 'dolcelivelli'
}

// middlewares ------ esta funcion procesa el dato antes de que el servidor lo reciba ----------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.urlencoded({extended:true}))
app.use(cors())
// routes -------------------------------------------
app.get('/', (req, res)=>{  //  esta funcion es la que se ejecuta cuando se hace una peticion get a la ruta raiz
    res.send('Welcome to my API')
})
app.use('/orden_detalles', routes) // usamos las rutas


// server running -----------------------------------
app.listen(app.get('port'), ()=>{   // esta funcion es la que se ejecuta cuando el servidor esta corriendo
    console.log('server running on port', app.get('port')) //   imprime en consola el puerto en el que esta corriendo el servidor
})