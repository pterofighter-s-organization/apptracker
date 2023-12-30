
//components
import { RedirectButton } from "../../Buttons/RedirectButton"
import { InfoReminder } from "../../InfoReminder"

//css
import "./EmptyMessage.css"

export default function EmptyMessage({ type }) {

    return (
        <div className="empty-message-layout">
            <InfoReminder
                text={`no related ${type} at the moment!`}
            />
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