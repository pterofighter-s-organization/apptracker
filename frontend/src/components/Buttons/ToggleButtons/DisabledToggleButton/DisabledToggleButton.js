
//components
import { TooltipText } from "../../../TooltipText"

//utils
import { getContrastTextColor } from "../../../../utils/component"

//css
import "../styles/ToggleButtons.css"
import "../../styles/Buttons.css"

export default function DisabledToggleButton({ isLeft, value, color }) {

    //isLeft means if the label is on left
    return (
        <button
            type="button"
            className="toggle-button-layout toggle-button-disabled"
            style={{
                backgroundColor: color,
                color: getContrastTextColor(color)
            }}
            disabled
        >
            <TooltipText
                text={"This toggle is disabled."}
            />
            <div className={`${isLeft ? "toggle-button-label" : "toggle-button-bg"}`}>
                {value}
            </div>
            <div
                className={`toggle-button-circle ${!isLeft ? "toggle-button-circle-left" : "toggle-button-circle-right"}`}
                style={{
                    backgroundColor: getContrastTextColor(color)
                }}
            />
            <div className={`${!isLeft ? "toggle-button-label" : "toggle-button-bg"}`}>
                {value}
            </div>
        </button>
    )
}

