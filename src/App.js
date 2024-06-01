import { useState, useRef } from 'react';
import './App.css';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Rope from './img/rope.svg';
import ClothingPin from './img/clothin_pin.svg';
import Header from './components/Header';

import { useInView } from "react-intersection-observer";

function App() {
  const[seeHeader, setSeeHeader] = useState(false);

  //const exploringOptionsRef = useRef(null);

  const handleIntersection = (inView) => {
    setSeeHeader(inView);
  };

  const {ref, inView} = useInView({
    threshold: 0.7,
    onChange: handleIntersection,
  });

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
        
        <div className='carousel-container'>
          <figure id='rope-hanging1'>
            <img src={Rope} alt="rope"></img>
          </figure>
          <div className='photo-holder'>

            <div className="pin-container">
                <img src={ClothingPin} className='clothin-pin' alt="clothin-pin"></img>
            </div>

            <div className='photo-container'>
                <div className='square'>
            </div>

            </div>
          </div>
        </div>


      </div>  
    </div>
  );
}

export default App;
