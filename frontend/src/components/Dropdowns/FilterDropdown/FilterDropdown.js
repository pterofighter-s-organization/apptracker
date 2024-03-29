

//hocs
import { withExpandControl } from "../../../hocs/withExpandControl";

//utils
import { getContrastTextColor } from "../../../utils/component";

//css
import "../styles/Dropdown.css"
import "./FilterDropdown.css"

//private-components
const FilterDropdownOption = ({ option, handleOption, color }) => {

    return (
        <div
            className="filter-dropdown-option"
            style={{ color: color }}
            onClick={(e) => handleOption(e, option)}
        >
            <i className="bi bi-dot"></i>
            <span
                key={option}
                className="dropdown-option"
            >
                {option ? option : "all"}
            </span>
        </div>
    )
}

//main component
function FilterDropdown({
    id, label, value,
    options, isOptionAll, handleOption,
    isExpand, handleExpand, handleMinimize
}) {

    return (
        <div className={`dropdown ${isExpand ? "" : "minimized-dropdown"}`}>
            <button
                id={id}
                type="button"
                className="dropdown-face filter-dropdown-face"
                onClick={isExpand ? handleMinimize : handleExpand}
                style={{
                    backgroundColor: `${value ? options[value] : "black"}`,
                    color: `${getContrastTextColor(value ? options[value] : "black")}`
                }}
            >
                <span className="filter-dropdown-label">
                    {label}:
                </span>
                <span className="filter-dropdown-option-selected">
                    {value ? value : "all"}
                </span>
                <i
                    className={`dropdown-face-icon ${isExpand ? "" : "dropdown-face-icon-rotated"} bi bi-caret-up-fill`}
                ></i>
            </button>
            <div className="dropdown-options filter-dropdown-options">
                Choose:
                {
                    isOptionAll && value ?
                        <FilterDropdownOption
                            option={null}
                            handleOption={handleOption}
                            color={"black"}
                        />
                        :
                        null
                }
                {
                    Object.entries(options).map(([option, color]) => (
                        option !== value ?
                            <FilterDropdownOption
                                key={option}
                                option={option}
                                handleOption={handleOption}
                                color={color}
                            />
                            :
                            null
                    ))
                }
            </div>
        </div>
    )
}

export default withExpandControl(FilterDropdown)