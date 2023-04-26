import { findTimeDifference } from "./TimeDisplayFunctions"

export function TimerDisplayPresentation ( { start, end } ) {

    const timeDiffObj = findTimeDifference(start, end)
    
    const timeDisplay = (() => {

        const monthsLeft = timeDiffObj.totalMonthsLeft
        const daysLeft = timeDiffObj.daysLeft
        const hoursLeft = timeDiffObj.hoursLeft
        const minsLeft = timeDiffObj.minsLeft

        if (monthsLeft > 1){
            return monthsLeft + " " + "months left"
        } if (daysLeft > 1){
            return daysLeft + " " + "days left"
        } if (hoursLeft >= 1){
            if(hoursLeft == 1){
                return hoursLeft + " " + "hour left"
            }
            return hoursLeft + " " + "hours left"
        } if (minsLeft >= 1){
            if(minsLeft == 1){
                return minsLeft + " " + "min left"
            }
            return minsLeft + " " + "mins left"
        }

        return "Do Now"
    })

    return(
        <>
            {timeDisplay()}
        </>
    )
}