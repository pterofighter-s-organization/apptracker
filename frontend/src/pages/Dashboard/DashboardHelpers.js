
//this is a file for helper functions (PURE FUNCTIONS (no side effect, no global vars used) inside dashboard.js)
//only used for dashboard.js

//later these can be its own seperate component * (later) gotta think about it
export function checkShowCollapseApps (apps, windowWidth) {

    //calculate how many cards can the current window can fit to see if theres a need for collapse

    const vwPadding = 1

    //padding in px = (vw) * (the window width (in px) / 100)
    const paddingPx = vwPadding * (windowWidth / 100)
    const containerWidth = windowWidth - (2 * paddingPx)
    //gap is gutter width = container width * gutter percentage / 100
    //the percentage is 1.5 usually but i downscale to 1.25 for margins (IMPORTANT DONT DELETE)
    const gap = (containerWidth * 1.25 / 100)
    //get the card width from appcard.css
    const cardsToFit = Math.floor(windowWidth / (315 + gap))

    //315px card
    //so if the with of the window can fit all the cards then no need the button

    return !(cardsToFit >= apps.length)
}

export function checkShowCollapseTasks (tasks) {
    //if the amount of tasks is > 3 that means there gonna be alot of task
    return (tasks.length > 5)
}
