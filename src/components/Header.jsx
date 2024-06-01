import '../App.css';
import logo from '../img/logo_.png';

function Header({view}){
    
    let transparency = 'nav-watchtrough';

    if(view){
        transparency = 'nav-color';
    }


    return(
        <nav className={transparency}>
            <div className="left-header">
                <img src={logo} id="logo" alt="logo_lrdsn"/>
            </div>
            <div className="right-header">
                <ul className='right-header'>
                    <li>Paquetes</li>
                    <li>Hospedajes</li>
                    <li>Rutas</li>
                    <li>Sobre nosotros</li>
                </ul>
            </div>
            
        </nav>
    );

}

export default Header;