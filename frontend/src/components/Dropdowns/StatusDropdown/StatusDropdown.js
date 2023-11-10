import { useState } from "react"

//hocs
import withDropdownControl from "../../../hoc/withDropdownControl"

//constants
import { APP_STATUS_COLORS } from "../../../constants/application"

//css
import "./StatusDropdown.css"

function StatusDropdown({ id, showDropdown, handleCloseDropdown, handleOpenDropdown }) {

    const [status, setStatus] = useState("interviewing")

    function getContrastTextColor(hexColor) {
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000000" : "#FFFFFF";
    }

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    return (
        <div
            className={`status-dropdown ${showDropdown ? "" : "minimized-status-dropdown"}`}
            onClick={(e) => { e.preventDefault() }}
        >
            <button
                className="status-dropdown-face"
                style={{ backgroundColor: APP_STATUS_COLORS[status], color: getContrastTextColor(APP_STATUS_COLORS[status]) }}
                onClick={(e) => (
                    showDropdown ? handleCloseDropdown(e) : handleOpenDropdown(e)
                )}
                id={id}
            >
                <div>{status}</div>
                <i
                    className="bi bi-caret-down-fill"
                    style={{ fontSize: "0.75em" }}
                ></i>
            </button>
            <div className="status-dropdown-option-menu">
                {Object.entries(APP_STATUS_COLORS).map(([option, color]) => (
                    option !== status ? (
                        <button
                            key={option}
                            className="status-dropdown-option"
                            style={{ color: color }}
                            onClick={() => { setStatus(option) }}
                        >
                            {option}
                        </button>
                    ) : null
                ))}
            </div>
        </div>
    )
}

export default withDropdownControl(StatusDropdown)