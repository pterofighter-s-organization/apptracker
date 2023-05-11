//this is a file for helper functions (PURE FUNCTIONS (no side effect, no global vars used) inside dashboard.js)
//only used for dashboard.js and designed for it

//old method of calculating if the app needs collapse because I didn't know I could just get the height directly

//start of (1): the preview collapse check functions
export function checkShowCollapseApps(apps, windowWidth, windowHeight, vh) {

    //calculate how many cards can the current window can fit to see if theres a need for collapse

    //1. find the width of the container that is containing the cards
    //1-ex: containerWidth = windowWidth - padding (padding is in vw so convert into px)
    //2. to calculate vw in px for padding, use this = (vw) * (the window width (in px) / 100)
    //3. find the gap that's used to seperate between the cards
    //3-ex: gap = spacer(16px or 1rem) * (multiplier) (multiplier depending on what the gap size is)
    //4. with the gap and container width, find how many cards it can fit in a row
    //4-ex: = containerWidth / (315 = width of the card) + gap
    //5. do the same for height (read in helper func), check height is capable of putting that many cards row*(col of cards)
    //so if the width of the window can fit all the cards then no need the button, and the height

    const vwPadding = 2.5 //from the dashboard container

    const paddingPx = viewSizeToPx(vwPadding, windowWidth)
    const appContainerWidth = windowWidth - (paddingPx)

    const arg = {
        "s": { gap: 3, marginOfError: 0 },
        "sm": { gap: 3, marginOfError: 0 },
        "md": { gap: 3, marginOfError: 0 },
        "lg": { gap: 3, marginOfError: 0 },
        "xl": { gap: 4, marginOfError: 0.5 },
        "xxl": { gap: 4, marginOfError: 0.5 },
    }
    const gap = findGapPx(arg, windowWidth)

    let cardsToFitRow = Math.floor((appContainerWidth) / (315 + (gap))) //get the card width from appcard.css

    if (windowWidth < 680) { //see card.css for max-width phone screen size
        cardsToFitRow = 1
    }

    //debugging
    // checkCardHeightHelper(windowHeight, vh, gap, cardsToFitRow, apps.length)

    return !(cardsToFitRow >= apps.length) && !checkCardHeightHelper(windowHeight, vh, gap, cardsToFitRow, apps.length)
}

function checkCardHeightHelper (windowHeight, vh, gap, cardsPerRow, appsLength) {

    //1. translate vh into px - the current container vh is
    //2. find how many cards it has in the column by diving how much apps there are and how much a row can fit 
    //2-ex: = apps.length / cardsPerRow = ceil(res) because there's always one card length of space for the container
    //3. use the same gap and find how many cards can each column fit vertically
    //3-ex: = containerHeight / (340 = height of the card) + gap 
    //if the cards can fit exceeds amount of cards per column then it can fit

    const appContainerInPx = viewSizeToPx(vh, windowHeight)
    let cardsPerColumn = Math.ceil(appsLength / cardsPerRow) //making sure it's >= 1, always 1 card high

    const cardsToFitColumn = Math.floor((appContainerInPx) / (340 + gap)) //340 is the current average card height

    //debugging
    // console.log(cardsPerColumn, cardsPerRow)

    return (cardsToFitColumn >= cardsPerColumn)
}

export function checkShowCollapseTasks (tasks, windowHeight, vh) {

    //1. find the container height in px
    //2. use the height of task to find how many rows a column can fit vertically
    //2-ex: = height = actual Height + gap in between them
    //if amount of rows it can have > than the amount of task then dont show the button

    const appContainerInPx = (vh / 100) * windowHeight

    const heightOfTask = 100 //100 tall for tasks at all window sizes

    let gap = 16 //gap of task is 16 in all sizes

    const rowsToFit = Math.floor((appContainerInPx) / (heightOfTask + gap))

    // console.log("test")

    return !(rowsToFit > tasks.length)
}