import React from 'react'
// IMG's / ICONS
import Location from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

function Footer(){
    return(
        <footer>
            <div className="footer-items-c">
                <div>
                    <h3>Acerca de </h3>
                    <p>Nuestro principal objetivo es inspirar un mejor futuro a través del turismo responsable</p>
                </div>
                <div>
                    <h3>Contacto</h3>
                    <div className="f-reach-me" id='reach-me'>
                        <Location sx={{ fontSize: 30, strokeWidth: 3, color: '#FFFFFF' }} id='location-icon' />
                        <p id="location">
                            <a href="https://goo.gl/maps/tcczuWQwXFDwMX9y8" target="_blank">Farallones - Ciudad Bolivar, Antioquia</a>
                        </p>
                    </div>
                    <div className="f-reach-me">
                        <MailIcon sx={{ fontSize: 30, strokeWidth: 3, color: '#FFFFFF' }} id='mail-icon' />
                        <p id="location">
                            <a href="mailto:correo@gmail.com?subject=Hola,%20estoy%20interesad@%20en%20recibir%20más%20información%20sobre%20los%20planes" target="_blank">correo@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Lorem ipsum </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusamus dignissimos nemo distinctio illum! Ipsam itaque labore, officia iure neque beatae dolorum .</p>
                </div>
                <div>
                    <h3>Más información</h3>
                    <div className="f-legal-info">
                    <p><a href="" target="_blank">Avisos legales</a></p>
                    <p><a href="" target="_blank">Terminos y condiciones</a></p>
                    <p><a href="" target="_blank">Tratamiento de datos</a></p>
                    <p><a href="" target="_blank">Politica de cookies</a></p>
                    </div>
                </div>
            </div>
            <div id="copyright">
                <p>&copy; 2024 La ruta del San Nicolás. Todos los derechos reservados.</p>
            </div>
      </footer>
    )
}

export default React.memo(Footer);
