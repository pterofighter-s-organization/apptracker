import { findTimeDifference, timeLeftFormat } from "../../utils/archived/time"

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