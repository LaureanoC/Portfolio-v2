import React from "react";
import '../stylesheets/Academico.css';

function Academico (props){
    return(
        <div className="contenedor-academico">
            <div className="contenedor-imagen-academico">
                <img className= "academico-imagen" src={require(`../Imagenes/academico-${props.imagen}.png`)}
                data-aos='flip-up' data-aos-duration={props.time} data-aos-offset="600"/>
            </div>
            <div data-aos='fade-up' data-aos-duration={props.time} data-aos-offset="600">
                <p className="academico-subtitulo">{props.subtitulo}</p>
                <p className="academico-texto">{props.texto}</p>
            </div>
        </div>
    );
}

export default Academico;