//         -- IMPORTANDO LAS LIBRERIAS DE REACTjs --
// --           UseState: crea internamente una variable donde 
//              se almacena los estados de nuestro componente   --   

// -- Fragment: es una etiqueta que permite agrupar varios elementos
// -- useEffect: es una funcion que se ejecuta cuando el componente se monta
import React, {Fragment, useState, useEffect } from 'react';
// Aqui estoy importando el componente List
import List from './List';
import slider from './Slider';
import Navbar from './Navbar';
// -- Aqui estoy exportando el componente Form
import Form from './Form';
//import '../src/components/css/productos.css'
//import usuarios from './components/usuarios';

function Inicio() {

  const [producto, setProducto] = useState({    
    // -- Aqui estamos dicindo que el estado producto tiene un objeto vacio --
    Titulo: '',
    Precio: 0,
    PrecioCosto: 0,
    Descripcion: ''
  })

  const [productos, setProductos] = useState([])

  const [Updated, setUpdated] = useState(false)

// -- El try catch nos permite capturar errores en nuestra aplicacion --
// -- Con el try capturamos el error y con el catch lo mostramos en consola --
try {
  useEffect(() => {
    const getProductos = () => {
      fetch('http://localhost:8000/productos')
      .then(resp => resp.json())
      .then(resp => setProductos(resp))
    }
    getProductos()
    setUpdated(false)
  }, [Updated])

  //const [slider, setSlider] = useState([])

  /*useEffect(() => {
    Axios.put('http://localhost:3056/api')
    .then(response => {
        setSlider(response.data)
    })
    console.log('Se actualizo el estado')
  }, [])
*/

} catch (error) { alert(error) }

  return (

    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">        
          <div className="col-7">
          <h2 style={{textAlign: 'center'}}>Lista de productos</h2>
          {/* -- Aqui estamos llamando al componente List y estamos recibiendo como parametro 5 objetos que contienen los datos que se van a mostrar en el componente --*/}
          <List producto={producto} setProducto={setProducto} productos={productos} Updated={Updated} setUpdated={setUpdated} ></List>
        </div>

        <div className="col-5">
          <h2 style={{textAlign: 'center'}}> Añadir Productos</h2>
          {/* -- Aqui estamos llamando al componente Form y estamos recibiendo como parametro 2 objetos que contienen los datos que se van a mostrar en el componente --*/}
          <Form producto={producto} setProducto={setProducto} />
        </div>

        </div>
      </div>
    </Fragment>
  );
}

export default Inicio;

