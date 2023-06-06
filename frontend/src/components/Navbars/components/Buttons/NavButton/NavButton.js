import { Link } from "react-router-dom"

//css
import "../NavButton.css"

export default function NavButton(props) {

    const {
        icon,
        label,
        tooltipText,
        route,
        showLabel,
        minimizeMenu,
    } = props

    return (
        <Link
            to={route}
            type="button"
            className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-3"
            style={{ border: "none" }}
            id="nav-tooltip"
            data-bs-toggle="tooltip" data-bs-placement="right" title={tooltipText}
            onClick={(e) => {
                //dont put preventdefault or else to={route} wont work
                // e.preventDefault()
                if(minimizeMenu){
                    minimizeMenu()
                }
            }}
        >
            {showLabel ?
                <>
                    <i
                        className={`bi bi-${icon}`}
                        style={{ fontSize: "1.5rem" }}
                    />
                    <div className={`lead`} style={{}}>
                        {label}
                    </div>
                </>
                :
                <i
                    className={`bi bi-${icon} mx-auto`}
                    style={{ fontSize: "1.5rem" }}
                />
            }
        </Link>
    )
}