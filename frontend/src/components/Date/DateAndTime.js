import { timePeriodFormat } from "../../utils/time"
import { dateToString } from "../../utils/date"

export default function DateAndTime ( {date} ) {
    
    //for firefox cause they cant read it properly
    if(typeof date === "string"){
        date = date.replace("-", "/")
    }
    
    date = new Date(date)
    const dateAndTime = dateToString(date).split(" ")
    const dateFormatted = dateAndTime[0]
    const timePeriodFormatObj = timePeriodFormat(dateAndTime[1])
    const hours = timePeriodFormatObj.hours
    const mins = timePeriodFormatObj.mins
    const timePeriod = timePeriodFormatObj.timePeriod

    return(
        <>
            {dateFormatted + " " + hours + ":" + mins + timePeriod}
        </>
    )
}