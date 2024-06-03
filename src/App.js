import './App.css';
import { useState, useRef } from 'react';
import { useInView } from "react-intersection-observer";

// COMPONENTS
import Header from './components/Header';
import Photo from './components/Photo';

// IMG's / ICONS
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import Rope from './img/rope.svg';
import Test from './img/test.jpg';
//import { Photo } from '@mui/icons-material';

function App() {
  const[seeHeader, setSeeHeader] = useState(false);
  const[details, setDetails] = useState(false);
  //const exploringOptionsRef = useRef(null);

  const handleIntersection = (inView) => {
    setSeeHeader(inView);
  };


  const {ref, inView} = useInView({
    threshold: 0.7,
    onChange: handleIntersection,
  });

  const showDetails = (val) =>{
    setDetails(val);
  }

  return (
    <div className='main-wrapper'>

      <header  className="fixed-header">
            <Header view={seeHeader}/>
      </header>

      <div className="landing">

          <div className='text-intro'>
              <p>¿Por qué viajar con nosotros?</p>
              <ArrowDownward sx={{ fontSize: 50, strokeWidth: 3 }} className='moving-arrow'/>
          </div>

      </div>

      
      <div className='exploring-options' ref={ref}>

        <div id='header-exploring-options'>
          <p>Explora el Suroeste antioqueño</p>
        </div>
        
        <div className={details ?  'carousel-container-hidden' : 'carousel-container'}>
          <figure id='rope-hanging1'>
            <img src={Rope} alt="rope" key={"rope"}></img>
          </figure>
          <div className='photo-container'>

              {Array.from({ length: 4 }).map((_, index) => (
                /* Aquí se puede renderizar cada foto con información de un JSON*/
                <Photo key={index} inview={inView ? 1 : 0} showDetails={showDetails}/>
              ))}
          </div>
        </div>

        <div className={details ? 'exploring-detail-c visible' : 'exploring-detail-c'}>
          <div className='square-info-c'>
            <div className='detail-img'>
              <img src={Test} alt='test-img'></img>
            </div>
            <div className='detail-info-c'>
              <div className='detail-title'> 
                <p>Cerro San Nicolás</p>
                <ClearIcon sx={{ fontSize: 30, strokeWidth: 3 }} className='exit-icon' onClick={() => showDetails(false)}/>
                {/*<button onClick={() => showDetails(false)}>Volver</button>*/}
              </div>
              <div className=''>Altura: 4080 MSNM</div>
              <div className=''>Dificultad: *****</div>
              <div className='detail-desc'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in semper felis. Sed gravida ullamcorper lectus ac venenatis. Praesent nulla ligula, condimentum sit amet dolor a, ullamcorper ornare libero. Nam pharetra sodales dui, non interdum lorem viverra a.</p></div>
              
            </div>
          </div>
        </div>

      </div>  
    </div>
  );
}

export default App;
