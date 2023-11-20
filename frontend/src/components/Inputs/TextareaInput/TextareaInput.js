

//layouts
import { InputLayout } from "../layouts/InputLayout";

//css
import "./TextareaInput.css"

export default function TextareaInput({ height, name, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <textarea
                name={name}
                value={formDataObj.value}
                onChange={handleChange}
                className="textarea-input input-box"
                style={{ height: (height ? height : "") }}
                placeholder={name.toUpperCase()}
            />
        </InputLayout>
    )
}