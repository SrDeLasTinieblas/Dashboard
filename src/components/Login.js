import StyleLogin from './css/StyleLogin.scss';
import React, { useState, useRef } from "react";

const url = 'http://localhost:3040/administradores';

const enviarDatos = async ( url, data) => {
const resp = await fetch ( url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    console.log(resp);
    const json = await resp.json();
    console.log(json);
}

export default function Login (props){

    //const refUsuario = useRef(null);
    //const refPassword = useRef(null);
    const [body, setBody] = useState( {username: '', password: ''} );

    const inputChange = ({target}) => {
        const {name, value} = target;
        setBody({
            ...body, 
            [name]: value});
    }
    
  return (
    <div>
    <div class="wrapper">
        <div /*value={form} onChange={handleChange}*/ class="form-signin">
            <h2 class="form-signin-heading">Please login</h2>
            <input
            name="username"  
            type="text" 
            class="form-control" 
            className="username" 
            placeholder="Email Address" 
            required="" 
            autofocus=""
            value={body.username}
            onChange={inputChange}
            />

            <input 
            name="password"
            type="password" 
            class="form-control" 
            className="password" 
            placeholder="Password" 
            required=""
            value={body.password}
            onChange={inputChange}
            />

            <label class="checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" className="rememberMe" />
                Remember me
            </label>

            <button 
            onClick={enviarDatos}
            class="btn btn-lg btn-primary btn-block"
            type="submit">Login
            
            </button>

        </div>
    </div>
</div>
  )

}