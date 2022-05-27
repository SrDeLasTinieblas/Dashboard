import React from "react";

// -- Aqui le estamos pasando como parametro dos objetos que contienen los datos que se van a mostrar en el componente --
const List = ({producto, setProducto, productos, setUpdated}) => {

    // -- handleDelete es una funcion que se ejecuta cuando el usuario da click en el boton de eliminar --
    //      Estamos diciendo aqui que la funcion handleDelete recibe como parametro el id del producto que se va a eliminar --
    const handleDelete= Id => {

       // -- Aqui estamos declarando que metodo que se va usar sera el DELETE, por que lo queremos es eliminar
        const requestInit = {
            method: 'DELETE'
    }
    //       y a continuacion le pasamos el parametro que es el id del producto que se va a eliminar -- 
    //  y le pasamos como parametro el requestInit que es el metodo que se va a usar para eliminar el producto --
    fetch('http://localhost:8000/productos/'+ Id, requestInit)
    .then(resp => resp.text())
    .then(resp => console.log(resp))
    
    // -- Aqui estamos llamando a la funcion setUpdated que se ejecuta cuando el usuario da click en el boton de eliminar para que 
    //      se actualice la lista de productos --
    setUpdated(true)
    }

//-------------------------------------------------------------------------

    // -- aqui lo que hacemos es igualarles el valor que se le paso por 
    //      parametro arriba ==> List = ({ producto, setProducto }) --
    let {Image, Titulo, Precio, Descripcion} = producto
    // handleUpdate es una funcion que se ejecuta cuando el usuario da click en el boton de actualizar --
    //      Estamos diciendo aqui que la funcion handleUpdate recibe como parametro el id del producto que se va a actualizar --
    const handleUpdate = Id => {
        if(Image === '', Titulo === '' || Precio <= 0 || Descripcion === '' ){
            alert("Todos los campos son obligatorios")
            return
        }
        
        // -- Aqui estamos diciendo de que clase sera la peticion que se va a usar para actualizar el producto --
        const requestInit = {
            method:'PUT', // -- Aqui estamos diciendo que el metodo que se va a usar sera el PUT --
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(producto)
        }
        try{
                    fetch('http://localhost:8000/productos/'+ Id, requestInit)
        .then(resp => resp.text())
        .then(resp => setProducto(resp))
                // Limpiando los cuadros
                setProducto({
                    Titulo: '',
                    Precio: 0,
                    Descripcion: '',
                })
        setUpdated(true)

        } catch(error){
            console.log(error)
        }

    }
    return (
        <table id='table' className="table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Title</th>
                    <th>Precio Costo</th>
                    <th>Precio Venta</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                <tr key={producto.Id}>
                    <td>{producto.Image}</td>
                    <td>{producto.Titulo}</td>
                    <td>{producto.PrecioCosto}</td>
                    <td>{producto.Precio}</td>
                    <td>{producto.Descripcion}</td>
                    <td>{/*producto.banner*/}</td>
                    
                    <td>
                        <div className="mb-3" >
                            {/* -- Aqui le estamos pasando como parametro el id del producto que se va a eliminar -- */}
                            <button onClick={() => handleDelete(producto.Id)} className="btn btn-danger">Delete</button>
                        </div>
                        <div className="mb-3" >
                            {/* -- Aqui le estamos pasando como parametro el id del producto que se va a actualizar -- */}
                            <button onClick={() => handleUpdate(producto.Id)} className="btn btn-dark">Update</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;



