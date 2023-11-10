import { Link } from "react-router-dom"


export default function RedirectButton({ link }) {

    return (
        <Link
            to={link}
            className="redirect-button"
        >
            click to see all
        </Link>
    )
}