import '../styles/Hosting.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Whatsapp from '../components/Whatsapp';

import { ScrollRestoration } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

import House from '../img/house.jpg';
import { AccessAlarm, Groups } from '@mui/icons-material';

import { IMAGES, EXPLORING, HOSTING_DATA } from '../data/demo';
export default function Hosting() {
    return (
        <>
            <div className='hosting-m-c'>
                <Header />
                <div className='hosting-items-c'>
                    <section className="hosting-slider-c">
                        <Swiper
                            slidesPerView={3}
                            grid={{
                                rows: 2,
                            }}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                                850: {
                                    slidesPerView: 2,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                                1200: {
                                    slidesPerView: 2,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper swiper-h"
                        >
                            {Object.entries(HOSTING_DATA).map(([key, value]) => (
                                    <SwiperSlide key={key} className='swiper-slide-h'>
                                        <div className="house-img-c">
                                            <img src={House} alt="hourse-img"></img>
                                        </div>
                                        <div className="house-c-r">
                                            <h3 className='house-t'>Casa {parseInt(key)+1}</h3>
                                            <div className="house-time">
                                                <AccessAlarm sx={{ fontSize: 25}}/>
                                                <p>{value.schedule}</p>  
                                            </div>
                                            <div className="house-capacity">
                                                <Groups sx={{ fontSize: 25}}/>
                                                <p>{value.max_c} personas máx.</p>
                                            </div>
                                            <i>Desde ${value.night_p} por noche</i>
                                            <i id="disclaimer">*** Sujeto a disponibilidad</i>
                                        </div>
                                    
                                    </SwiperSlide>
                            
                                )) 
                            }
                        </Swiper>
                    </section>
                </div>
                <Footer />
                <Whatsapp />
            </div>
        </>
    );
}
