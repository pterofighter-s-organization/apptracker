


//css
import "./SelectionInput.css"

export default function SelectionInput({ name, options, value, handleChange }) {

    return (
        <select
            name={name}
            className="selection-input-field input-field"
            onChange={handleChange}
        >
            {
                options.map((option) => (
                    option !== value ?
                        <option
                            value={option}
                        >
                            {option}
                        </option>
                        :
                        <option
                            selected
                            value={option}
                        >
                            {option}
                        </option>
                ))
            }
        </select>
    )
}