

//constants
import { APP_STAGE_COLORS } from "../../../constants/constants"

//utils
import { getContrastTextColor } from "../../../utils/component"

//hocs
import { withToggleControl } from "../../../hocs/withToggleControl"

//css
import "../styles/Dropdown.css"
import "./StageDropdown.css"

function StageDropdown({
    id, stage, handleStage, name,
    toggle, handleToggle, handleUntoggle
}) {
    //name is for input use

    return (
        <div className={`dropdown ${toggle ? "" : "minimized-dropdown"}`}>
            <button
                id={id}
                type="button"
                className="dropdown-face stage-dropdown-face"
                onClick={toggle ? handleUntoggle : handleToggle}
                style={{
                    backgroundColor: `${APP_STAGE_COLORS[stage || "interested"]}`,
                    color: getContrastTextColor(APP_STAGE_COLORS[stage])
                }}
            >
                <div className="stage-dropdown-option-selected">
                    {stage}
                </div>
                <i
                    className={`dropdown-face-icon ${toggle ? "" : "dropdown-face-icon-rotated"} bi bi-caret-up-fill`}
                ></i>
            </button>
            <div className="dropdown-options stage-dropdown-options">
                {
                    Object.entries(APP_STAGE_COLORS).map(([option, color]) => (
                        option !== stage ?
                            <button
                                type="button"
                                name={name ? name : option}
                                value={option}
                                onClick={(e) => {
                                    handleStage(e)
                                    handleUntoggle(e)
                                }}
                                className="dropdown-option stage-dropdown-option"
                                style={{ color: color }}
                            >
                                {option}
                            </button>
                            :
                            null
                    ))
                }
            </div>
        </div>
    )
}

export default withToggleControl(StageDropdown)