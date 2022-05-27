import React from 'react'
import StyleNavbar from './css/StyleNavbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/" className="navbar-brand">inicio</Link>
                <Link to='/pedidos' className="navbar-brand">Pedidos</Link>
               <Link to='/reportes' className="navbar-brand">Reportes</Link>
            </div>
        </nav>
        );
}
        
export default Navbar

