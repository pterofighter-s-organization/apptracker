
//constants
import { ARCHIVED_BIN_ICON } from "../../../../../../constants/components"

//css
import "./ActiveCardButtons.css"

export default function ActiveCardButtons({ handleArchive }) {

    return (
        <button
            type="button"
            className="onclick-bw-button"
            onClick={handleArchive}
        >
            <i className={`${ARCHIVED_BIN_ICON}`}></i>
        </button>
    )
}