import { Link } from "react-router-dom"

//routes
import { newApplicationRoute, featureRoutes, loginRoute } from "../routes/routes"

//css
import "./SideNav.css"

export default function SideNav() {

    // const [isMinimized, setIsMinimized] = useState(true) //minimized nav is preset in nav

    const handleMinimize = () => {
        const sideNavbarElement = document.getElementById("sidenav")
        const ifMinimized = sideNavbarElement.classList.contains("minimized-sidenav")
        if (ifMinimized) {
            sideNavbarElement.classList.replace("minimized-sidenav", "expanded-sidenav")
        } else {
            sideNavbarElement.classList.replace("expanded-sidenav", "minimized-sidenav")
        }
    }

    return (
        <nav className="sidenav minimized-sidenav" id="sidenav">
            <Link
                to="/"
                className="sidenav-logo"
                style={{ textDecoration: "none", marginBottom: "1rem" }}
            >
                <img
                    className="sidenav-logo-img"
                    src={process.env.PUBLIC_URL + '/logo/css_icon_by_freepik.png'}
                    alt="Logo"
                />
                <div
                    className="sidenav-button-text"
                    style={{ fontSize: "1.25em" }}
                >
                    job tracker
                </div>
            </Link>
            <button
                className="sidenav-button"
                style={{ borderStyle: "none" }}
                onClick={() => handleMinimize()}
            >
                <i className="sidenav-button-icon sidenav-expand-icon bi bi-list-ul"></i>
                <i className="sidenav-button-icon sidenav-minimize-icon bi bi-x-circle-fill" />
                <div className="sidenav-button-text">
                    close menu
                </div>
            </button>
            <Link
                to={newApplicationRoute.route}
                className="sidenav-button"
            >
                <i className={`sidenav-button-icon ${newApplicationRoute.icon}`}></i>
                <div className="sidenav-button-text">
                    {newApplicationRoute.text}
                </div>
            </Link>
            <div style={{ margin: "0.5rem" }} />
            {
                featureRoutes.map((route) => (
                    <Link
                        to={route.route}
                        className="sidenav-button"
                        key={route.text}
                    >
                        <i className={`sidenav-button-icon ${route.icon}`} />
                        <div className="sidenav-button-text">
                            {route.text}
                        </div>
                    </Link>
                ))
            }
            <div style={{margin: "0.5rem"}}/>
            <Link
                to={loginRoute.route}
                className="sidenav-button"
            >
                <i className={`sidenav-button-icon ${loginRoute.icon}`}/>
                <div className="sidenav-button-text">
                    {loginRoute.text}
                </div>
            </Link>
        </nav>
    )
}