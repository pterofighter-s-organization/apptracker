//utils
import * as formatters from './formatters'

export default function DateTime({ dateTime }) {

    const dateTimeSplitted = dateTime.split(" ")
    const date = dateTimeSplitted[0]
    const time = dateTimeSplitted[1]    

    return(
        <>
            {formatters.dateFormatter(date)+ " " + formatters.timeFormatter(time)}
        </>
    )
}