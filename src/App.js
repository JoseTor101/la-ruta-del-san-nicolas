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
import Test1 from './img/test1.jpg';

function App() {
  const [seeHeader, setSeeHeader] = useState(false);
  const [details, setDetails] = useState(false);

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

  // Use a useEffect to handle intersection changes
  useEffect(() => {
    handleIntersection();
  }, [exploringInView, perksInView]);

  const showDetails = (val) => {
    setDetails(val);
  }

  return (
    <div className='main-wrapper'>
      <header className="fixed-header">
        <Header view={seeHeader} />
      </header>

      <div className="landing">
        <div className='text-intro'>
          <p>¿Por qué viajar con nosotros?</p>
          <ArrowDownward sx={{ fontSize: 50, strokeWidth: 3 }} className='moving-arrow' />
        </div>
      </div>

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
              <div className=''>Altura: 4080 MSNM</div>
              <div className=''>Dificultad: *****</div>
              <div className='detail-desc'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in semper felis. Sed gravida ullamcorper lectus ac venenatis. Praesent nulla ligula, condimentum sit amet dolor a, ullamcorper ornare libero. Nam pharetra sodales dui, non interdum lorem viverra a.</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className='perks' ref={perksRef}>
        <div className='perk highlight'>
          <div className='perk-icon'>
            <HandshakeIcon sx={{ fontSize: 120, strokeWidth: 3, color: '#FFFFFF' }} id='hand-shaking' />
          </div >
          <p  className='perk-title'>TALENTO</p>
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
          <p  className='perk-title'>CONFIANZA</p>
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
          <p  className='perk-title'>OFERTA</p>
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
    </div>
  );
}

export default App;
