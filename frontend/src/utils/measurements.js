

export function viewSizeToPx (viewSize, windowSize) {

    //viewsize and windowsize must be in same dimension (ex: width, width)

    return (viewSize/100) * (windowSize) 
}

export function findGapPx (gapSizeObject, windowSize) {

    // const arg = {
    //     "s": {gap: 3, marginOfError: 0},
    //     "sm": {gap: 3, marginOfError: 0},
    //     "md": {gap: 3, marginOfError: 0},
    //     "lg": {gap: 3, marginOfError: 0},
    //     "xl": {gap: 4, marginOfError: 0.5},
    //     "xxl": {gap: 4, marginOfError: 0.5},
    // } example of gapsizeobj
    //windowSize can be width or height

    //the bootstrap standards on how gaps are created
    //returning the px size of the gap 

    const spacer = 16 //px

    const sizesMapToWidth = {
        "s": 576,
        "sm": 768,
        "md": 992,
        "lg": 1200,
        "xl": 1400,
    }

    const gapMultipliers = {
        0: 0,
        1: 0.25,
        2: 0.5,
        3: 1,
        4: 1.5,
        5: 3,
    }

    Object.entries(sizesMapToWidth).forEach((sizeArr) => {
        const sizeLabel = sizeArr[0]
        const breakpointSize = sizeArr[1]
        const gapObjectByLabel = gapSizeObject[sizeLabel]
        const gap = gapObjectByLabel.gap
        const gapMultiplier = gapMultipliers[gap]
        const marginOfError = gapObjectByLabel.marginOfError
        const actualSize = (gapMultiplier + marginOfError) * spacer

        if (windowSize < breakpointSize) {
            return actualSize
        }
    })

    //only for xxl
    const gapObjectByLabel = gapSizeObject["xxl"]
    const gap = gapObjectByLabel.gap
    const gapMultiplier = gapMultipliers[gap]
    const marginOfError = gapObjectByLabel.marginOfError
    const actualSize = (gapMultiplier + marginOfError) * spacer

    return actualSize
}

export function findWithinRange(size, breakpoint) {
    
}