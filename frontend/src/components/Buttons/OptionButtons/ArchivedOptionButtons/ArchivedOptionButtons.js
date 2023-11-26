
//css
import "./ArchivedOptionButtons.css"

export default function ArchivedOptionButtons({ handleRestore, handleDelete }) {

    return (
        <>
            <button
                type="button"
                className="onclick-bw-button"
                onClick={handleRestore}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Restore this to active."
            >
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <button
                type="button"
                className="onclick-bw-button"
                onClick={handleDelete}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete this forever."
            >
                <i className="bi bi-trash3-fill"></i>
            </button>
        </>
    )
}