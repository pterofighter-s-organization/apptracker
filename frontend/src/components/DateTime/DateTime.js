//utils
import * as formatters from "../../utils/formatters";

export default function DateTime({ dateTime }) {

    const dateTimeSplitted = dateTime.split(" ")
    const date = dateTimeSplitted[0]
    const time = dateTimeSplitted[1]

    const dateFormatted = formatters.dateFormatter(date)
    const timeFormatted = formatters.timeFormatter(time)

    return (
        <>
            {dateFormatted + " " + timeFormatted.hours + ":" + timeFormatted.mins + timeFormatted.period}
        </>
    )
}