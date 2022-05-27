// Importamos el css para darle estilos al nuestro componente
import StyleFormm from '../components/css/StyleFormm.css'

// --           Componente: esta es una funcion que retorna un elemento --
// -- Aqui le estamos pasando como parametro dos objetos que contienen los datos que se van a mostrar en el componente --
const Form = ({ producto, setProducto }) => {

    // -- handleChange este componente permite cambiar el valor de un estado --
    const handleChange = e => {
        // -- setProducto({ ...producto, [e.target.name]: e.target.value }) esto es lo que hace que el estado cambie --
        setProducto({
            // -- ...producto es una funcion que permite agregar un nuevo objeto al estado --
            ...producto,
            // -- [e.target.name] es una funcion que permite acceder a una propiedad del objeto producto --
            [e.target.name]: e.target.value
        })
    
    }

    // -- aqui lo que hacemos es declarar las variables y igualarles el valor que se le paso por 
    //      parametro arriba ==> Form = ({ producto, setProducto }) --
    let { Image, Titulo, PrecioCosto, Precio, Descripcion/*, banner*/ } = producto

    // -- handleSubmit este componente permite enviar los datos del formulario a la base de datos a travez 
    //      de nuestra end point(Es una interfaz expuesta por un comunicante o un canal de comunicación) --
    const handleSubmit = () => {
        // -- Aqui estamos parseando(Convirtiendo a entero) la variable Precio 
        Precio = parseInt(Precio, 10)
        // -- Aqui estamos parseando(Convirtiendo a entero) la variable PrecioCosto
        PrecioCosto = parseInt(PrecioCosto, 10)

        // -- Validando que los datos no esten vacios
        if (Image === '', Titulo === '' || PrecioCosto <=0 || Precio <= 0 || Descripcion === '') {
            // Si estan vacios los mostramos en un alert
            alert("Todos los campos son obligatorios")
            // y retornamos para que vuelva a escribir en el formulario
            return
        }

        // -- Aqui estamos haciendo una peticion post(es usado cuando se requiere enviar información al servidor como, por ejemplo, un archivo de actualización, información de formulario, etc) a nuestra api --
        const requestInit = {
            method: 'POST', // -- Aqui estamos diciendo que el metodo que vamos a usar es POST --
            headers: { 'Content-Type': 'application/json' }, // -- Aqui estamos diciendo que el tipo de contenido que vamos a enviar es un json --
            body: JSON.stringify(producto) // -- Aqui estamos diciendo que el body que vamos a enviar es un json --
        }
        // Ejemplo: fetch('https://api.covid19api.com/summary' el fetch nos permite hacer peticiones a una API o algun servicio --
        // El parametro requestInit es un objeto que contiene la informacion que se va a enviar al servidor --
        fetch('http://localhost:8000/productos', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        // Limpiando los cuadros
        setProducto({
            //-- Aqui estamos igualando el valor de las variables a vacio para asi limpiar cuando termine todo el proceso enviar los datos --
            Image: '',
            Titulo: '',
            Precio: 0,
            PrecioCosto: 0,
            Descripcion: '',
            banner: ''
        })
    }
// -- Aqui retornamos y solo lo que estan adentro del return(codigo..), y solo mandamos a llamar a las funciones de arriba --
// -- El return es una funcion que retorna un elemento --
    return (
        <div className="container">
        <div className="formm">
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">URL Imagen</label>
                {<input value={Image} name="image" onChange={handleChange} type="text" className="form-control" id="image" />}
                {/*<input name="file" type="file"></input>*/}
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Titulo</label>
                <input value={Titulo} name="Titulo" onChange={handleChange} type="text" className="form-control" id="title" />
            </div>

            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio Costo</label>
                <input value={PrecioCosto} name="PrecioCosto" onChange={handleChange} type="number" className="form-control" id="precioCosto" />
            </div>

            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio Venta</label>
                <input value={Precio} name="Precio" onChange={handleChange} type="number" className="form-control" id="precio" />
            </div>

            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <textarea value={Descripcion} name="Descripcion" onChange={handleChange} type="text" className="form-control" id="descripcion" rows="3" />
            </div>

            {/*<div className="mb-3">
                <label htmlFor="banner" className="form-label">banner</label>
                <input value={banner} name="banner" onChange={handleChange} type="text" className="form-control" id="banner" />
    </div>*/}

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        
        </div>
        </div>
    );
}
// -- export default Form sirve para exportar por defecto un componente -- 
// -- Esto quiere decir que si no se le pasa ningun parametro, el componente que se exporta por defecto es el Form --
export default Form;