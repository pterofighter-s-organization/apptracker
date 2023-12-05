
//utils
import { strFormatter } from "../../../utils/formatUtils"

//css
import "./InputFooter.css"
import "../styles/Inputs.css"

export default function InputFooter({ footer, errorMessage }) {

    return (
        <div className="input-footer">
            - {
                (errorMessage?.length > 0) ?
                    errorMessage
                    :
                    strFormatter(footer)
            }
        </div>
    )
}