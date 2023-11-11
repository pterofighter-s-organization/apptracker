import { Link } from "react-router-dom"

//css
import "./RedirectButton.css"

export default function RedirectButton({ link, children }) {

    return (
        <Link
            to={link}
            className="redirect-button"
        >
            {children}
        </Link>
    )
}