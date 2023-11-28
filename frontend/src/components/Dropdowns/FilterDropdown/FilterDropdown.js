

//hocs
import { withToggleControl } from "../../../hocs/withToggleControl"

//private-layouts
import { DropdownLayout } from "../layouts/DropdownLayout"

//css
import "./FilterDropdown.css"

function FilterDropdown({ id, label, value, options, isOptionAll, handleOption, toggle, handleUntoggle, handleToggle }) {

    return (
        <DropdownLayout
            className={`filter-dropdown ${toggle ? "" : "minimized-filter-dropdown"}`} 
        >
            <button
                id={id}
                type="button"
                className="filter-dropdown-face"
                onClick={toggle ? handleUntoggle : handleToggle}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={`Opens a selection of ${label} to filter.`}
            >
                {label}:
                <div
                    className="filter-dropdown-face-value"
                    style={{ color: `${value && value.length > 0 ? options[value] : "black"}` }}
                >
                    {value && value.length > 0 ? value : "all"}
                </div>
                {
                    toggle ?
                        <i className="dropdown-face-icon bi bi-caret-up-fill"></i>
                        :
                        <i className="dropdown-face-icon bi bi-caret-down-fill" />
                }
            </button>
            <div className="filter-dropdown-options dropdown-options">
                Choose:
                {
                    isOptionAll && value && value.length > 0 ?
                        <li
                            className="filter-dropdown-option dropdown-option"
                            onClick={e => handleOption(e, null)}
                        >
                            all
                        </li>
                        :
                        null
                }
                {
                    Object.entries(options).map(([option, color]) => (
                        option !== value ?
                            <li
                                key={option}
                                className="filter-dropdown-option dropdown-option"
                                style={{ color: color }}
                                onClick={e => handleOption(e, option)}
                            >
                                {option}
                            </li>
                            :
                            null
                    ))
                }
            </div>
        </DropdownLayout>
    )
}

export default withToggleControl(FilterDropdown)