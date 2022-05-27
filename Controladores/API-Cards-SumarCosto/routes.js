// -- LIBRERIAS
const express = require('express')
const routes = express.Router()

// -- LA RUTA
routes.get('/:sumarCosto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        // -- HACEMOS LA CONSULTA --
        conn.query('SELECT SUM(PrecioCosto) SUMValor FROM Productos',
         (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

// -- exportamos las rutas
module.exports = routes