import React, {useState, useRef, useEffect} from 'react';
import StylePVendidos from './css/StylePVendidos.css';

export const Productos_masVendido = () => {

const [orden, setOrden] = useState([])

try {
    useEffect(() => {
    const getOrden = () =>{
        fetch('http://localhost:7000/orden_detalles/orden')
        .then(resp => resp.json())
        .then(resp => setOrden(resp))
        .catch(error => console.log(error))
    }
    getOrden()
}, [])
} catch (error) {
    alert(error)
}

    return (
        <div className="container-report">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th>Nombre de producto</th>
                    <th>N° de vendidas</th>
                </tr>
            </thead>
            <tbody>
                {/* -- Aqui estamos recirriendo el objeto que nos llega en ordens y asi poder renderizarlo
                          El parametro index es para ponerle que cuente cuantas veces se esta recorriend cada 
                          uno de los objetos */}
                {orden.map((orde, index) => (
                <tr>
                    <th scope="row">{index +1}</th>
                    <td>{orde.nombre_Pedido}</td>
                    <td>{orde.total}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>

    )
}

export default Productos_masVendido

/*

------------------------------
        <div>
            <div>
               {orden.map(orden => (
                   <div>
                       <p>{orden.nombre_Pedido+ "       ==>  "+ orden.total}</p>
                    </div>
                ))}

            </div>

        </div>

------------------------------












import React from 'react'

class Productos_masVendido extends React.Component {
    state = {
        respuesta:[],
    
    }


                /*const requestInit = {
                        method: 'get'

                       const orden() => {
    const requestInit = {
        method: 'get'
}
fetch('http://localhost:8000/productos/orden'+ requestInit)
.then(resp => resp.text())
.then(resp => console.log(resp))

    }     
                }
                fetch('http://localhost:7000/orden_detalles/', requestInit)
                .then(resp => resp.text())
                .then(resp => console.log(resp))
                
                setUpdated(true)
                
            this.setState({
                respuesta: json
            })*/
/*  render() {
    /
     
            return (
                <div>
                    <h3>Productos mas vendidos</h3>
                   
                </div>
    
            )
        }
    }
export default Productos_masVendido*/

