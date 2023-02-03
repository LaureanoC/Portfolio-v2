import React from 'react';
import { useState } from "react";
import Input from './FormularioInput.js';
import TextArea from './FormularioTextArea.js';
import '../stylesheets/Formulario.css';

function Formulario() {

    return(

        <div className='contenedor-formulario'>
          <form action="https://formspree.io/f/xoqrdnpn" method="POST">

            <Input name='nombre-apellido' label='Nombre y Apellido' type='text'/>

            <Input name='email' label='Correo Electrónico' type='email' />

            <Input name='asunto' label='Asunto' type='text' />

            <TextArea name='mensaje' label='Mensaje' type='textarea'/>

            <button className= 'botonform enabled' type='submit' >Enviar</button>
          </form>
        </div>

    );
}

export default Formulario;