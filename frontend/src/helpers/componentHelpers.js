import { remToPx, viewSizeToPx } from "utils/measurements"


export const calculateCardRows = (vh, windowHeight, cardHeight, gap) => {

    //gets vh you want to show 
    const vhInPx = viewSizeToPx(vh, windowHeight)
    const visibleCardsInHeight = Math.floor((vhInPx) / remToPx(cardHeight + gap))
    return visibleCardsInHeight
}

export const calculateCardCols = (containerWidth, cardWidth, gap) => {

    const visibleCardsInWidth = Math.floor((containerWidth) / remToPx(cardWidth + gap))
    return visibleCardsInWidth
}
