

//components
import { StageDropdown } from "../../Dropdowns/StageDropdown";

//private-layouts
import { InputLayout } from "../layouts/InputLayout";

//css
import "./StageInput.css"

export default function StageInput({ name, formDataObj, handleChange, ...props }) {

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <StageDropdown
                id={name + "-input"}
                name={name}
                stage={formDataObj.value}
                handleStage={handleChange}
            />
        </InputLayout>
    )
}