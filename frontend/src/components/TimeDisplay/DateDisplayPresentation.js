import { dateIntoString } from "./TimeDisplayFunctions"

export default function DateDisplayPresentation ( { date } ) {
    
    const displayTimeObj = dateIntoString(date).split(" ")
    const dateFormat = displayTimeObj[0]
    let [hour, mins] = displayTimeObj[1].split(":")
    const format = hour < 12 ? "am" : "pm"
    hour = hour >= 12 || hour <= 0 ? hour - 12 : hour

    return(
        <>
            {dateFormat + " " + Math.abs(hour) + ":" + mins + format}
        </>
    )
}