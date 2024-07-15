import '../styles/App.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Logo from '../img/logo_.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header({ view }) {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    const navigateReset = () => {
        window.scrollTo(0, 0); // Hacer scroll hacia arriba al hacer clic
    };

    // Set transparency of the navbar
    let transparency = 'nav-watchtrough';

    if (view) {
        transparency = 'nav-color';
    }

    // Menu for smaller screens
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
                        <li className={(currentPath === '/hospedajes') ? "header-focus" : "header-not-focus"}
                            onClick={navigateReset}>
                            <Link to={`/hospedajes`}>Hospedajes</Link>
                        </li>
                        <li className={(currentPath === '/contacto') ? "header-focus" : "header-not-focus"}>
                            <Link to="/#contact-me">Contacto</Link>
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

export default React.memo(Header);
