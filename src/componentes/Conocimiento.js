import React from "react";
import '../stylesheets/Conocimiento.css';

function Conocimiento (props){
    return(
        <div className="contenedor-conocimiento">
            <div className="contenedor-imagen-conocimiento" data-aos='fade-right' data-aos-duration={props.time} data-aos-offset="570" >
                <img className="conocimiento-imagen" src={require(`../Imagenes/conocimiento-${props.imagen}.png`)} alt = {props.alt}/>
            </div>
            <p className="conocimiento-texto" data-aos='fade-up' data-aos-duration={props.time} data-aos-offset="500">{props.texto}</p>
        </div>
    );
}   

export default Conocimiento;