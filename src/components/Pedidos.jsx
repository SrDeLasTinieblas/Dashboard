import React, {Fragment, useState, useEffect } from 'react';
import StylePedido from './css/StylePedido.css'
import Navbar from './Navbar'
import styled from 'styled-components';

const Pedidos = () => {
    const [ordens, setOrden] = useState([])
    useEffect(() => {
      const getOrden = () => {
        fetch('http://localhost:7000/orden_detalles')
        .then(resp => resp.json())
        .then(resp => setOrden(resp))
      }
      getOrden()
    }, [])

    return (
      <Fragment>
        <Navbar />
        <div className="container-pedidos">
          <div className="row">        
            <div className="col-7">
            <h3>Pedidos</h3>
            <h5>Total de pedidos: {ordens.length}</h5>
            <table class="table table-bordered border-primary">
              <thead>
                <tr>
                <th>N°</th>
                <th>Nombres y Apellidos</th>
                <th>Email</th>
                <th>Numero de Telefono</th>
                <th>Direccion</th>
                <th>Direccion Opcional</th>
                <th>Nota de pedido</th>
                <th>Fecha de entrega</th>
                <th>Intevarlo de tiempo</th>
                <th>Nombre de Producto</th>
                </tr>
                {/* -- Aqui estamos recirriendo el objeto que nos llega en ordens y asi poder renderizarlo
                          El parametro index es para ponerle que cuente cuantas veces se esta recorriend cada 
                          uno de los objetos */}
                {ordens.map((orden, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{orden.Nombres + " " + orden.Apellidos}</td>
                    <td>{orden.Email + " "}</td>
                    <td>{orden.Telefono}</td>
                    <td>{orden.Direccion}</td>
                    <td>{orden.Direccion_Opcional}</td>
                    <td>{orden.Nota_pedido}</td>
                    <td>{orden.Fecha_Entrega}</td>
                    <td>{orden.IntervaloTiempo}</td>
                    <td>{orden.nombre_Pedido}</td>
                    {/*<td>{orden.Precio}</td>*/}
                </tr>
                ))}
              </thead>
            </table>
          </div>
          </div>
        </div>
      </Fragment>
    )
}

export default Pedidos
