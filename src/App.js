import './App.css';
import Header from './componentes/Header.js';
import SobreMi from './componentes/SobreMi.js';
import Conocimiento from './componentes/Conocimiento.js';
import Academico from './componentes/Academico.js';
import Proyecto from './componentes/Proyecto.js';
import Formulario from './componentes/Formulario.js';
import ImagenContacto from'./Imagenes/contacto.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faGraduationCap, faLightbulb} from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';


function App() {

    useEffect(() => {
      AOS.init({duration: 2000});
    }, [])

  return (
    <div className="App" >
         <Header />
     <main>
        <h1 className='titulo-bienvenida' data-aos="fade-right">¡Hola! Te doy la bienvendida a mi portfolio.</h1>

        <a name='perfil'></a>
        <SobreMi imagen='1'/>
        <a name='sobre-mi'></a>

        
        <section data-aos="fade-right" data-aos-offset="600" id='sobremi' >
        
              <div className="contenedor-sobre-mi">
                <h3 className="sobre-mi-titulo">Sobre Mi</h3>
                <p className="sobre-mi-texto">Actualmente tengo 22 años, resido en la ciudad de Arrecifes, provincia Buenos Aires, Argentina. Me encuentro estudiando Ingeniería en Sistemas de la Información en la Universidad Tecnológica Nacional de Rosario.</p>
                <p className="sobre-mi-texto">Siempre estoy intentando mejorar mis cualidades en como el trabajo en equipo, la comunicación y flexibilidad. Siento que fortalecer esas cualidades es muy importante para lograr el objetivo principal de mi carrera como profesional.</p>
                <p className="sobre-mi-texto">Estudio para alcanzar dos de mis grandes objetivos:</p>
                <p className="sobre-mi-texto">1. Crear sistemas informaticos útiles y usables para facilitarles la vida a las personas.</p>
                <p className="sobre-mi-texto">2. Entretener a las personas mediante la creación o mantenimiento de sistemas informáticos.</p>
                <p className="sobre-mi-texto">Como adición, me encanta cocinar y ver las partidas competitivas de KOI, un equipo de Esports.</p>
              </div>
        </section>
        
        <a name='skills'></a>
            <section id='academia'>
            
              <div className='contenedor-tipo'>
                <h2 className='subtitulo' data-aos="zoom-in" data-aos-duration='1000' data-aos-offset="300">Mis conocimientos <FontAwesomeIcon icon={faCode}/></h2>
                
                <div className='contenedor-conocimientos'>
                
                  <Conocimiento texto = 'React' imagen = 'react' alt ='Logo de React' time='1000'/>
                  <Conocimiento texto = 'Python' imagen = 'python' alt ='Logo de Python' time='1200'/>
                  <Conocimiento texto = 'CSS' imagen = 'css' alt = 'Logo de CSS' time='1400'/>
                  <Conocimiento texto = 'HTML' imagen = 'html' alt = 'Logo de HTML5' time='1600'/>
                  <Conocimiento texto = 'Figma' imagen = 'figma' alt = 'Logo de Figma' time='1800'/>
                  <Conocimiento texto = 'MySQL' imagen = 'mysql' alt = 'Logo de MySQL' time='2000'/>
                  <Conocimiento texto = 'Javascript' imagen = 'javascript' alt = 'Logo de Javascript' time='2200'/>
                </div>
              </div>
            </section>

            
            <section id='educacion'>
            <a name='formacion'></a>
              <div className='contenedor-tipo'>
                <h2 className='subtitulo' data-aos="zoom-in" data-aos-duration='1000' data-aos-offset="800">Formación Académica <FontAwesomeIcon icon={faGraduationCap}/></h2>
                <div className='contenedor-academicos'>
                <Academico imagen='utn' subtitulo='Ingeniería en Sistemas de la Información' texto='En curso - Univesidad Tecnológica Nacional'
                  time='1800'/>
                <Academico imagen='one' subtitulo='Formación Oracle Next Education' texto='2022 - Oracle y Alura Latam'
                  time='2200'/>
                <Academico imagen='codo' subtitulo='Formación FullStack Python' texto='2021 - Codo a Codo 4.0'
                  time='2600'/>
                </div>
              </div>
            </section>
          
            <a name='proyectos'></a>
            <section id='proyectos'>
              <div className='contenedor-tipo'>
                <h2 className='subtitulo' data-aos="zoom-in" data-aos-duration='1000' data-aos-offset="1100">Mis Proyectos <FontAwesomeIcon icon={faLightbulb}/></h2>
                <div className='contenedor-proyectos'>

                  <Proyecto imagen='tryhardzone' titulo= 'TryhardZone comercio electrónico' 
                  texto= 'Visita mi comercio electrónico utilizando una FAKE API, realizado con heroku antes de su versión paga.' 
                  demo='https://www.linkedin.com/posts/laureano-ney%C3%A9n-chaves_hola-a-todos-durante-estos-%C3%BAltimos-4-d%C3%ADas-activity-6927299978017005568-71Os?utm_source=share&utm_medium=member_desktop'
                  repo= 'https://github.com/LaureanoC/TryhardZone'/  >

                  <Proyecto imagen='calculadora' titulo= 'Calculadora' 
                  texto= 'Este proyecto fue realizado para aprender los conceptos básicos de React.js. Utilizando componentes, props, manejadores de eventos.' 
                  demo= 'https://laureanoc.github.io/Calculadora-React/'  
                  repo='https://github.com/LaureanoC/Calculadora-React' />  

                  <Proyecto imagen='ahorcado' titulo= 'Juego del Ahorcado' 
                  texto= 'Un proyecto muy sencillo realizado para aprender JavaScript.' 
                  demo= 'https://laureanoc.github.io/Juego-Ahorcado/' 
                  repo= 'https://github.com/LaureanoC/Juego-Ahorcado'/  >

                  <Proyecto imagen='encriptador' titulo= 'Encriptador de Textos' 
                  texto= '¡Escribe un texto y será encriptado!.' 
                  demo= 'https://laureanoc.github.io/Desafio-Alura-One-1/' 
                  repo= 'https://github.com/LaureanoC/Desafio-Alura-One-1'/  >

                </div>
            </div>
          </section>
          
          <section>
          <a name='contacto'></a>
            <div className='contenedor-tipo foo'>
           
                  <h2 className='subtitulo contacto'>¿Quieres contactarme?</h2>
                  <p>Complete el siguiente formulario y me pondré en contacto lo antes posible.</p>
                  
                  <div className='contenedor-contacto'>
                  <Formulario/>
                    <div className='contenedor-imagen-contacto'>
                      <img className='imagen-contacto' src={ImagenContacto}/>
                    </div>
                  </div>
            </div>
            
          </section>
      </main>

        
        <footer className='footer'>Desarrollado por Laureano Neyén Chaves 2023 ©</footer>
    </div>
    
  );
}

export default App;
