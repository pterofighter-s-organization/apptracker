

//hocs
import { withDropdownControl } from "../../../hocs/withDropdownControl"

//css
import "./FilterDropdown.css"

function FilterDropdown({ id, label, value, options, isOptionAll, handleOption, showDropdown, handleCloseDropdown, handleOpenDropdown }) {

    return (
        <div className={`filter-dropdown dropdown ${showDropdown ? "" : "minimized-filter-dropdown"}`} id={id}>
            <button
                type="button"
                className="filter-dropdown-face"
                onClick={showDropdown ? handleCloseDropdown : handleOpenDropdown}
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
                    showDropdown ?
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
        </div>
    )
}

export default withDropdownControl(FilterDropdown)