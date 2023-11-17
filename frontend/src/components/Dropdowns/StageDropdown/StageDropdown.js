
//hocs
import { withDropdownControl } from "../../../hocs/withDropdownControl"

//constants
import { APP_STAGE_COLORS } from "../../../constants/constants"

//utils
import { getContrastTextColor } from "../../../utils/components"

//css
import "./StageDropdown.css"

function StageDropdown({ id, stage, handleStage, showDropdown, handleCloseDropdown, handleOpenDropdown }) {

    return (
        <div
            className={`stage-dropdown dropdown ${showDropdown ? "" : "minimized-stage-dropdown"}`}
        >
            <button
                type="button"
                className="stage-dropdown-face"
                style={{ backgroundColor: APP_STAGE_COLORS[stage], color: getContrastTextColor(APP_STAGE_COLORS[stage]) }}
                onClick={showDropdown ? handleCloseDropdown : handleOpenDropdown}
                id={id}
            >
                <div>{stage}</div>
                {
                    showDropdown ?
                        <i className="dropdown-face-icon bi bi-caret-up-fill"></i>
                        :
                        <i className="dropdown-face-icon bi bi-caret-down-fill" />
                }
            </button>
            <div className="stage-dropdown-options dropdown-options">
                {Object.entries(APP_STAGE_COLORS).map(([option, color]) => (
                    option !== stage ? (
                        <button
                            key={option}
                            value={option}
                            className="stage-dropdown-option dropdown-option"
                            style={{ color: color }}
                            onClick={handleStage}
                        >
                            {option}
                        </button>
                    ) : null
                ))}
            </div>
        </div>
    )
}

export default withDropdownControl(StageDropdown)