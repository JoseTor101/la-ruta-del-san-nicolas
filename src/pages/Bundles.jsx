import '../styles/bundles.css';
import { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import Modal from '../components/Modal';
import Whatsapp from '../components/Whatsapp';


export default function Bundles() {
  const [modalView,  setModalView] = useState(false);
  const [childId, setChildId] = useState(0);
  const [msg, setMsg] = useState("Hola, quiero más información sobre los planes");
  const whatsappLinkRef = useRef(null);


  const changeVisibility = () => {   
    setModalView((prevModalView) => (!prevModalView));
  }

  const getChildId = (id) => {
    setChildId(prevChildId => id);
  }
  
  const triggerWhatsApp = (msg) => {
    setMsg(prevMsg => msg);
    
    setTimeout(() => {
      if (whatsappLinkRef.current) {
        whatsappLinkRef.current.click();
      }
    }, 0);

    setTimeout(() => {
      setMsg(prevMsg => "Hola, quiero más información sobre los planes");
    }, 0);

  };

  return (
    <div className='bundles-m-c'>
      <Header />

      <div className="bundles-l-section">
        <section>
            <ImageSlider 
            changeVisibility={changeVisibility}
            getChildId={getChildId}
            triggerWhatsApp={triggerWhatsApp} />
        </section>
      </div>

      {modalView ? 
      <Modal 
        visible={modalView} 
        changeVisibility={changeVisibility}
        childId={childId} 
        />: null}

      <Footer/>
      <Whatsapp message={msg} whatsappLinkRef={whatsappLinkRef}/>
    </div>
  );
}
