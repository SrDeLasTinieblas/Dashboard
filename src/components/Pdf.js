//ARCHIVO QUE NO SE VA USAR 
import React, {useState, useRef, useEffect} from 'react';
import jsPDF from 'jspdf';
import * as $ from 'jquery';
import Reportes from './Reportes';

const Pdf = () => {
    const [orden, setOrden] = useState([])
    useEffect(() => {
        const getOrden = () =>{
            fetch('http://localhost:7000/orden_detalles/orden')
            .then(resp => resp.text())
            .then(resp => setOrden(resp))
            .catch(error => console.log(error))
        }
        getOrden()
    }, [])
    
    
const GeneratePDF = () => {
    try
    {
        var doc = new jsPDF('p', 'pt');

        doc.text(20, 20, 'This is the first title.')

        doc.addFont('helvetica', 'normal')
        doc.text(20, 60, orden.map((orde, index) => (
            <tr>
                <th scope="row">{JSON.stringify(index +1)}</th>
                <td>{JSON.stringify(orde.nombre_Pedido)}</td>
                <td>{JSON.stringify(orde.total)}</td>
            </tr>
            )))
        doc.text(20, 100, 'This is the thrid title.')

        doc.save('Reportes.pdf')
    }
    catch(error)
    {
        alert(error)
    }
}

    return (
        <div>
            {/*<button onClick={generateReporte}>Generate PDF</button>*/}

            <div>
                <button onClick={GeneratePDF} type="primary">Download PDF</button>
            </div>
        </div>
    )
}

export default Pdf
