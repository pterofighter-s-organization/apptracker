
//css
import "./ActiveOptionButtons.css"

export default function ActiveOptionButtons({ handleArchive }) {

    return (
        <button
            type="button"
            className="onclick-bw-button"
            onClick={handleArchive}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Set this to archived."
        >
            <i className={"bi bi-archive-fill"}></i>
        </button>
    )
}