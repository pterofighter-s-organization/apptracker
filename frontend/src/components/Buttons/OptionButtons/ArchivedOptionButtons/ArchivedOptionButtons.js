
//css
import "./ArchivedOptionButtons.css"

export default function ArchivedOptionButtons({ handleRestore, handleDelete }) {

    return (
        <>
            <button
                type="button"
                className="onclick-bw-button"
                onClick={handleRestore}
            >
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <button
                type="button"
                className="onclick-bw-button"
                onClick={handleDelete}
            >
                <i className="bi bi-trash3-fill"></i>
            </button>
        </>
    )
}