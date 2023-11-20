import { InputLayout } from "../layouts/InputLayout";




//css
import "./SelectionInput.css"

export default function SelectionInput({ name, options, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <select
                name={name}
                className="selection-input"
                onChange={handleChange}
            >
                {
                    options.map((option) => (
                        option !== formDataObj.value ?
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
        </InputLayout>
    )
}