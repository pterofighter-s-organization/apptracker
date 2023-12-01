import { Link } from "react-router-dom";

//helpers
import { handleAPIErrors } from "../../helpers/formHelpers";

//css
import "./ErrorDisplay.css"

export default function ErrorDisplay({ label, errors, isSection }) {

    return (
        <div className="error-display">
            <i className="error-display-icon bi bi-exclamation-square-fill"></i>
            <div className="error-display-header">
                <div className="error-display-label">
                    {label}:
                </div>
                <div className="error-display-errors">
                    {
                        handleAPIErrors({
                            errors: errors
                        })
                    }
                </div>
            </div>
            <button
                type="button"
                className="error-display-button error-display-reload-button"
                onClick={() => window.location.reload(true)}
            >
                <div className="error-display-reload-icon">
                    <i className="bi bi-arrow-counterclockwise" />
                </div> refresh this page!
            </button>
            {
                isSection ?
                    null
                    :
                    <Link
                        to="/"
                        className="error-display-home-link"
                    >
                        back to home
                    </Link>
            }
        </div>
    )
}