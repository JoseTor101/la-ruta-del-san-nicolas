import { useState } from 'react';
import { BUNDLES_DATA } from '../data/bundles';
import CloseIcon from '@mui/icons-material/Close';
import MapComponent from './MapComponent';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export default function Modal({visible, changeVisibility, childId}) {
    const [showMap, setShowMap] = useState(false);



    const closeModal = () => {
        if(showMap){
            setShowMap(false);
        }
        if(!showMap & visible){
            changeVisibility();
        }
    }

    const debug = ()   =>{
        
    }

    return(
        <div className={visible ? 'modal-c open' : 'modal-c'}>
            <div className="close-c">
                <CloseIcon sx={{ fontSize: 60, color: '#fff'}} className="close-modal" onClick={closeModal}/>
            </div>
            <div className="modal-content">
                <div className="modal-l">
                {/*<img src={BUNDLES_DATA[childId].img} alt={BUNDLES_DATA[childId].name} />*/}
                <div className="show-map" onClick={setShowMap}>
                    Ver mapa
                </div>

                </div>
                <div className="modal-r">
                <h1>{BUNDLES_DATA[childId].name}</h1>
                <p className="modal-perk-desc">{BUNDLES_DATA[childId].desc}</p>

                {visible 
                ? Object.entries(BUNDLES_DATA[childId].perks).map(([key, value]) => (
                        <div key={key} className="perk-c">
                            <h2>{key}</h2>
                            <p className="modal-perk-desc">{value}</p>
                        </div>
                    ))
                : null
                }

                </div>
            </div>
            <div className={showMap ? 'map-c open' : 'map-c'}>
                {   BUNDLES_DATA[childId].mapUrl
                    ?
                    <iframe src={BUNDLES_DATA[childId].mapUrl}
                    height="100%" 
                    width="100%"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map">
                    
                    </iframe>
                    : <div className='map-error'> 
                    <ErrorOutlineIcon sx={{ fontSize: 60, color: '#fff'}}/>
                    <h3>Mapa no disponible</h3>
                    
                    </div>

                }
                

                {/*<MapComponent/>*/}
            </div>
        </div>
    )

}