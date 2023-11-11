
//css
import "./ShowButton.css"

export default function ShowButton({ isLoading, handleClick, handleReset, text }) {

    return (
        <div className="show-button-container">
            {isLoading ?
                <button
                    type="button"
                    className="show-button show-button-load"
                    onClick={(e) => handleClick(e)}
                >
                    show more {text}
                </button>
                :
                <button
                    type="button"
                    className="show-button show-button-reset"
                    onClick={(e) => handleReset(e)}
                >
                    show less
                </button>
            }
        </div>
    )
}