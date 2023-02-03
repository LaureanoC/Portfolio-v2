import React from "react";
import '../stylesheets/Header.css'

function Header(){
    return (
        <header className="sticky">
            <div className="contenedor-header">
                <nav><a className="header-home">Laureano Neyén Chaves</a></nav>

                <nav className="contenedor-links">
                    <div><a href="#perfil">Perfil</a></div>
                    <div><a href="#sobre-mi">Sobre mí</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#formacion">Formación</a></div>
                    <div><a href="#proyectos">Proyectos</a></div>
                    <div><a href="#contacto">Contacto</a></div>
                </nav>
            </div>
        </header>
    );
}

export default Header;