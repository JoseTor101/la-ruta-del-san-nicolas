import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const styles = {
    whatsapp: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
    },
    w_c: {
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s',  
    },
    w_c_hover: {
        transform: 'scale(1.3)',
    },
};

export default function Whatsapp({ message = "Hola, quiero más información sobre los planes" ,  whatsappLinkRef}) {
    const [isHovered, setIsHovered] = useState(false);
    const msg = message.split(' ').join('%20');

    return (
        <div className="whatsapp" style={styles.whatsapp}>
            <a  
                ref={whatsappLinkRef}
                href={`https://wa.me/573204153615?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.w_c, ...(isHovered ? styles.w_c_hover : {}) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <WhatsAppIcon sx={{ fontSize: 70, strokeWidth: 3, color: '#FFFFFF' }} />
            </a>
        </div>
    );
}
