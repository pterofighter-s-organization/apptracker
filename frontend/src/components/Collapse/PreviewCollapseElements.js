//css
import "./PreviewCollapse.css"

//a semi-component, need to pair with a container
//because I want to leave flexibility for how the container looks
export default function PreviewcollapseElements (props) {

    //this component must be pair with a container
    //elements like button and the blur background
    //the buttons, and the background to activate the collapse

    //here is what this semi component needs
    const {
        containerId,
        backgroundId,
        buttonId,
        text,
        maxHeight,
        overflow,
    } = props

    //has the helper function to control the collapse
    //helper function
    function showRemainingContent(buttonId, containerId, backgroundId) {

        const collapseContainer = document.getElementById(containerId)
        const background = document.getElementById(backgroundId)
        const button = document.getElementById(buttonId)

        let isExpanded = button.getAttribute('aria-expanded')
        const text = button.getAttribute('data-text')
        button.innerHTML = isExpanded === "true" ? "Show All " + text : "Show Less"
        isExpanded = isExpanded === "true" ? "false" : "true"
        button.setAttribute('aria-expanded', isExpanded)

        if (isExpanded === "true") {
            //collapsed state
            collapseContainer.style.overflow = ""
            collapseContainer.style.maxHeight = "none"
            background.style.display = "none"
            button.style.position = "relative"
        } else {
            //original state
            collapseContainer.style.overflow = overflow
            collapseContainer.style.maxHeight = maxHeight
            background.style.display = "" //shows it
            button.style.position = "absolute"
        }
    }

    return (
        <>
            <div
                className="blur-bg w-100"
                style={{ position: "absolute", bottom: 0, height: "15vh" }}
                id={backgroundId}
            />
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary p-3 px-5 mt-5" type="button" onClick={() => {
                        showRemainingContent(buttonId, containerId, backgroundId)
                    }}
                    aria-expanded="false"
                    data-text={text}
                    id={buttonId}
                    style={{ position: "absolute", bottom: 25 }}
                >
                    Show All {text}
                </button>
            </div>
        </>
    )
}