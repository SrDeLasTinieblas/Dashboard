//         -- IMPORTANDO LAS LIBRERIAS DE REACTjs --
// --           UseState: crea internamente una variable donde 
//              se almacena los estados de nuestro componente   --    

// -- useEffect: es una funcion que se ejecuta cuando el componente se monta
import React, { useState, useEffect } from 'react';
// -- Aqui importamos los stilos de la card --
import StyleCards from './css/StyleCards.css'

// --           Componente: esta es una funcion que retorna un elemento --
const Cards = () => {
// -- El setTotal es un estado que almacena el array de objetos que se recibe en un .JSON  --

// -- Como el valor que nos devuelve el useState es un array, debemos acceder a los valor de cada uno de ellos, y eso se hace
//      descomponiendo con el otro estado (total) para asi acceder al contenido de manera individual --
    const [total, setTotal] = useState([])
    // -- Funcion que se ejecuta al iniciar el componente --
    // este hook permite llevar a cabo efectos secundarios en componentes funcionales: en pocas palabras que se ejecuta en segundo plano
    useEffect(() => {
        // -- Esta funcion tiene como nombre getTotal y que se ejecuta al iniciar el componente --
        const getTotal = () =>{
            // Ejemplo: fetch('https://api.covid19api.com/summary' el fetch nos permite hacer peticiones a una API o algun servicio --
            fetch('http://localhost:3010/reportes/PrecioTotalProductos')
            // -- .then(response => response.json()) nos permite transformar la respuesta en un objeto .JSON --
            .then(resp => resp.json())
            // -- .then(data => setTotal(data)) nos permite almacenar el objeto .JSON en el estado --
            .then(resp => setTotal(resp))
        }
        // -- Ejecutamos la funcion getTotal() --
        getTotal()
    }, [])

//----------------------------------------------------------------------------------------------------------------------
// -- El setSumarPrecioVenta es un estado que almacena el array de objetos que se recibe en un .JSON  --

// -- Como el valor que nos devuelve el useState es un array, debemos acceder a los valor de cada uno de ellos, y eso se hace
//      descomponiendolo con el otro estado (setSumarPrecioVenta) para asi acceder al contenido de manera individual --
    const [SumarPrecioVenta, setSumarPrecioVenta] = useState([])
    // este hook permite llevar a cabo efectos secundarios en componentes funcionales: en pocas palabras que se ejecuta en segundo plano
    useEffect(() => {
        // -- Esta funcion tiene como nombre getSumarPrecioVenta y que se ejecuta al iniciar el componente --
        const getSumarPrecioVenta = () =>{
            try {
            // Ejemplo: fetch('https://api.covid19api.com/summary' el fetch nos permite hacer peticiones a una API o algun servicio --
            fetch('http://localhost:3011/reportes-card-2/SumarPrecioVenta')
            // -- .then(response => response.json()) nos permite transformar la respuesta en un objeto .JSON --
            .then(resp => resp.json())
            // -- .then(data => setSumarPrecioVenta(data)) nos permite almacenar el objeto .JSON en el estado que tiene como nombre setSumarPrecioVenta --
            .then(resp => setSumarPrecioVenta(resp))    
        } catch (error) {
        alert(error)
    }
        }

        // -- Ejecutamos la funcion getSumarPrecioVenta() --
        getSumarPrecioVenta()
    }, [])    

        


//-------------------------------------------------------------------------------------------------------------------------
// Aqui sucede lo mismo que en el componente anterior, pero con el estado de setCosto
const [costo, setCosto] = useState([])
   try{
useEffect(() => {
    const getCosto = () =>{
    
        fetch('http://localhost:3012/reportes-card-3/sumarCosto')
        .then(resp => resp.json())
        .then(resp => setCosto(resp))
    }
    
    getCosto()

}, [])
   }catch(error){
         console.log(error)
    }

// -- Aqui retornamos y solo lo que estan adentro del return(codigo..), y solo mandamos a llamar a las funciones de arriba --
// -- El return es una funcion que retorna un elemento --
// -- Cada grid es una card --
    return (
        <div className="grid">
            {/*<div className="card" >
                  {total.map((tota) => (
                <tr>
                    <h4 className="letras">Gastos</h4>
                    <span className="letraGastos">{tota.SUMValor}</span>
                </tr>
                  ))}
                  </div>*/}

            <div className="card" >
                  {SumarPrecioVenta.map((PrecioVenta) => (
                <tr>
                    <h4 className="letras">Ingresos</h4>
                    <span className="letraIngresos">{PrecioVenta.SUMValor}</span>
                </tr>
                ))}
            </div>

            <div className="card" >
                  {costo.map((cost) => (
                <tr>
                    <h4 className="letras">Costo</h4>
                    <span className="letraCosto">{cost.SUMValor}</span>
                </tr>
                ))}
            </div>

            <div className="card" >
                {SumarPrecioVenta.map((PrecioVenta) => (
                costo.map((cost) => (
                <tr>
                    <h4 className="letras">Ganancias</h4>
                    <span className="letraGanancia">{cost.SUMValor - PrecioVenta.SUMValor}</span> {/* -- Aqui se hace la resta para sacar la ganancia --*/}
                </tr>
                ))
                ))}
            </div>
</div>
    )
}
// -- export default sirve para exportar por defecto un componente -- 
export default Cards
