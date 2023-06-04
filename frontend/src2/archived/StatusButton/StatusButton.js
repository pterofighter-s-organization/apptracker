import { useEffect, useRef } from "react";

//components
import StatusListButton from "./components/StatusListButton.js";

//utils
import { textFormat } from "../../utils/text.js";

export default function StatusButton({ status, setStatus, textClass }) {

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

    //another solution is to make the list items here instead, then update it again with usememo* (NOT WORK)

    //using ref to remove the show in dropdownmenu which was stuck because the component didn't unmount
    //this is the only solution after testing 
    const dropdownMenuRef = useRef(null)

    useEffect(() => {
        if (dropdownMenuRef) {
            dropdownMenuRef.current.classList.remove("show")
        }
    }, [status, dropdownMenuRef])

    return (
        <div className="btn-group">
            <button
                type="button"
                className={`btn btn-${statusMapColor[status]} pe-none`}
            >
                <div className={textClass}>
                    {textFormat(status)}
                </div>
            </button>
            <button
                type="button"
                className={`btn btn-${statusMapColor[status]} dropdown-toggle dropdown-toggle-split`}
                data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-auto-close="true"
            >
                {/* not show on the page, but for reference */}
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className={`dropdown-menu`} ref={dropdownMenuRef}>
                {Object.entries(statusMapColor).map(([statusLabel, color]) => {
                    if (statusLabel !== status) {
                        return (
                            <StatusListButton
                                status={statusLabel}
                                setStatus={setStatus}
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

//for testing purposes of the other solution
/* <ul className="dropdown-menu">
                {newStatuses.map((newStatus) => {
                    return (
                        <StatusListButton
                            status={newStatus}
                            setStatus={setStatus}
                            color={statusMapColor[newStatus]}
                            textClass={textClass}
                        />
                    )
                })}
            </ul> */