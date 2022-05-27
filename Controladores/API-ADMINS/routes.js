const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM administradores', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO administradores set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto added!')
        })
    })
})

/*routes.post('/:id', (req, res)=>{
    const { username, password } = req.body
    const values = { username, password }
    var connection = mysql.createConnection(credentials)
    connection.query("SELECT * FROM administradores where username = ? and password = ?", values, (err, result)=>{
        if(err) return res.send(err)
        if(result.length > 0){
            res.send('Usuario y contraseña correctos')
        }else{
            res.send('Usuario y contraseña incorrectos')
        }

    })
connection.end()
    
    


   /*req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM administradores WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto excluded!')
        })
    })*/
//})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE administradores set ? WHERE id = ?', [req.body, req.params.id], 
        (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto updated!')
        })
    })
})

module.exports = routes