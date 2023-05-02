//utils
import { textFormat } from "../../utils/text"

export default function StatusListButton ({ status, newStatus, color }) {
   
    //how the item in dropdown looks

    return (
        <>
            <li>
                <button type="button" className={`dropdown-item text-${color}`} onClick={() => {
                    newStatus(status)
                }}>
                    {textFormat(status)}
                </button>
            </li>
        </>
        )
}