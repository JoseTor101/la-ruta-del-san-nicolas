import '../styles/App.css';
import Logo from '../img/logo_.png';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ view }) {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    let transparency = 'nav-watchtrough';

    if (view) {
        transparency = 'nav-color';
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed-header">
            <nav className={transparency}>
                <div className="left-header">
                    <Link to={`/`}><img src={Logo} id="logo" alt="logo_lrdsn" /></Link>
                </div>
                <div className="right-header">

                { isMenuOpen ?
                <CloseIcon sx={{ fontSize: 40}} className={`menu-toggle rotate`} onClick={toggleMenu} /> 
                : 
                <MenuIcon sx={{ fontSize: 40}} className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />
                }

                    <ul className={`right-header ${isMenuOpen ? 'open' : ''}`}>
                        <li className={(currentPath === '/paquetes') ? "header-focus" : "header-not-focus"}>
                            <Link to={`/paquetes`}>Paquetes</Link>
                        </li>
                        <li className={(currentPath === '/hospedajes') ? "header-focus" : "header-not-focus"}>
                            <Link to={`/hospedajes`}>Hospedajes</Link>
                        </li>
                        <li className={(currentPath === '/contacto') ? "header-focus" : "header-not-focus"}>
                            <Link to={`/contacto`}>Contacto</Link>
                        </li>
                        <li className={(currentPath === '/about') ? "header-focus" : "header-not-focus"}>
                            <Link to={`/about`}>Sobre nosotros</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
