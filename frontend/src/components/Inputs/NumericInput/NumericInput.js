
//css
import "./NumericInput.css"

export default function NumericInput({ name, value, handleChange }) {

    return (
        <input
            type="number"
            name={name}
            className={`numeric-input-field input-field`}
            placeholder={name.toUpperCase()}
            value={value}
            onChange={handleChange}
        />
    )
}