import { Link } from "react-router-dom";

//helpers
import { handleAPIErrors } from "../../../helpers/form";

//css
import "./ErrorDisplay.css"

export default function ErrorDisplay({ label, errors, message, isSection }) {

    return (
        <div className="error-display-layout">
            <i className="error-display-icon bi bi-exclamation-square-fill"></i>
            <div className="error-display-header">
                <h4 className="error-display-label">
                    {label ? label : "Application Status"}:
                </h4>
                <h4 className="error-display-errors">
                    {
                        errors ?
                            handleAPIErrors({
                                errors: errors
                            })
                            :
                            message
                    }
                </h4>
            </div>
            <button
                type="button"
                className="error-display-button error-display-reload-button"
                onClick={() => window.location.reload(true)}
            >
                <div className="error-display-reload-icon">
                    <i className="bi bi-arrow-counterclockwise" />
                </div>
                refresh page
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