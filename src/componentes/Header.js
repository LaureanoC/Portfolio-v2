import React from "react";
import '../stylesheets/Header.css'

function Header(){
    return (
        <header>
            <div className="contenedor-header">
                <nav><a href="#" className="header-home">Laureano Neyén Chaves</a></nav>

                <nav className="contenedor-links">
                    <div><a href="#sobre-mi">Sobre mí</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#formacion">Formación</a></div>
                    <div><a href="#proyecto">Proyectos</a></div>
                    <div><a href="#contacto">Contacto</a></div>
                </nav>
            </div>
        </header>
    );
}

export default Header;