import { findTimeDifference } from "./TimeDisplayFunctions"

export function TimerDisplayPresentation ( { start, end } ) {

    const timeDiffObj = findTimeDifference(start, end)
    
    const timeDisplay = (() => {
        const monthsLeft = timeDiffObj.totalMonthsLeft
        const daysLeft = timeDiffObj.daysLeft
        const hoursLeft = timeDiffObj.hoursLeft

        if (monthsLeft > 1){
            return monthsLeft + " " + "months left"
        } if (daysLeft > 1){
            return daysLeft + " " + "days left"
        } if (hoursLeft >= 1){
            return hoursLeft + " " + "hours left"
        }
        return "Do Now"
    })

    return(
        <>
            {timeDisplay()}
        </>
    )
}