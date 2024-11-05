
export const Sidebar = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="inicio">
                    <img src={`assets/images/logo.svg`} alt={"logo"} />
                </a>
                <a className="sidebar-brand brand-logo-mini" href="inicio">
                    <img src="assets/images/logo-mini.png" alt="logo" />
                </a>
            </div>
            
            <ul className="nav">

                <li className="nav-item nav-category">
                    <span className="nav-link">TOOLS</span>
                </li>

                <li className="nav-item menu-items">
                    <a className="nav-link" href="inicio">
                        <span className="menu-icon">
                            <i className="mdi mdi-home-floor-a"></i>
                        </span>
                        <span className="menu-title">Inicio</span>
                    </a>
                </li>

                <li className="nav-item menu-items">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-icon">
                            <i className="mdi mdi-laptop"></i>
                        </span>
                        <span className="menu-title">Generadores</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="passwords">Contraseña / Uuid</a>
                                <a className="nav-link" href="lorem-ipsum">Texto lorem ipsum</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item menu-items">
                    <a className="nav-link" data-toggle="collapse" href="#sub-imagenes" aria-expanded="false" aria-controls="sub-imagenes">
                        <span className="menu-icon">
                            <i className="mdi mdi-image-multiple"></i>
                        </span>
                        <span className="menu-title">Imagenes</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="sub-imagenes">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="emojis">Emojis</a>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="gifs">Gifs</a>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li className="nav-item menu-items">
                    <a className="nav-link" data-toggle="collapse" href="#sub-misc" aria-expanded="false" aria-controls="sub-imagenes">
                        <span className="menu-icon">
                            <i className="mdi mdi-table-large"></i>
                        </span>
                        <span className="menu-title">Miscelanea</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="sub-misc">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="weather">Weather</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="paises">Paises</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="aeropuertos">Aeropuertos</a>
                            </li>
                        </ul>
                        {/* <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="traductor">Traductor</a>
                            </li>
                        </ul> */}
                    </div>
                </li>

                <li className="nav-item menu-items">
                    <a className="nav-link" data-toggle="collapse" href="#sub-web" aria-expanded="false" aria-controls="sub-web">
                        <span className="menu-icon">
                            <i className="mdi mdi-web"></i>
                        </span>
                        <span className="menu-title">Web</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="sub-web">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <a className="nav-link" href="url-vars">Url vars</a>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="ip-info">IP info</a>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="color-picker">Color Picker</a>
                            </li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </nav>
    )
}
