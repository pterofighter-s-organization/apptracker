
//css
import "./ShowButton.css"

//avoid repeated code. so made it a private component instead.
const ShowMoreButton = ({ handleAddCount, type }) => {
    return (
        <button
            type="button"
            className="show-button show-button-load"
            onClick={handleAddCount}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Show more ${type}.`}
        >
            show more {type}
        </button>
    )
}

const ShowLessButton = ({ handleResetCount }) => {
    return (
        <button
            type="button"
            className="show-button show-button-reset"
            onClick={handleResetCount}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Reset all the loaded content."
        >
            show less
        </button>
    )
}


export default function ShowButton({ isShow, isInitial, isLess, handleResetCount, handleAddCount, type }) {

    return (
        <div className={`show-button-container ${isLess ? "show-button-container-empty" : ""}`}>
            {!isLess ?
                isShow ?
                    isInitial ?
                        <ShowMoreButton
                            handleAddCount={handleAddCount}
                            type={type}
                        />
                        :
                        <>
                            <ShowMoreButton
                                handleAddCount={handleAddCount}
                                type={type}
                            />
                            <ShowLessButton
                                handleResetCount={handleResetCount}
                            />
                        </>
                    :
                    <ShowLessButton
                        handleResetCount={handleResetCount}
                    />
                :
                null
            }
        </div>
    )
}