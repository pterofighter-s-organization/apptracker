//utils
import { findTimeDifference } from "./utils/dateTimeUtils";

export default function Timer({ time }) {

    //it will display a countdown timer
    function resultFormatter(num, label) {
        //takes an int and a string
        return num.toString() + " " + label
    }

    function findCountdown(timeDiffObj) {
        const yearsLeft = timeDiffObj.yearsLeft
        const monthsLeft = timeDiffObj.monthsLeft
        const daysLeft = timeDiffObj.daysLeft
        const hoursLeft = timeDiffObj.hoursLeft
        const minutesLeft = timeDiffObj.minutesLeft

        if (yearsLeft > 1) {
            return resultFormatter(yearsLeft, "years left")
        } if (monthsLeft >= 1) {
            if (monthsLeft === 1) {
                return resultFormatter(monthsLeft, "month left")
            }
            return resultFormatter(monthsLeft, "months left")
        } if (daysLeft > 1) {
            return resultFormatter(daysLeft, "days left")
        } if (hoursLeft >= 1) {
            if (hoursLeft === 1) {
                return resultFormatter(hoursLeft, "hour left")
            }
            return resultFormatter(hoursLeft, "hours left")
        } if (minutesLeft >= 1) {
            if (minutesLeft === 1) {
                return resultFormatter(minutesLeft, "min left")
            }
            return resultFormatter(minutesLeft, "mins left")
        }

        return "Do Now"
    }

    return (
        <>
            {findCountdown(findTimeDifference(time))}
        </>
    )
}