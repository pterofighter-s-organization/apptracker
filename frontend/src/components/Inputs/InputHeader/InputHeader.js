


//css
import "./InputHeader.css"
import "../styles/Inputs.css"

export default function InputHeader({ header, isRequired }) {

    return(
        <div className="input-header">
            {header} {isRequired ? "*" : null}
        </div>
    )
}