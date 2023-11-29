
//components
import { RedirectButton } from "../../../Buttons/RedirectButton"

//css
import "./EmptyMessage.css"

export default function EmptyMessage({ type }) {

    return (
        <div className="empty-message">
            <div className="empty-message-header">
                <i className="bi bi-info-circle-fill"></i>
                <span className="empty-message-text">
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