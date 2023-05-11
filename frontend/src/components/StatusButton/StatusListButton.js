//utils
import { textFormat } from "../../utils/text"

export default function StatusListButton({ status, setStatus, color, textClass }) {

    //how the item in dropdown looks

    function updateStatus(status) {
        setStatus(status)
    }

    return (
        <>
            <li>
                <button type="button" className={`dropdown-item text-${color}`} onClick={(e) => {
                    e.preventDefault()
                    updateStatus(status)
                }}>
                    <div className={textClass}>
                        {textFormat(status)}
                    </div>
                </button>
            </li>
        </>
    )
}