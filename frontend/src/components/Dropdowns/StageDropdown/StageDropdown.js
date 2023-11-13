import { useState } from "react"

//hocs
import withDropdownControl from "../../../hocs/withDropdownControl"

//constants
import { APP_STAGE_COLORS } from "../../../constants/application"

//utils
import { getContrastTextColor } from "../../../utils/components"

//css
import "./StageDropdown.css"

function StageDropdown({ id, stage, handleStage, showDropdown, handleCloseDropdown, handleOpenDropdown }) {

    return (
        <div
            className={`stage-dropdown ${showDropdown ? "" : "minimized-stage-dropdown"}`}
        >
            <button
                type="button"
                className="stage-dropdown-face"
                style={{ backgroundColor: APP_STAGE_COLORS[stage], color: getContrastTextColor(APP_STAGE_COLORS[stage]) }}
                onClick={(e) => (
                    showDropdown ? handleCloseDropdown(e) : handleOpenDropdown(e)
                )}
                id={id}
            >
                <div>{stage}</div>
                <i
                    className="bi bi-caret-down-fill"
                    style={{ fontSize: "0.75em" }}
                ></i>
            </button>
            <div className="stage-dropdown-options">
                {Object.entries(APP_STAGE_COLORS).map(([option, color]) => (
                    option !== stage ? (
                        <button
                            key={option}
                            value={option}
                            className="stage-dropdown-option"
                            style={{ color: color }}
                            onClick={(e) => handleStage(e)}
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