
//css
import "./TextareaInput.css"

export default function TextareaInput({ height, name, value, placeholder, handleChange }) {

    return (
        <textarea
            name={name}
            value={value}
            placeholder={placeholder || name.toUpperCase()}
            onChange={handleChange}
            className="textarea-input-field input-field"
            style={{ height: height || "" }}
        />
    )
}