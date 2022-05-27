const express = require('express')
const routes = express.Router()


routes.get('/:PrecioTotalProductos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT SUM(Precio) SUMValor FROM dolcelivelli.productos',
         (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows[0])
        })
    })
})

/*routes.get('/:PrecioMedio', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT AVG(Precio) AVGValor FROM productos',
         (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})*/


/*routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO orden_detalles set ?', [req.body], (err, rows)=>{
            return res.send
            //if(err)return res.send(err)
            //res.status(200).json()
            //res.send(rows)
           
            //res.send('Se envio tu peticion')
        })
   })
})*/
/**SELECT producto, COUNT( producto ) AS total
FROM  registro
GROUP BY producto
ORDER BY total DESC  */
//-- ORDEN DE LOS PRODUCTOS DE MAYOR A MENOR
/*routes.get('/:orden', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT nombre_Pedido, COUNT(nombre_Pedido)'+    
         'AS total FROM orden_detalles GROUP '+
         'BY nombre_Pedido ORDER BY total DESC; ?', [req.body], (err, rows)=>{
            if(err)return res.send(err)
            //res.status(200).json()
            //res.send(rows)
            res.json(rows)
        })
   })
})
//-- PRECIO TOTAL DE LOS PRODUCTOS
/*routes.get('/PrecioTotalProductos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT SUM(Precio) SUMValor'+
        'FROM dolcelivelli.productos; ?', [req.body], (err, rows)=>{
            if(err)return res.send(err)
            //res.status(200).json()
            //res.send(rows)
            res.json(rows)
        })
   })
})*/


//-- ELIMINAR PRODUCTO
/*routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM orden_detalles WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            //res.send('User excluded!')
        })
    })
})

//-- ACTUALIZAR LOS PRODUCTOS
routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE orden_detalles set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            //res.send('User updated!')
        })
    })
})*/

module.exports = routes