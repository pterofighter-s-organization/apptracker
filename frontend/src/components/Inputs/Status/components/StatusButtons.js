import { useEffect, useRef } from "react";

//utils
import { textFormat } from "../../../../utils/text.js";

export default function StatusButtons(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    const statusMapColor = {
        "applied": "warning",
        "rejected": "danger",
        "interviewing": "primary",
        "interested": "secondary",
        "accepted": "success",
        "ghosted": "dark",
    }

    const actualLabel = "status" + label
    const status = formData[actualLabel]

    function updateStatus(newStatus) {
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newStatus }))
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
                <div className={fontSize}>
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

            {/* dropdown of other statuses */}
            <ul className={`dropdown-menu`} ref={dropdownMenuRef}>
                {Object.entries(statusMapColor).map(([statusLabel, color]) => {
                    if (statusLabel !== status) {
                        return (
                            <li>
                                <button
                                    type="button"
                                    className={`dropdown-item text-${color}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        updateStatus(statusLabel)
                                    }}
                                >
                                    <div className={fontSize}>
                                        {textFormat(statusLabel)}
                                    </div>
                                </button>
                            </li>
                        )
                    }
                    return <></>
                })}
            </ul>
        </div>
    )
}