import { Component } from "react"
import Productos_masVendido from "./Productos_masVendido";
import Navbar from "./Navbar";
import StyleReportes from './css/StyleReportes.css';
import Cards from "./Cards.jsx";

class Reportes extends Component {

    async peticion() {
        try {
            // Aqui se esta haciendo la peticion al servidor para que nos devuelva los datos que se van a mostrar
            // El await es para que espere a que se termine la peticion que esta haciendo el fetch
        const respuesta = await fetch('http://localhost:7000/orden_detalles')
        // Aqui estoy guardando la respuesta que me viene como .JSON en una variable
        const json = await respuesta.json()
        // Aqui estamos diciendo que la respuesta sera la que se encuentra en la variable json
        this.setState({
            respuesta: json
        })
    }catch(error) {
        alert('Servidor no levantado o algo fallo en envio de datos ')
            console.log(error)
        }
    }
    // Aqui se esta llamando a la funcion peticion() y le estamos diciendo que sea una funcion asincrona 
    //  por que tiene que esperar a que termine la peticion para que se ejecute
    async componentDidMount() {
        this.peticion()
    }

    render() {
        return (
            <div>
                <Navbar />
                <h3>Reportes</h3>
                    <div className="contenedor-cards">
                        <Cards/>
                    </div>

                <div className="reporte">
                    <Productos_masVendido/>
                </div>
                                                                        {/** Aqui se esta renderizando los componentes que han hecho 
                                                                 * otros archivos(Productos_masVendido.jsx, Cards.jsxs)*/}
            </div>

        )
    }
}
export default Reportes
