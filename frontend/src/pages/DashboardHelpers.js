
//this is a file for helper functions (pure functions inside and used for dashboard.js)

export function checkShowCollapseApps (apps) {

    const windowWidth = window.innerWidth
    const vwPadding = 1

    //padding in px = (vw) * (the window width (in px) / 100)
    const paddingPx = vwPadding * (windowWidth / 100)
    const containerWidth = windowWidth - (2 * paddingPx)
    //gap is gutter width = container width * gutter percentage / 100
    //the percentage is 1.5 usually but i downscale to 1.25 for margins
    const gap = (containerWidth * 1.25 / 100)
    const cardsToFit = Math.floor(windowWidth / (315 + gap))

    //315px card
    //so if the with of the window can fit all the cards then no need the button

    return !(cardsToFit >= apps.length)
}

export function checkShowCollapseTasks (apps) {
    //if the amount of interviewing apps is > 3 that means there gonna be alot of task
    return (apps.length > 3)
}

export function showRemainingContent(id, collapseId, backgroundId) {

    const collapse = document.getElementById(collapseId)
    const background = document.getElementById(backgroundId)
    const button = document.getElementById(id)

    let isExpanded = button.getAttribute('aria-expanded')
    const text = button.getAttribute('data-text')
    button.innerHTML = isExpanded === "true" ? "Show All " + text : "Show Less"
    isExpanded = isExpanded === "true" ? "false" : "true"
    button.setAttribute('aria-expanded', isExpanded)

    if (isExpanded === "true") {
        collapse.style.overflow = ""
        collapse.style.maxHeight = "none"
        background.style.display = "none"
        button.style.position = "relative"
    } else {
        collapse.style.overflow = "hidden"
        collapse.style.maxHeight = "40vh"
        background.style.display = "" //shows it
        button.style.position = "absolute"
    }
}