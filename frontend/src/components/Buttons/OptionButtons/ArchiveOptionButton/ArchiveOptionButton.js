



//css
import "../styles/OptionButton.css"

export default function ArchiveOptionButton({ handleArchive }) {

    return (
        <button
            type="button"
            className="button option-button"
            onClick={handleArchive}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Press to archive.`}
        >
            <i className={"bi bi-archive-fill"}></i>
        </button>
    )
}