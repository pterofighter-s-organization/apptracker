import { Link } from "react-router-dom"

//css
import "./RedirectButton.css"

export default function RedirectButton({ link, label }) {

    return (
        <Link
            to={link}
            className="redirect-button"
        >
            {label}
            <i className="bi bi-box-arrow-up-right"></i>
        </Link>
    )
}