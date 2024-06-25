import React, { memo } from 'react';
import '../styles/About.css';
import Header from '../components/Header';

import Cerro from '../img/cerro_nicolas.jpg';


function About() {
    const visible = false;

    return (
        <div className='main-c'>
            <Header view={visible}/>
            <div className="landing-about">
                <div className='about-c'>
                    <div className='about-c-l'>
                        <p className='about-title'>La ruta del san Nicolás</p>
                        <p className="about-subt">
                            Donec placerat, est et gravida molestie, ex risus lacinia magna, ut lobortis risus ligula at felis. Curabitur
                            maximus velit augue, non porta eros suscipit eget. Sed nulla dolor, luctus eget rhoncus id, tempor vitae quam.
                            Vestibulum tristique tempor diam, sed commodo lacus tempor et. Nulla facilisi.
                        </p>
                    </div>
                    <div className="about-c-r">
                        <div className="img-c">
                            <img src={Cerro} alt='cerro-sn'></img>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mission-c">
                <div className="mission">
                    <p className='mission-t'>Mision</p>
                    <p className='mission-st'>Donec placerat, est et gravida molestie, ex risus lacinia magna, ut lobortis risus ligula at felis. Curabitur maximus velit augue, non porta eros suscipit eget.</p>
                </div>
                <div className="vision">
                    <p className='mission-t'>Visión</p>
                    <p className='mission-st'>Donec placerat, est et gravida molestie, ex risus lacinia magna, ut lobortis risus ligula at felis. Curabitur maximus velit augue, non porta eros suscipit eget.</p>
                </div>
                <div className="origin">
                    <p className='mission-t'>Origen</p>
                    <p className='mission-st'>Donec placerat, est et gravida molestie, ex risus lacinia magna, ut lobortis risus ligula at felis. Curabitur maximus velit augue, non porta eros suscipit eget. Sed nulla dolor, luctus eget rhoncus id, tempor vitae quam. Vestibulum tristique tempor diam, sed commodo lacus tempor et. Nulla facilisi. In nec urna in enim rhoncus pharetra. Pellentesque turpis nibh, tempus et scelerisque mollis, aliquam ut nibh. Etiam quis malesuada neque.</p>
                </div>
            </div>

            <div className="members-c">
                
            </div>
        </div>
    );
}

export default memo(About);
