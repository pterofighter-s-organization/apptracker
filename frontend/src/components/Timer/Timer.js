import { findTimeDifference, timerDisplay } from '../../utils/time.js'

export default function Timer ( { start, end } ) {

    //add a timer here that renders every sec * (later)
    const timeDiffObj = findTimeDifference(start, end)
    const timeLeftDisplay = timerDisplay(timeDiffObj)

    return(
        <>
            {timeLeftDisplay}
        </>
    )
}