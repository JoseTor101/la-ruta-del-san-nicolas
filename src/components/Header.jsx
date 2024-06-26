import '../styles/App.css';
import logo from '../img/logo_.png';

import {
    Link,
    useLocation
}
    from 'react-router-dom';

import { useEffect, useState } from 'react';


function Header({ view }) {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);


    let transparency = 'nav-watchtrough';

    if (view) {
        transparency = 'nav-color';
    }


    return (
        <header className="fixed-header">
            <nav className={transparency}>
                <div className="left-header">
                    <Link to={`/`}><img src={logo} id="logo" alt="logo_lrdsn" /></Link>
                </div>
                <div className="right-header">
                    <ul className='right-header'>
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