import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import '../styles/bundles.css';

import CheckIcon from '@mui/icons-material/Check';

import {BUNDLES_DATA} from '../data/bundles';

function ImageSlider({ changeVisibility, getChildId, triggerWhatsApp }) {

  const showModal = (id) => {
    changeVisibility();
    getChildId(id);
  }

  const sendMsg = (msg) => {
    triggerWhatsApp(`Hola, quisiera más información del paquete: *${msg}*`);
  }

  return (
    <div className='slide-c'>
      <div className='slide-box'>
          <Swiper
            style={{
              "--swiper-navigation-size": "50px",
            }}
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            effect={'coverflow'}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              850: {
                slidesPerView: 2,
              },
            }}
            pagination={true}
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >

          {
            BUNDLES_DATA.map((bundle, index) => (
              <SwiperSlide key={bundle.id}> 
                <div className="bundle-c">
                  <p className="bundle-header">{bundle.name}</p>
                  <div className="bundle-img">
                    <img src={bundle.img} alt="Placeholder"/>
                  </div>
                  <div className="bundle-perks">
                        <ul className='bundle-perks-i'>
                          
                          {/*   MAX PERK ITEMS: 8*/}

                            {Object.entries(bundle.perks).map(([perk, value]) => (
                              <li key={perk}><CheckIcon sx={{ color: 'var(--dark-green)', strokeWidth: 3 }}/>{perk}</li>
                            ))}

                            
                       </ul>
                  </div>  
                  <div className="bundle-detail" onClick={() => showModal(bundle.id)}>Más información</div>
                  <div className="bundle-button" onClick={() => sendMsg(bundle.name)}>ME INTERESA</div>
                </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
    </div>
    </div>
  );
}

export default ImageSlider;
