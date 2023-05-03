
//this is a file for helper functions (PURE FUNCTIONS (no side effect, no global vars used) inside dashboard.js)
//only used for dashboard.js and designed for it

export function checkShowCollapseApps (apps, windowWidth, windowHeight, vh) {

    //calculate how many cards can the current window can fit to see if theres a need for collapse

    const vwPadding = 1

    //padding in px = (vw) * (the window width (in px) / 100)
    const paddingPx = vwPadding * (windowWidth / 100)
    const containerWidth = windowWidth - (2 * paddingPx)
    //gap is gutter width = container width * gutter percentage / 100
    //the percentage is 1.5 usually but i downscale to 1.25 for margins (IMPORTANT DONT DELETE)
    const gap = (containerWidth * 1.25 / 100)

    let cardsToFitRow = Math.floor(windowWidth / (315 + gap)) //get the card width from appcard.css

    if (windowWidth < 680) { //see card.css for max-width phone screen size
        cardsToFitRow = 1
    }

    //315px card
    //so if the with of the window can fit all the cards then no need the button
    //check height is capable of putting that many cards row*(col of cards)
    return !(cardsToFitRow >= apps.length) && !checkHeightHelper(windowHeight, vh, cardsToFitRow, apps.length)
}

function checkHeightHelper (windowHeight, vh, cardsPerRow, appsLength) {

    const heightInPx = (vh / 100) * windowHeight
    const cardsPerColumn = Math.floor(appsLength/cardsPerRow)
    const gap = (heightInPx * 1.25 / 100)
    //15 margin of error (in case the estimation is incorrect)
    const cardsToFitColumn = Math.floor((heightInPx + 15) / (315 + gap)) 

    //if the cards can fit exceeds amount of cards per column then it can fit
    return (cardsToFitColumn > cardsPerColumn)
}

export function checkShowCollapseTasks (tasks) {

    //if the amount of tasks is > 3 that means there gonna be alot of task

    return (tasks.length > 5)
}
