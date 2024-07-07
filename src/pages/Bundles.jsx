import '../styles/bundles.css';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import Modal from '../components/Modal';



export default function Bundles() {
  const [modalView,  setModalView] = useState(false);
  const [childId, setChildId] = useState(0);

  const changeVisibility = () => {   
    setModalView((prevModalView) => (!prevModalView));
  }

  const getChildId = (id) => {
    setChildId(prevChildId => id);
  }

  return (
    <div className='bundles-m-c'>
      <Header />

      <div className="bundles-l-section">
        <section>
            <ImageSlider changeVisibility={changeVisibility} getChildId={getChildId}/>
        </section>
      </div>

      {modalView ? 
      <Modal 
        visible={modalView} 
        changeVisibility={changeVisibility}
        childId={childId} 
        />: null}

      <Footer/>
    </div>
  );
}
