import { Link } from "react-router-dom"

export default function NavButton(props) {

    const {
        icon,
        label,
        tooltipText,
        route,
        showLabel
    } = props

    return (
        <Link
            to={route}
            type="button"
            className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-3"
            style={{ border: "none" }}
            data-toggle="tooltip" data-bs-placement="right" title={tooltipText}
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