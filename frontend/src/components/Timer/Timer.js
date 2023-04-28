import { findTimeDifference, timeLeftFormat } from "../../utils/time"

export default function Timer ( { start, end } ) {

    const timeDiffObj = findTimeDifference(start, end)
    const timeLeftDisplay = timeLeftFormat(timeDiffObj)

    return(
        <>
            {timeLeftDisplay}
        </>
    )
}