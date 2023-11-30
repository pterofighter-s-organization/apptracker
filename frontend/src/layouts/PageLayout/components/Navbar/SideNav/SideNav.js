import { Link } from "react-router-dom"

//hocs
import { withToggleControl } from "../../../../../hocs/withToggleControl"

//constants
import { NEW_APP_ROUTE, FEATURES_ROUTES, LOGIN_ROUTE, HOME_ROUTE } from "../routes"

//css
import "./SideNav.css"

function SideNav({ id, toggle, handleUntoggle, handleToggle }) {

    return (
        <nav
            className={`sidenav ${toggle ? "expanded-sidenav" : "minimized-sidenav"}`}
            id={id}
        >
            <Link
                to={HOME_ROUTE.route}
                className="sidenav-logo"
            >
                <img
                    className="sidenav-logo-img"
                    src={process.env.PUBLIC_URL + '/logo/css_icon_by_freepik.png'}
                    alt="Logo"
                />
                <div className="sidenav-button-text sidenav-logo-text">
                    job tracker
                </div>
            </Link>
            <hr className="sidenav-divider"/>
            {/* <div className="sidenav-margin"/> */}
            <button
                type="button"
                className="sidenav-button"
                // style={{ borderStyle: "none" }} declared in app.css
                onClick={toggle ? handleUntoggle : handleToggle}
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
            <hr className="sidenav-divider"/>
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
            <hr className="sidenav-divider"/>
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

export default withToggleControl(SideNav)