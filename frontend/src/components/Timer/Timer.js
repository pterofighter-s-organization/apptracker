import { findTimeDifference, timeLeftFormat } from "../../utils/time"

export default function Timer ( { start, end } ) {

    //add a timer here that renders every sec * (later)
    const timeDiffObj = findTimeDifference(start, end)
    const timeLeftDisplay = timeLeftFormat(timeDiffObj)

    return(
        <>
            {timeLeftDisplay}
        </>
    )
}