import { Link } from "react-router-dom"

//css
import "./RedirectLink.css"

export default function RedirectLink({ link, label }) {

    return (
        <Link
            to={link}
            className="redirect-link"
        >
            {label}
        </Link>
    )
}