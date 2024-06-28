import '../styles/bundles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageSlider } from '../components/ImageSlider';
import { IMAGES } from '../data/demo';

export default function Bundles() {
  

  return (
    <div className='bundles-m-c'>
      <Header />
      <div className="bundles-l-section">
        <section>
            <ImageSlider images={IMAGES}/>
        </section>
      </div>
      <Footer />
    </div>
  );
}
