
//css
import "./ShowButton.css"

export default function ShowButton({ isShow, isInitial, isLess, handleResetCount, handleAddCount, type }) {

    return (
        <div className="show-button-container">
            {!isLess ?
                isShow ?
                    isInitial ?
                        <button
                            type="button"
                            className="show-button show-button-load"
                            onClick={(e) => handleAddCount(e)}
                        >
                            show more {type}
                        </button>
                        :
                        <>
                            <button
                                type="button"
                                className="show-button show-button-load"
                                onClick={(e) => handleAddCount(e)}
                            >
                                show more {type}
                            </button>
                            <button
                                type="button"
                                className="show-button show-button-reset"
                                onClick={(e) => handleResetCount(e)}
                            >
                                show less
                            </button>
                        </>
                    :
                    <button
                        type="button"
                        className="show-button show-button-reset"
                        onClick={(e) => handleResetCount(e)}
                    >
                        show less
                    </button>
                :
                null
            }
        </div>
    )
}