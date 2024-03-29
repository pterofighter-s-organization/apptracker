import { Link } from "react-router-dom";

//css
import "./RedirectButton.css"
import "../styles/Buttons.css"

export default function RedirectButton({ link, label }) {

    return (
        <Link
            to={link}
            className="button redirect-button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Redirects you to ${link}`}
        >
            <div className="redirect-button-label">
                {label} <i className="bi bi-box-arrow-up-right"></i>
            </div>
        </Link>
    )
}