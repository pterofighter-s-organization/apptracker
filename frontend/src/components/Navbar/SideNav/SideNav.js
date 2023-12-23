import { Link } from "react-router-dom"

//hocs
import { withExpandControl } from "../../../hocs/withExpandControl"

//constants
import { NEW_APP_ROUTE, FEATURES_ROUTES, LOGOUT_ROUTE, HOME_ROUTE } from "../constants"

//css
import "./SideNav.css"
import { TooltipText } from "../../TooltipText"

function SideNav({ id, handleLogout, isExpand, handleMinimize, handleExpand }) {

    return (
        <nav
            className={`sidenav ${isExpand ? "expanded-sidenav" : "minimized-sidenav"}`}
            id={id}
        >
            <Link
                to={HOME_ROUTE.route}
                className="sidenav-logo"
                data-bs-isExpand="tooltip"
                data-bs-placement="top"
                title={`Back to home`}
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
            <hr className="sidenav-divider" />
            <button
                type="button"
                className="button sidenav-button"
                onClick={isExpand ? handleMinimize : handleExpand}
            >
                {
                    isExpand ?
                        <>
                            <i className="sidenav-button-icon sidenav-minimize-icon bi bi-x-circle-fill" />
                            <div className="sidenav-button-text">
                                close menu
                            </div>
                        </>
                        :
                        <>
                            {/* make sure icon is on top of tooltip so it doesnt overtake the order */}
                            <i className="sidenav-button-icon sidenav-expand-icon bi bi-list"></i>
                            <TooltipText
                                text={"Expand sidebar"}
                            />
                        </>
                }
            </button>
            <Link
                to={NEW_APP_ROUTE.route}
                className="button sidenav-button"
            >
                <i className={`sidenav-button-icon ${NEW_APP_ROUTE.icon}`}></i>
                {
                    isExpand ?
                        <div className="sidenav-button-text">
                            {NEW_APP_ROUTE.text}
                        </div>
                        :
                        <TooltipText
                            text={"New trackings"}
                        />
                }
            </Link>
            <hr className="sidenav-divider" />
            {
                FEATURES_ROUTES.map((route) => (
                    <Link
                        to={route.route}
                        className="button sidenav-button"
                        key={route.text}
                    >
                        <i className={`sidenav-button-icon ${route.icon}`} />
                        {
                            isExpand ?
                                <div className="sidenav-button-text">
                                    {route.text}
                                </div>
                                :
                                <TooltipText
                                    text={route.text}
                                />
                        }
                    </Link>
                ))
            }
            <hr className="sidenav-divider" />
            <button
                onClick={handleLogout}
                className="button sidenav-button"
            >
                <i className={`sidenav-button-icon ${LOGOUT_ROUTE.icon}`} />
                {
                    isExpand ?
                        <div className="sidenav-button-text">
                            {LOGOUT_ROUTE.text}
                        </div>
                        :
                        <TooltipText
                            text={"Logout"}
                        />
                }
            </button>
            {/* <Link
                to={LOGIN_ROUTE.route}
                className="button sidenav-button"
                data-bs-isExpand="tooltip"
                data-bs-placement="top"
                title={`Signing in`}
            >
                <i className={`sidenav-button-icon ${LOGIN_ROUTE.icon}`} />
                <div className="sidenav-button-text">
                    {LOGIN_ROUTE.text}
                </div>
            </Link> */}
        </nav>
    )
}

export default withExpandControl(SideNav)