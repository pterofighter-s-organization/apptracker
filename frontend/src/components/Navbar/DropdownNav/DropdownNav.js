import { Link } from "react-router-dom"

//routes
import { newApplicationRoute, featureRoutes, loginRoute } from "../routes/routes"

//css
import "./DropdownNav.css"

export default function DropdownNav() {


    const handleResize = () => {

        const dropdownNavbarElement = document.getElementById("dropdownnav")
        const isMinimized = dropdownNavbarElement.classList.contains("minimized-dropdownnav")

        if (isMinimized) {
            dropdownNavbarElement.classList.replace("minimized-dropdownnav", "expanded-dropdownnav")
        } else {
            dropdownNavbarElement.classList.replace("expanded-dropdownnav", "minimized-dropdownnav")
        }
    }

    return (
        <nav className="dropdownnav minimized-dropdownnav" id="dropdownnav">
            <div className="dropdownnav-bar">
                <Link
                    to={"/"}
                    className="dropdownnav-logo"
                >
                    <img
                        className="dropdownnav-logo-img"
                        src={process.env.PUBLIC_URL + '/logo/css_icon_by_freepik.png'}
                        alt="Logo"
                    />
                </Link>
                <div className="dropdownnav-bar-end">
                    <Link
                        to={newApplicationRoute.route}
                        className="dropdownnav-bar-button"
                    >
                        <i className={`${newApplicationRoute.icon}`} />
                    </Link>
                    <button
                        type="button"
                        className="dropdownnav-bar-button"
                        style={{ borderStyle: "none" }}
                        onClick={() => handleResize()}
                    >
                        <i className="dropdownnav-button-expand-icon bi bi-list"></i>
                        <i className="dropdownnav-button-minimize-icon bi bi-x-circle-fill" />
                    </button>
                </div>
            </div>
            <div className="dropdownnav-content">
                <div className="dropdownnav-content-features">
                    {
                        featureRoutes.map((route) => (
                            <Link
                                to={route.route}
                                className="dropdownnav-content-button"
                                key={route.route}
                            >
                                <i className={`dropdownnav-content-button-icon ${route.icon}`} />
                                <div className="dropdownnav-content-button-text">
                                    {route.text}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <hr style={{ margin: "0.25rem" }} />
                <Link
                    to={loginRoute.route}
                    className="dropdownnav-content-button"
                >
                    <i className={`dropdownnav-content-button-icon ${loginRoute.icon}`} />
                    <div className="dropdownnav-content-button-text">
                        {loginRoute.text}
                    </div>
                </Link>
            </div>
        </nav>
    )
}