import React from "react";
import { useState } from "react";
import '../stylesheets/FormularioInput.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';


function FormularioInput(props){

    const [error, setError] = useState('');
    const [errorIcon, setIconError] = useState('hide');
    const [inputClass, setInputClass] = useState('input');
    const [icon, setIcon] = useState(faCircleCheck);

    const emailValidation = (inputcorreo) => {

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(inputcorreo);
    }


    const handleError = (evento) => {
        //console.log(evento.target.value);
        //console.log(evento);
        //console.log(evento.target.name);
        //console.log(evento.target.placeholder);




        //Si alguno está vacío

        if(evento.target.value == ''){
            setError(`El campo ${evento.target.placeholder} no puede estar vacío.`);
            setIcon(faCircleXmark);
            setIconError('icon-error path');
            setInputClass('input error');

        } else{
            setError('');
            setIcon(faCircleCheck);
            setIconError('icon-correct')
            setInputClass('input correct');
        }

        console.log('Soy un: ' + evento.target.name);

        if(  (!evento.target.value == '') && (evento.target.name == 'email')){

            console.log('Son iguales');

            if((!emailValidation(evento.target.value))){
                console.log('No Cumple la regex');
                setError(`El correo electrónico introducido no es valido.`);
                setIcon(faCircleXmark);
                setIconError('icon-error path');
                setInputClass('input error');
            }
            
        }

        
    }

    return(
        <>
        <div className='contenedor-input'>
            <label className='label-input' htmlFor={props.name}>{props.label}</label>
            <input className={inputClass} onChange={handleError} type={props.type} name={props.name} placeholder={props.label} required />
            <FontAwesomeIcon className={errorIcon}icon={icon}/>
        </div>
        
        <p className="input-error">{error}</p>
        
        </>
    );
}

export default FormularioInput;