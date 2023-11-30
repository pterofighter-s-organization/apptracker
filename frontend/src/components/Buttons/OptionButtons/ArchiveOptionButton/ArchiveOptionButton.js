



//css
import "../styles/OptionButton.css"

export default function ArchiveOptionButton({ handleArchive }) {

    return (
        <button
            type="button"
            className="option-button"
            onClick={handleArchive}
        >
            <i className={"bi bi-archive-fill"}></i>
        </button>
    )
}