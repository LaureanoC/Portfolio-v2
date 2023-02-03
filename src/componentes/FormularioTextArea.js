import React from "react";
import '../stylesheets/FormularioTextArea.css';

function FormularioTextArea(props){
    return(
        <div className='contenedor-textArea'>
            <label className= 'label-textArea' htmlFor={props.name}>{props.label}</label>
            <textarea className= 'mensaje' name={props.name} placeholder={props.label} required/>
        </div>
    );
}

export default FormularioTextArea;