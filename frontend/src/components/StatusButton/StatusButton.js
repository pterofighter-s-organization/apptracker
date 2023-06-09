import { useEffect, useRef } from "react";

//utils
import { STATUSES_MAP_COLOR } from "../../../utils/constants";

export default function StatusButton({ value, updateValue }) {

    //another solution is to make the list of other status items here instead, then update it again with usememo* (NOT WORK)
    //using ref to remove the show in dropdownmenu which was stuck because the component didn't unmount
    //this is the only solution after testing 
    const dropdownMenuRef = useRef(null)

    useEffect(() => {
        if (dropdownMenuRef) {
            dropdownMenuRef.current.classList.remove("show")
        }
        //value is here because when the value changes, it must remove the show of the previous dropdown
    }, [value, dropdownMenuRef])

    return (
        <div className="btn-group">
            <button
                type="button"
                //pointer event none -> pe-none
                className={`btn btn-${STATUSES_MAP_COLOR[value]} pe-none`}
            >
                <div className="text-capitalize">
                    {value}
                </div>
            </button>
            <button
                type="button"
                className={`btn btn-${STATUSES_MAP_COLOR[value]} dropdown-toggle dropdown-toggle-split`}
                data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-auto-close="true"
            >
                {/* not show on the page, but for reference */}
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>

            {/* dropdown of other statuses */}
            <ul className={`dropdown-menu`} ref={dropdownMenuRef}>
                {Object.entries(STATUSES_MAP_COLOR).map(([statusLabel, color]) => {
                    if (statusLabel !== value) {
                        return (
                            <li>
                                <button
                                    type="button"
                                    className={`dropdown-item text-${(color === "light") ? "dark" : color}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        updateValue(statusLabel)
                                    }}
                                >
                                    <div className="text-capitalize">
                                        {statusLabel}
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