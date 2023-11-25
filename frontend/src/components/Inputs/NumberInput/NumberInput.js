



//private-layouts
import { InputLayout } from "../layouts/InputLayout"

//css
import "./NumberInput.css"

export default function NumberInput({ maxWidth, name, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <input
                type="number"
                name={name}
                className={`number-input-box input-box ${formDataObj.error.length > 0 ? "input-box-error" : ""}`}
                style={{ maxWidth: maxWidth ? maxWidth : "" }}
                placeholder={name.toUpperCase()}
                value={formDataObj.value}
                onChange={handleChange}
            />
        </InputLayout>
    )
}