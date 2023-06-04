//utils
import { dateFormat } from "../../utils/dateTime/date/date"

export default function DateAndTime({ date }) {

    //for firefox cause they cant read it properly
    // if(typeof date === "string"){
    //     date = date.replaceAll("-", "/")
    // }

    const dateFormatted = dateFormat(date)
    const dateString = dateFormatted.dateHumanized
    const time = dateFormatted.timeHumanized
    const timePeriod = dateFormatted.timePeriod

    return (
        <>
            {dateString + " " + time + timePeriod}
        </>
    )
}