import { AutocompleteInput } from "../ui/Autocomplete"
import { mapaweb } from "../../data/mapawebSeeder";


export const Navbar = () => {


    const handleSelect = async (mapaweb) => {
        window.location.href = `${mapaweb.enlace}`;
    };

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

                <ul className="navbar-nav w-100 mt-1">
                    <li className="nav-item" style={{ maxWidth: "125px" }}>
                        <AutocompleteInput
                            placeholder="Buscar Tools"
                            data={mapaweb}
                            onSelect={handleSelect}
                            displayKey="enlace"
                            valueKey="enlace"
                            filterFunction={(mapaweb, value) =>
                                mapaweb.tags.toLowerCase().includes(value.toLowerCase())
                            }
                        />
                    </li>
                </ul>

                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown d-lg-block">

                        <a className="nav-link btn btn-primary create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" href="#">
                            <i className="mdi mdi-account"></i> <span className="d-none d-md-inline"> Contacto</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">

                            <a className="dropdown-item preview-item" href="https://antoniolf.es/contacto" target="_blank">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <img src="assets/images/social-icons/email.svg" alt="Email" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Email</p>
                                </div>
                            </a>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="https://twitter.com/brolin79" target="_blank">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <img src="assets/images/social-icons/twitterx.svg" alt="Twitter-X" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Twitter-X</p>
                                </div>
                            </a>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="http://es.linkedin.com/pub/antonio-lopez-fernandez/49/956/39a" target="_blank">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <img src="assets/images/social-icons/linkedin.svg" alt="Linkedin" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Linkedin</p>
                                </div>
                            </a>

                            <a className="dropdown-item preview-item" href="https://github.com/brolin79" target="_blank">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <img src="assets/images/social-icons/github.svg" alt="Github" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1">Github</p>
                                </div>
                            </a>

                        </div>
                    </li>

                </ul>

                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-format-line-spacing"></span>
                </button>

            </div>

        </nav>
    )
}
