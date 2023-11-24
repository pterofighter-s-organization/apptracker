
//components
import { RedirectButton } from "../../../Buttons/RedirectButton"

//css
import "./ErrorDisplay.css"

export default function ErrorDisplay({ type }) {

    return (
        <div className="error-display">
            <div className="error-display-header">
                <i className="bi bi-info-circle-fill"></i>
                <span className="error-display-text">
                    {`no related ${type} at the moment!`}
                </span>
            </div>
            {type === "jobs" ?
                <RedirectButton
                    link={"/new-job"}
                    label={`track new ${type}`}
                />
                :
                null
            }
        </div>
    )
}