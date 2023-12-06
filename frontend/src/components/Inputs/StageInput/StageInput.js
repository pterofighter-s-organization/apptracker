
//components
import { StageDropdown } from "../../Dropdowns/StageDropdown";

//css
import "./StageInput.css"

export default function StageInput({ name, value, handleChange }) {

    return(
        <StageDropdown
            id={`${name}-stage-input`}
            name={name}
            stage={value}
            handleStage={handleChange}
        />
    )
}