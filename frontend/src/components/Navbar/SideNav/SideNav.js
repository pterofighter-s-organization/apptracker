import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//helpers
import { ifCloseMenu } from "../../../helpers/componentHelpers"

//constants
import { NEW_APP_ROUTE, FEATURES_ROUTES, LOGIN_ROUTE } from "../../../constants/routes"

//css
import "./SideNav.css"

export default function SideNav() {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleClick = (event) => {
            if (ifCloseMenu(event, "sidenav")) {
                setShowMenu(false)
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <nav
            className={`sidenav ${showMenu ? "expanded-sidenav" : "minimized-sidenav"}`}
            id="sidenav"
        >
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
                type="button"
                className="sidenav-button"
                // style={{ borderStyle: "none" }} declared in app.css
                onClick={() => setShowMenu(!showMenu)}
            >
                <i className="sidenav-button-icon sidenav-expand-icon bi bi-list-ul"></i>
                <i className="sidenav-button-icon sidenav-minimize-icon bi bi-x-circle-fill" />
                <div className="sidenav-button-text">
                    close menu
                </div>
            </button>
            <Link
                to={NEW_APP_ROUTE.route}
                className="sidenav-button"
            >
                <i className={`sidenav-button-icon ${NEW_APP_ROUTE.icon}`}></i>
                <div className="sidenav-button-text">
                    {NEW_APP_ROUTE.text}
                </div>
            </Link>
            <div style={{ margin: "0.5rem" }} />
            {
                FEATURES_ROUTES.map((route) => (
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
            <div style={{ margin: "0.5rem" }} />
            <Link
                to={LOGIN_ROUTE.route}
                className="sidenav-button"
            >
                <i className={`sidenav-button-icon ${LOGIN_ROUTE.icon}`} />
                <div className="sidenav-button-text">
                    {LOGIN_ROUTE.text}
                </div>
            </Link>
        </nav>
    )
}