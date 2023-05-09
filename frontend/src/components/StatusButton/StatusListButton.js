//utils
import { textFormat } from "../../utils/text"

export default function StatusListButton({ status, newStatus, color, textClass }) {

    //how the item in dropdown looks

    return (
        <>
            <li>
                <button type="button" className={`dropdown-item text-${color}`} onClick={(e) => {
                    e.preventDefault()
                    newStatus(status)
                }}>
                    <div className={textClass}>
                        {textFormat(status)}
                    </div>
                </button>
            </li>
        </>
    )
}