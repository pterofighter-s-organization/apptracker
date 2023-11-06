import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//helpers
import { ifCloseMenu } from "../../../helpers/componentHelpers"

//routes
import { NEW_APP_ROUTE, FEATURES_ROUTES, LOGIN_ROUTE } from "../../../constants/routes"

//css
import "./DropdownNav.css"

export default function DropdownNav() {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        //can close menu outside of the menu (closing when clicked on any other part of the window)
        const handleClick = (event) => {
            if (ifCloseMenu(event, "dropdownnav")) {
                setShowMenu(false)
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <nav
            className={`dropdownnav ${showMenu ? "expanded-dropdownnav" : "minimized-dropdownnav"}`}
            id="dropdownnav"
        >
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
                        to={NEW_APP_ROUTE.route}
                        className="dropdownnav-bar-button"
                    >
                        <i className={`${NEW_APP_ROUTE.icon}`} />
                    </Link>
                    <button
                        type="button"
                        className="dropdownnav-bar-button"
                        // style={{ borderStyle: "none" }} already declared in app.css
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <i className="dropdownnav-button-expand-icon bi bi-list"></i>
                        <i className="dropdownnav-button-minimize-icon bi bi-x-circle-fill" />
                    </button>
                </div>
            </div>
            <div className="dropdownnav-content">
                <div className="dropdownnav-content-features">
                    {
                        FEATURES_ROUTES.map((route) => (
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
                    to={LOGIN_ROUTE.route}
                    className="dropdownnav-content-button"
                >
                    <i className={`dropdownnav-content-button-icon ${LOGIN_ROUTE.icon}`} />
                    <div className="dropdownnav-content-button-text">
                        {LOGIN_ROUTE.text}
                    </div>
                </Link>
            </div>
        </nav>
    )
}