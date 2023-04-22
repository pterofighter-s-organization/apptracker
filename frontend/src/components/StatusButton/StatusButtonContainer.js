import StatusButtonPresentation from "./StatusButtonPresentation"

export default function StatusButtonContainer({ appStatus, newStatus}) {

    //define which color correspond with what status
    const statusMapColor = {
        "applied" : "info",
        "rejected" : "danger",
        "interviewing": "primary",
        "interested": "secondary",
        "accepted": "success",
        "ghosted": "tertiary",
    }

    return (
        <div className="btn-group">
            <button 
                type="button" 
                className={`btn btn-${statusMapColor[appStatus]} pe-none`}
            >
                {appStatus}
            </button>
            <button 
                type="button" 
                className={`btn btn-${statusMapColor[appStatus]} dropdown-toggle dropdown-toggle-split`} 
                data-bs-toggle="dropdown" aria-expanded="false"
            >
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                {Object.entries(statusMapColor).map((statusObj) => {
                    const status = statusObj[0]
                    const color = statusObj[1]
                    if (status != appStatus) {
                        return (
                                <StatusButtonPresentation 
                                    key={status}
                                    status={status} 
                                    newStatus={newStatus} 
                                    color={color}
                                />
                                )
                    }
                })}
            </ul>
        </div>
    )
}