import React from "react";
import '../stylesheets/Proyecto.css'

function Proyecto (props){

    return (

        <div className="contenedor-proyecto">

            <div className="contenedor-proyecto-imagen">
                <img className="proyecto-imagen" src={require(`../Imagenes/proyecto-${props.imagen}.png`)}
                    data-aos="zoom-out" data-aos-duration='1000' data-aos-offset="1000" />
            </div>

            <div className="contenedor-proyecto-contenido"
            data-aos="zoom-out" data-aos-duration='1000' data-aos-offset="1000">
                <h3 className="proyecto-titulo">{props.titulo}</h3>
                <p className="proyecto-texto">{props.texto}</p>
                <div className="contenedor-proyecto-boton">
                    <a href={props.demo} target="_blank"><button className="boton demo">Ver Demo</button></a>
                    <a href={props.repo} target="_blank"><button className="boton repositorio">Repositorio</button></a>
                </div>
            </div>
        </div>
        
    );
}

export default Proyecto;