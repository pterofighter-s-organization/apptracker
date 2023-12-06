


//css
import "./DateTimeInput.css"
import "../styles/Inputs.css"

export default function DateTimeInput({ name, value, handleChange }) {

    return (
        <input
            type="datetime-local"
            className={`datetime-field input-field`}
            name={name}
            placeholder={name.toUpperCase()}
            value={value}
            onChange={handleChange}
        />
    )
}