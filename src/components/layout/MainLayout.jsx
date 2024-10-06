import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"


export const MainLayout = ({ children }) => {
    return (
        <div className="container-scroller">

            <Sidebar />

            <div className="container-fluid page-body-wrapper">

                <Navbar />

                <div className="main-panel">
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>

            </div>

        </div>

    )
}
