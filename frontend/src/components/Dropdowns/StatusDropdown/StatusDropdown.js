
//hocs
import withDropdownControl from "../../../hoc/withDropdownControl"

//css
import "./StatusDropdown.css"

function StatusDropdown({ id, status, handleStatus, showDropdown, handleOpenDropdown, handleCloseDropdown }) {

    const STATUS_COLORS = {
        "archived": "#808080",
        "active": "#009900"
    }

    return (
        <div
            className={`status-dropdown ${showDropdown ? "" : "minimized-status-dropdown"}`}
            id={id}
        >
            <button
                type="button"
                className="status-dropdown-face"
                onClick={(e) => showDropdown ? handleCloseDropdown(e) : handleOpenDropdown(e)}
                style={{ color: STATUS_COLORS[status] }}
            >
                <div style={{color: "black"}}> 
                    Status:
                </div>
                {status}
                <i className="status-dropdown-face-icon bi bi-caret-down-fill"></i>
            </button>
            <div className="status-dropdown-options">
                <div>
                    Choose:
                </div>
                {
                    Object.entries(STATUS_COLORS).map(([option, color]) => (
                        option !== status ? (
                            <li
                                key={option}
                                className="status-dropdown-option"
                                style={{ color: STATUS_COLORS[option] }}
                                onClick={(e) => handleStatus(e, option)}
                            >
                                {option}
                            </li>
                        ) : null
                    ))
                }
            </div>
        </div>
    )
}

export default withDropdownControl(StatusDropdown)