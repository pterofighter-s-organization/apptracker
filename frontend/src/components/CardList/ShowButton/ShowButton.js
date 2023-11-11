
//css
import "./ShowButton.css"

export default function ShowButton({ isShow, handleResetCount, handleAddCount, label }) {

    return (
        <div className="show-button-container">
            {isShow ?
                <button
                    type="button"
                    className="show-button show-button-load"
                    onClick={(e) => handleAddCount(e)}
                >
                    show more {label}
                </button>
                :
                <button
                    type="button"
                    className="show-button show-button-reset"
                    onClick={(e) => handleResetCount(e)}
                >
                    show less
                </button>
            }
        </div>
    )
}