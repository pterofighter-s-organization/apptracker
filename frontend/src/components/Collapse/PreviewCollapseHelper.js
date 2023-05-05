import { spaceFromSize } from "../../utils/measurements"

export function showRemainingContent(collapseId, maxHeight, overflow) {

    const buttonId = collapseId + '-button'
    const backgroundId = collapseId + '-background'
    
    const collapseContainer = document.getElementById(collapseId)
    const background = document.getElementById(backgroundId)
    const button = document.getElementById(buttonId)
    //for smooth transistion, getting the height of the container thats wrapped inside
    const container = collapseContainer.children[0]

    const isCollapsed = button.getAttribute('aria-expanded') === "true" ? "false" : "true"
    const text = button.getAttribute('data-text')
    button.innerHTML = isCollapsed === "true" ? "Show Less": "Show All " + text
    button.setAttribute('aria-expanded', isCollapsed)

    //styling to make button have more breathing space
    const marginForButton = spaceFromSize(5).res //same as m-5

    console.log(container.clientHeight, container.clientHeight + marginForButton)

    if (isCollapsed === "true") {
        //collapsed state
        collapseContainer.style.overflow = ""
        collapseContainer.style.transition = "0.05s ease-in-out";
        collapseContainer.style.maxHeight = (container.clientHeight) + "px"
        background.style.display = "none"
        button.style.position = "relative"
        button.style.marginTop = (marginForButton) + "px"
        button.style.bottom = "0px"

    } else if (isCollapsed === "false") {
        //original state
        collapseContainer.style.overflow = overflow
        collapseContainer.style.maxHeight = maxHeight
        background.style.display = "" //shows it
        button.style.position = "absolute"
        button.style.marginTop = "0px"
        button.style.bottom = "50px"

    }
}

export function checkShowCollapse (containerHeight, parentHeight) {
    return parentHeight < containerHeight
}