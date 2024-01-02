

//css
import "./SelectionInput.css"

export default function SelectionInput({ name, options, value, handleChange }) {

    return (
        <div className="selection-input-field input-field">
            <select
                name={name}
                onChange={handleChange}
            >
                {
                    options.map((option) => (
                        option !== value ?
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                            :
                            <option
                                key={option}
                                defaultValue={option}
                            >
                                {option}
                            </option>
                    ))
                }
            </select>
            <i
                className={`selection-arrow-icon bi bi-caret-down-fill`}
            ></i>
        </div>
    )
}