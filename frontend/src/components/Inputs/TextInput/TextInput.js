
//private-layouts
import { InputLayout } from "../layouts/InputLayout"

//css
import "./TextInput.css"

export default function TextInput({ maxWidth, name, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <input
                type="text"
                name={name}
                className={`text-input-box input-box ${formDataObj.error.length > 0 ? "input-box-error" : ""}`}
                style={{ maxWidth: maxWidth ? maxWidth : "" }}
                placeholder={name.toUpperCase()}
                value={formDataObj.value}
                onChange={handleChange}
            />
        </InputLayout>
    )
}