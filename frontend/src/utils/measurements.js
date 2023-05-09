

export function viewSizeToPx (viewSize, windowSize) {

    //viewsize and windowsize must be in same dimension (ex: width, width)

    return (viewSize/100) * (windowSize) 
}

export function breakpointMapWidth ( width ){

    const sizesMapToWidth = {
        "s": 576,
        "sm": 768,
        "md": 992,
        "lg": 1200,
        "xl": 1400,
    }

    Object.entries(sizesMapToWidth).forEach(([sizeLabel, breakpointSizeWidth]) => {
        if (width < breakpointSizeWidth) {
            return sizeLabel
        }
    })

    return "xxl"
}

export function spaceFromSize ( size ) {

    //the bootstrap standards on how sizes are created
    //returning the px size of the size 

    const spacer = 16 //px = 1rem

    const spaceMultipliers = {
        0: 0,
        1: 0.25,
        2: 0.5,
        3: 1,
        4: 1.5,
        5: 3,
    }

    const spaceMultiplier = spaceMultipliers[size]
    const res = spacer * spaceMultiplier

    return {
        res,
        spacer,
        spaceMultiplier
    }
}

export function spaceOnAllBreakpoints (breakpointMapSize, width) {

    // const arg = {
    //     "s": {size: 3, marginOfError: 0},
    //     "sm": {size: 3, marginOfError: 0},
    //     "md": {size: 3, marginOfError: 0},
    //     "lg": {size: 3, marginOfError: 0},
    //     "xl": {size: 4, marginOfError: 0.5},
    //     "xxl": {size: 4, marginOfError: 0.5},
    // } example of sizesizeobj
    //width


    const breakpoint = breakpointMapWidth(width)
    const sizeObject = breakpointMapSize[breakpoint]
    const size = sizeObject.size
    const marginOfError = sizeObject.marginOfError
    const {spacer, spaceMultiplier} = spaceFromSize(size)
    const spaceInPx = (spaceMultiplier + marginOfError) * spacer

    return spaceInPx
}
