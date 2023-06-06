//css
import "./PreviewCollapseButton.css"

export default function PreviewCollapseButton({ collapseId, showCollapseButton, showRemainingContents, text }) {

    const buttonId = collapseId + '-button'
    const backgroundId = collapseId + '-background'

    return (
        <>
            {showCollapseButton ?
                <>
                    <div className="d-flex justify-content-center my-4">
                        <button
                            className="btn btn-primary p-3 px-5" type="button" onClick={(e) => {
                                e.preventDefault()
                                showRemainingContents(false)
                            }}
                            aria-expanded="true"
                            data-text={text}
                            id={buttonId}
                            style={{ position: "relative", bottom: "0px" }}
                        >
                            Show Less
                        </button>
                    </div>
                </>
                :
                <>
                    <div
                        className="blur-bg w-100"
                        style={{ position: "absolute", bottom: "0px", height: "15vh" }}
                        id={backgroundId}
                    />
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary p-3 px-5" type="button" onClick={(e) => {
                                e.preventDefault()
                                showRemainingContents(true)
                            }}
                            aria-expanded="true"
                            data-text={text}
                            id={buttonId}
                            style={{ position: "absolute", bottom: "50px" }}
                        >
                            Show All {text}
                        </button>
                    </div>
                </>
            }
        </>
    )
}