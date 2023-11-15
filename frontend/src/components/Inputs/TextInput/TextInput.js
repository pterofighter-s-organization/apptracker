
//private-layouts
import { InputLayout } from "../layouts/InputLayout"

//css
import "./TextInput.css"

export default function TextInput({ name, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <input
                type="text"
                name={name}
                className={`input-box ${formDataObj.error.length > 0 ? "input-box-error" : ""}`}
                placeholder={name.toUpperCase()}
                value={formDataObj.value}
                onChange={handleChange}
            />
        </InputLayout>
    )
}