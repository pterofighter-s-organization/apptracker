
//css
import "./ActiveOptionButtons.css"

export default function ActiveOptionButtons({ handleArchive }) {

    return (
        <button
            type="button"
            className="onclick-bw-button"
            onClick={handleArchive}
        >
            <i className={"bi bi-archive-fill"}></i>
        </button>
    )
}