
export const Sidebar = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="index.html">
                    <img src={`assets/images/logo.svg`} alt={"logo"} />
                </a>
                <a className="sidebar-brand brand-logo-mini" href="index.html">
                    <img src="assets/images/logo-mini.png" alt="logo" />
                </a>
            </div>
            <ul className="nav">

                <li className="nav-item nav-category">
                    <span className="nav-link">TOOLS</span>
                </li>

                <li className="nav-item menu-items active">
                    <a className="nav-link" href="/">
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
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
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
                    <a className="nav-link" href="pages/tables/basic-table.html">
                        <span className="menu-icon">
                            <i className="mdi mdi-table-large"></i>
                        </span>
                        <span className="menu-title">Tables</span>
                    </a>
                </li>

                <li className="nav-item menu-items">
                    <a className="nav-link" href="pages/charts/chartjs.html">
                        <span className="menu-icon">
                            <i className="mdi mdi-chart-bar"></i>
                        </span>
                        <span className="menu-title">Charts</span>
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}
