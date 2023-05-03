
//this is a file for helper functions (PURE FUNCTIONS (no side effect, no global vars used) inside dashboard.js)
//only used for dashboard.js and designed for it

//utils
import { findGapPx, viewSizeToPx } from "../../utils/measurements"

//start of (1): the preview collapse check functions
export function checkShowCollapseApps (apps, windowWidth, windowHeight, vh) {

    //calculate how many cards can the current window can fit to see if theres a need for collapse

    const vwPadding = 1 //from the dashboard container

    //padding in px = (vw) * (the window width (in px) / 100)
    const paddingPx = viewSizeToPx(vwPadding, windowWidth)
    const appContainerWidth = windowWidth - (2 * paddingPx)

    // //read gutters doc on bootstrap bc it said gutter is 1.5rem = 16px for g-3 for g-4 is that * 1.5
    const arg = {
        "s": {gap: 3, marginOfError: 0},
        "sm": {gap: 3, marginOfError: 0},
        "md": {gap: 3, marginOfError: 0},
        "lg": {gap: 3, marginOfError: 0},
        "xl": {gap: 4, marginOfError: 0.5},
        "xxl": {gap: 4, marginOfError: 0.5},
    }
    const gap = findGapPx(arg, windowWidth)

    let cardsToFitRow = Math.floor((appContainerWidth) / (315 + (gap))) //get the card width from appcard.css

    if (windowWidth < 680) { //see card.css for max-width phone screen size
        cardsToFitRow = 1
    }

    //debugging
    // checkCardHeightHelper(windowHeight, vh, gap, cardsToFitRow, apps.length)

    //so if the with of the window can fit all the cards then no need the button
    //check height is capable of putting that many cards row*(col of cards)
    return !(cardsToFitRow >= apps.length) && !checkCardHeightHelper(windowHeight, vh, gap, cardsToFitRow, apps.length)
}

function checkCardHeightHelper (windowHeight, vh, gap, cardsPerRow, appsLength) {

    const heightInPx = viewSizeToPx(vh, windowHeight)
    let cardsPerColumn = Math.ceil(appsLength/cardsPerRow) //making sure it's >= 1, always 1 card high
    //15 margin of error (in case the estimation is incorrect)
    const cardsToFitColumn = Math.floor((heightInPx) / (340 + gap)) //340 is the current average card height

    //debugging
    // console.log(cardsPerColumn, cardsPerRow)

    //if the cards can fit exceeds amount of cards per column then it can fit
    return (cardsToFitColumn >= cardsPerColumn)
}

export function checkShowCollapseTasks (tasks, windowHeight, vh) {

    const heightInPx = (vh / 100) * windowHeight

    // from px to vh = (px/windowHeight) * 100
    const heightOfTask = 100 //90 tall for tasks

    //gap of task is 16 in all sizes
    let gap = 16

    const rowsToFit = Math.floor((heightInPx) / (heightOfTask + gap))

    //if amount of rows it can have > than the amount of task then dont show the button
    return !(rowsToFit > tasks.length)
}

//end of (1)