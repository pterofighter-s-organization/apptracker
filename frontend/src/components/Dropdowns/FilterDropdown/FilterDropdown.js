

//hocs
import { withDropdownControl } from "../../../hocs/withDropdownControl"

//css
import "./FilterDropdown.css"

function FilterDropdown({ id, label, value, options, handleOption, showDropdown, handleCloseDropdown, handleOpenDropdown }) {

    return (
        <div className={`filter-dropdown dropdown ${showDropdown ? "" : "minimized-filter-dropdown"}`} id={id}>
            <button
                type="button"
                className="filter-dropdown-face"
                onClick={showDropdown ? handleCloseDropdown : handleOpenDropdown}
            >
                {label}:
                <div
                    className="filter-dropdown-face-value"
                    style={{ color: `${value && value.length > 0 ? options[value] : "darkgray"}` }}
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
                    Object.entries(options).map(([option, color]) => (
                        option !== value ?
                            <li
                                key={option}
                                value={option}
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