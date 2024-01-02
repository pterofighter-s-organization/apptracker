import { Link } from "react-router-dom"

//hocs
import { withExpandControl } from "../../../hocs/withExpandControl"

//routes
import { NEW_APP_ROUTE, FEATURES_ROUTES, LOGOUT_ROUTE, HOME_ROUTE } from "../constants"

//css
import "./DropdownNav.css"

function DropdownNav({ id, handleLogout, isExpand, handleMinimize, handleExpand }) {

    return (
        <nav
            className={`dropdownnav ${isExpand ? "expanded-dropdownnav" : "minimized-dropdownnav"}`}
            id={id}
        >
            <div className="dropdownnav-bar">
                <Link
                    to={HOME_ROUTE.route}
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
                        className="button dropdownnav-bar-button"
                    >
                        <i className={`${NEW_APP_ROUTE.icon}`} />
                    </Link>
                    <button
                        type="button"
                        className="button dropdownnav-bar-button"
                        // style={{ borderStyle: "none" }} already declared in app.css
                        onClick={isExpand ? handleMinimize : handleExpand}
                    >
                        {
                            isExpand ?
                                <i className="bi bi-x-circle-fill" />
                                :
                                <i className="bi bi-list"></i>
                        }
                    </button>
                </div>
            </div>
            <div className="dropdownnav-content">
                <div className="dropdownnav-content-features">
                    {
                        FEATURES_ROUTES.map((route) => (
                            <Link
                                to={route.route}
                                className="button dropdownnav-content-button"
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
                <button
                    onClick={handleLogout}
                    className="button dropdownnav-content-button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Sign out`}
                >
                    <i className={`dropdownnav-content-button-icon ${LOGOUT_ROUTE.icon}`} />
                    <div className="dropdownnav-content-button-text">
                        {LOGOUT_ROUTE.text}
                    </div>
                </button>
                {/* <Link
                    to={LOGIN_ROUTE.route}
                    className="button dropdownnav-content-button"
                >
                    <i className={`dropdownnav-content-button-icon ${LOGIN_ROUTE.icon}`} />
                    <div className="dropdownnav-content-button-text">
                        {LOGIN_ROUTE.text}
                    </div>
                </Link> */}
            </div>
        </nav>
    )
}

export default withExpandControl(DropdownNav)