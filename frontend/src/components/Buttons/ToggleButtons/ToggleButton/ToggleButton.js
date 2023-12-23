import { useMemo } from "react";

//utils
import { getContrastTextColor } from "../../../../utils/component";

//css
import "../styles/ToggleButtons.css"
import "../../styles/Buttons.css"

export default function ToggleButton({ value, options, handleOption }) {

    const keys = useMemo(() => {
        return Object.keys(options)
    }, [options])

    //first option is left, second option is right for the toggle label.
    return (
        <button
            type="button"
            className="button toggle-button-layout toggle-button-active"
            style={{
                backgroundColor: options[value],
                color: getContrastTextColor(options[value]),
            }}
            onClick={(e) => {
                value === keys[1] ? handleOption(e, keys[0]) : handleOption(e, keys[1])
            }}
        >
            <div className={`${value === keys[0] ? "toggle-button-label" : "toggle-button-bg"}`}>
                {keys[0]}
            </div>
            <div
                className={`toggle-button-circle toggle-button-circle-right ${value === keys[1] ? "toggle-button-circle-right-transition" : ""}`}
                style={{
                    backgroundColor: `${getContrastTextColor(options[value])}`,
                }}
            />
            <div className={`${value === keys[1] ? "toggle-button-label" : "toggle-button-bg"}`}>
                {keys[1]}
            </div>
        </button>
    )
}
