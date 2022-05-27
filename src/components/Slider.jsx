import React from 'react'
import {useState} from 'react'
const Slider = ({slider, setSlider}) => {

    const handleUpdate = () => {
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(slider)
        }
        fetch('http://localhost:3056/api', requestInit)
        .then(response => response.json())
        .then(data => {console.log(data)})

    }

    return (
        <div>
            <input  type="text" name="slider" className="slider" />
            <button onClick={handleUpdate}>Actualizar</button>
        </div>
    )
}
export default Slider
