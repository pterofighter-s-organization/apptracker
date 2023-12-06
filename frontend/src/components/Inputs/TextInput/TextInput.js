

//css
import "./TextInput.css"
import "../styles/Inputs.css"

export default function TextInput({ name, value, handleChange }) {

    return (
        <input
            type="input"
            className="text-input-field input-field"
            name={name}
            value={value}
            placeholder={name.toUpperCase()}
            onChange={handleChange}
        />
    )
}