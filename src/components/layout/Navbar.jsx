
export const Navbar = () => {
    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                <a className="navbar-brand brand-logo-mini" href="inicio">
                    <img src="assets/images/logo-mini.png" alt="logo" />
                </a>
            </div>

            <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">

                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="mdi mdi-menu"></span>
                </button>

                <ul className="navbar-nav w-100">
                    <li className="nav-item w-100">
                        <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                            <input type="text" className="form-control" placeholder="Search products" />
                        </form>
                    </li>
                </ul>

                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown d-none d-lg-block">

                        <a className="nav-link btn btn-primary create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" href="#">
                            + New Project
                        </a>

                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                            <h6 className="p-3 mb-0">Projects</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-file-outline text-primary"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Software Development</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-web text-info"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">UI Development</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-layers text-danger"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Software Testing</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <p className="p-3 mb-0 text-center">See all projects</p>
                        </div>
                    </li>

                    <li className="nav-item dropdown border-left">
                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-email"></i>
                        </a>
                        
                    </li>

                    <li className="nav-item dropdown border-left">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                            <i className="mdi mdi-bell"></i>
                        </a>
                    </li>

                </ul>
                
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-format-line-spacing"></span>
                </button>

            </div>
            
        </nav>
    )
}
