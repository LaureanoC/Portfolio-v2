import React from "react";
import '../stylesheets/SobreMi.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css'



function SobreMi(props) {
  return (
    <div className="contenedor-presentacion">
      <div className="contenedor-resumen">

        <div className="contenedor-resumen-texto" >
          <h2 className="presentacion-titulo" data-aos="fade-right" data-aos-duration="1000" >Mi nombre es Laureano Neyén Chaves.</h2>
          <p className="presentacion-texto" data-aos="fade-right" data-aos-duration="1300" >Soy estudiante universitario y me encuentro aprendiendo los frameworks React.js y Djanjo.</p>
          <nav className="presentacion-redes-sociales" data-aos="fade-right" data-aos-duration="1600" >
            <a  className="github" href="">Github <FontAwesomeIcon icon={faGithub} /></a>
            <a href="">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="">Instagram <FontAwesomeIcon icon={faInstagram} /></a>
          </nav>
        </div>

        <div data-aos="fade-left" data-aos-duration="300" >
          <img src={require(`../Imagenes/perfil-${props.imagen}.png`)} className="imagen-perfil"/>
        </div>

      </div>
    </div>
  );
}

export default SobreMi;