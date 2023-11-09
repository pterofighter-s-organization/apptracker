import { useState } from "react"

//hooks
import useShowMenu from "hooks/useShowMenu"

//constants
import { APP_STATUS_COLORS } from "../../../constants/application"

//css
import "./StatusButton.css"

export default function StatusButton({ id }) {

    const statusButtonId = "status-button" + id //making sure every status button differs

    const [status, setStatus] = useState("interviewing")
    const { showMenu, handleCloseMenu, handleOpenMenu } = useShowMenu(statusButtonId)

    function getContrastColor(hexColor) {
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000000" : "#FFFFFF";
    }

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    return (
        <div
            className={`status-button ${showMenu ? "" : "minimized-status-button"}`}
            onClick={(e) => { e.preventDefault() }}
        >
            <button
                className="status-button-face"
                style={{ backgroundColor: APP_STATUS_COLORS[status], color: getContrastColor(APP_STATUS_COLORS[status]) }}
                onClick={(e) => (
                    showMenu ? handleCloseMenu(e) : handleOpenMenu(e)
                )}
                id={statusButtonId}
            >
                <div>{status}</div>
                <i
                    className="bi bi-caret-down-fill"
                    style={{ fontSize: "0.75em" }}
                ></i>
            </button>
            <div className="status-button-option-menu">
                {Object.entries(APP_STATUS_COLORS).map(([option, color]) => {
                    if (option !== status) {
                        return (
                            <button
                                key={option}
                                className="status-button-option"
                                style={{ color: color }}
                                onClick={() => { setStatus(option) }}
                            >
                                {option}
                            </button>
                        )
                    }
                    return <></>
                })}
            </div>
        </div>
    )
}