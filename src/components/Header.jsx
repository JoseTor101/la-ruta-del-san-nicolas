import '../styles/App.css';
import logo from '../img/logo_.png';
import { Link } from 'react-router-dom';

function Header({view}){
    
    let transparency = 'nav-watchtrough';

    if(view){
        transparency = 'nav-color';
    }


    return(
        <header className="fixed-header">
            <nav className={transparency}>
                <div className="left-header">
                    <Link to={`/`}><img src={logo} id="logo" alt="logo_lrdsn"/></Link>
                </div>
                <div className="right-header">
                    <ul className='right-header'>
                        <li><Link to={`/paquetes`}>Paquetes</Link></li>
                        <li><Link to={`/hospedajes`}>Hospedajes</Link></li>
                        <li><Link to={`/contacto`}>Contacto</Link></li>
                        
                        <li><Link to={`/about`}>Sobre nosotros</Link></li>
                    </ul>
                </div>
                
            </nav>
        </header>
    );

}

export default Header;