import { dateToString } from "../../utils/date"

export default function DateAndTime ( {date} ) {
    
    //for firefox cause they cant read it properly
    // if(typeof date === "string"){
    //     date = date.replace("-", "/")
    // }
    
    const dateFormatted = dateToString(date)
    const dateString = dateFormatted.date
    const time = dateFormatted.timeHumanized
    const timePeriod = dateFormatted.timePeriod

    if (typeof dateString === "string"){
        console.log("true")
    }

    return(
        <>
            {dateString + " " + time + timePeriod}
        </>
    )
}