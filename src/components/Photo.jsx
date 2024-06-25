import React, { useEffect, useState } from "react";
import ClothingPin from '../img/clothin_pin.svg';
import Test1 from '../img/test1.jpg';

function Photo ({ inview, showDetails }) {
    const [clicked, setClicked] = useState(false);
    const visibilityClass = inview === 1 ? 'bounce-in' : 'hidden';
    
    const handleClick = () => {
        setClicked(true);
    }

    useEffect(() => {
        if (clicked) {
            showDetails(true);
            setClicked(false);
        }
    }, [clicked, showDetails]);

    return (
        <div className={`photo-holder ${visibilityClass}`} onClick={handleClick}>
            <img src={ClothingPin} className='clothin-pin' alt="clothin-pin" />
            <div className='square'>
                <div className='square-photo'>
                    <img src={Test1} alt='test-img' />
                </div>
            </div>
        </div>
    )
}

export default Photo;
