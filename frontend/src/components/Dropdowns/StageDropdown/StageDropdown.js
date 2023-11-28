
//hocs
import { withToggleControl } from "../../../hocs/withToggleControl"

//private-layouts
import { DropdownLayout } from "../layouts/DropdownLayout"

//constants
import { APP_STAGE_COLORS } from "../../../constants/constants"

//utils
import { getContrastTextColor } from "../../../utils/componentUtils"

//css
import "./StageDropdown.css"

function StageDropdown({ id, name, stage, handleStage, toggle, handleUntoggle, handleToggle }) {

    return (
        <DropdownLayout
            className={`stage-dropdown ${toggle ? "" : "minimized-stage-dropdown"}`}
        >
            <button
                id={id}
                type="button"
                className="stage-dropdown-face"
                style={{ backgroundColor: APP_STAGE_COLORS[stage], color: getContrastTextColor(APP_STAGE_COLORS[stage]) }}
                onClick={toggle ? handleUntoggle : handleToggle}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="A selection of stages for the application."
            >
                <div>{stage}</div>
                {
                    toggle ?
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
                            name={name ? name : option}
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
        </DropdownLayout>
    )
}

export default withToggleControl(StageDropdown)