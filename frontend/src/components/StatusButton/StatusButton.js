//components
import StatusListButton from "./StatusListButton.js";

//utils
import { textFormat } from "../../utils/text.js";

export default function StatusButton({ appStatus, newStatus, textClass }) {

    //defines the structure of a status button dropdown

    //define which color correspond with what status
    //later move this to constant file
    const statusMapColor = {
        "applied": "warning",
        "rejected": "danger",
        "interviewing": "primary",
        "interested": "secondary",
        "accepted": "success",
        "ghosted": "dark",
    }

    return (
        <div className="btn-group">
            <button
                type="button"
                className={`btn btn-${statusMapColor[appStatus]} pe-none`}
            >
                <div className={textClass}>
                    {textFormat(appStatus)}
                </div>
            </button>
            <button
                type="button"
                className={`btn btn-${statusMapColor[appStatus]} dropdown-toggle dropdown-toggle-split`}
                data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-auto-close="true"
            >
                {/* not show on the page, but for reference */}
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className={`dropdown-menu`}>
                {Object.entries(statusMapColor).map(([status, color]) => {
                    if (status !== appStatus) {
                        return (
                            <StatusListButton
                                status={status}
                                newStatus={newStatus}
                                color={color}
                                textClass={textClass}
                            />
                        )
                    }
                    return <></>
                })}
            </ul>
        </div>
    )
}