import './App.css';
import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

// COMPONENTS
import Header from './components/Header';
import Photo from './components/Photo';

// IMG's / ICONS
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Rope from './img/rope.svg';
import Mountain from './img/cerro_Sn.svg';
import Test1 from './img/test1.jpg';

function App() {
  const [seeHeader, setSeeHeader] = useState(false);
  const [details, setDetails] = useState(false);
  const [sent, setSend] = useState(false);
  const [formData, setFormData] = useState({
      fname: '',
      ftel: '',
      fmail: '',
      fsubject: '',
      fmsg: ''
  });

  // -- Intersection functionality-- 

      // Use useInView for exploring options
      const { ref: exploringRef, inView: exploringInView } = useInView({
        threshold: 0.3,
      });

      // Use useInView for perks without threshold
      const { ref: perksRef, inView: perksInView } = useInView();

      // Update seeHeader based on either inView status
      const handleIntersection = () => {
        setSeeHeader(exploringInView || perksInView);
      };

      // Handle changes in intersections of selected views
      useEffect(() => {
        handleIntersection();
      }, [exploringInView, perksInView]);

      const showDetails = (val) => {
        setDetails(val);
      }

  // -- Form managment

      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value
          });
      };


      const handleSubmit = (e) => {
          e.preventDefault();
          // Manejo de formulario en el servidor

          setSend(true);
          setTimeout(() => {
            setSend(false);
          }, 3000)
          

         

          setFormData({
            fname: '',
            ftel: '',
            fmail: '',
            fsubject: '',
            fmsg: ''
          })

          
          console.log('Formulario enviado:', formData);
      };

      

  return (
    <div className='main-wrapper'>
      <header className="fixed-header">
        <Header view={seeHeader} />
      </header>

      <div className='background'></div>

      {/* ----- LANDING ----- */}

      <div className="landing">
        <div className='text-intro'>
          <p>¿Por qué viajar con nosotros?</p>
          <ArrowDownward sx={{ fontSize: 50, strokeWidth: 3 }} className='moving-arrow' />
        </div>
      </div>

      {/* ----- EXPLORING-OPTIONS ----- */}
      <div className='exploring-options' ref={exploringRef}>
        <div id='header-exploring-options'>
          <p>Explora el Suroeste antioqueño</p>
        </div>

        <div className={details ? 'carousel-container-hidden' : 'carousel-container'}>
          <figure id='rope-hanging1'>
            <img src={Rope} alt="rope" key={"rope"}></img>
          </figure>
          <div className='photo-container'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Photo key={index} inview={exploringInView ? 1 : 0} showDetails={showDetails} />
            ))}
          </div>
        </div>

        <div className={details ? 'exploring-detail-c visible' : 'exploring-detail-c'}>
          <div className='square-info-c'>
            <div className='detail-img'>
              <img src={Test1} alt='test-img'></img>
            </div>
            <div className='detail-info-c'>
              <div className='detail-title'>
                <p>Cerro San Nicolás</p>
                <ClearIcon sx={{ fontSize: 30, strokeWidth: 3 }} className='exit-icon' onClick={() => showDetails(false)} />
              </div>
              <div className='detail-subt'><span>Altura:</span> 4080 MSNM</div>
              <div className='detail-subt'><span>Dificultad:</span>*****</div>
              <div className='detail-desc'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in semper felis. Sed gravida ullamcorper lectus ac venenatis. Praesent nulla ligula, condimentum sit amet dolor a, ullamcorper ornare libero.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- PERKS ----- */}
      <div className='perks' ref={perksRef}>
        <div className='perk highlight'>
          <div className='perk-icon'>
            <HandshakeIcon sx={{ fontSize: 120, strokeWidth: 3, color: '#FFFFFF' }} id='hand-shaking' />
          </div >
          <p className='perk-title'>TALENTO</p>
          <div className='perk-subtitle'>
            <p>+10 Guías locales</p>
          </div>
          <div className='perk-desc'>
            <p>Pauta con guías locales,
              con gran experiencia en el sector. El personal mejor capacitado.</p>
          </div>
          <div className='perk-redirect'>
            <div className='perk-button'>
              <p>EXPLORAR GUÍAS</p>
            </div>
          </div>
        </div>

        <div className='perk'>
          <div className='perk-icon'>
            <HealthAndSafetyIcon sx={{ fontSize: 120, strokeWidth: 3, color: '#FFFFFF' }} id='shopping-cart' />
          </div >
          <p className='perk-title'>CONFIANZA</p>
          <div className='perk-subtitle'>
            <p>Medidas de seguridad en tus viajes</p>
          </div>
          <div className='perk-desc'>
            <p>Comunicación directa con los servicios de emergencia y póliza de seguros incluida con tus paquetes</p>
          </div>
          <div className='perk-redirect'>
          </div>
        </div>

        <div className='perk highlight'>
          <div className='perk-icon'>
            <AddShoppingCartIcon sx={{ fontSize: 120, strokeWidth: 3, color: '#FFFFFF' }} id='shopping-cart' />
          </div >
          <p className='perk-title'>OFERTA</p>
          <div className='perk-subtitle'>
            <p>+3 Rutas únicas</p>
          </div>
          <div className='perk-desc'>
            <p>Ofrecemos paquetes con experiencias únicas para nuestros clientes</p>
          </div>
          <div className='perk-redirect'>
            <div className='perk-button'>
              <p>EXPLORAR PAQUETES</p>
            </div>
          </div>
        </div>
      </div>

      {/* ----- REVIEWS ----- */}

      <div className='reviews'>

        <div className='back-mountain'>
          <img src={Mountain} alt='back-mountain'></img>
        </div>

        <div className='reviews-c'>
          <div className='review-item'>
            <div className='bubble-img'>
              <img src={Test1} alt='review-img'></img>
            </div>
            <div className='tooltip'>
              <div className='bubble-text'>
                <p><b>"</b>Una experiencia muy agradable<b>"</b> - Camilo</p>
              </div>
            </div>
          </div>

          <div className='review-item'>
            <div className='bubble-img'>
              <img src={Test1} alt='review-img'></img>
            </div>
            <div className='tooltip'>
              <div className='bubble-text'>
                <p><b>"</b>Guías bastante competentes<b>"</b> - Laura</p>
              </div>
            </div>
          </div>

          <div className='review-item'>
            <div className='bubble-img'>
              <img src={Test1} alt='review-img'></img>
            </div>
            <div className='tooltip'>
              <div className='bubble-text'>
                <p><b>"</b>Hospedajes cómodos<b>"</b> - Andrés</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* ---- CONTACT-US ----*/}
      <div className='contact-us'>
            <div className='contact-us-c'>
              <div className='left-contact-us'>
                <p id='contact-us-title'>Contáctanos</p>
                <p id='contact-us-desc'>
                Si estás interesado en viajar con nosotros escríbenos, te responderemos lo más pronto posible!
                </p>
              </div>
              <div className='right-contact-us'>
              <form id="contact-form" onSubmit={handleSubmit}>
                  <div id='row-form-c'>
                      <div id="name-form-c-us">
                          <label htmlFor="fname">Nombre: </label>
                          <input 
                              type="text" 
                              id="fname" 
                              name="fname" 
                              placeholder="Ej. Juan Pérez" 
                              value={formData.fname} 
                              onChange={handleChange} 
                              required
                          />
                      </div>
                      <div id="tel-form-c-us">
                          <label htmlFor="ftel">Celular: </label>
                          <input 
                              type="tel" 
                              id="ftel" 
                              name="ftel" 
                              pattern="[0-9]{10}" 
                              title="El número debe tener 10 dígitos"
                              placeholder="Ej. 1234567890" 
                              value={formData.ftel} 
                              onChange={handleChange}
                              required
                          />
                      </div>
                  </div>
                  <div id="mail-form-c-us">
                      <label htmlFor="fmail">Correo: </label>
                      <input 
                          type="email" 
                          id="fmail" 
                          name="fmail" 
                          placeholder="Ej. juan.perez@example.com" 
                          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                          title="Verifica el formato del correo"
                          value={formData.fmail} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div id="subject-form-c-us">
                      <label htmlFor="fsubject">Asunto: </label>
                      <input 
                          type="text" 
                          id="fsubject" 
                          name="fsubject" 
                          placeholder="Ej. Información de paquetes" 
                          value={formData.fsubject} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div id="msg-form-c-us">
                      <label htmlFor="fmsg">Mensaje: </label>
                      <textarea 
                          id="fmsg" 
                          name="fmsg" 
                          placeholder="Ej. Quisiera más información sobre el paquete XX..." 
                          value={formData.fmsg} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div className="button-form">
                    <button id="submit-btn" type='submit'>
                      { sent ? "ENVIADO!" : "ENVIAR" }
                    </button>
                  </div>
              </form>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
