//utils
import * as formatters from "../../utils/formatters";
import * as dateTimeUtils from "../../utils/dateTimeUtils";

export default function DateTime({ dateTime }) {

    const pstDateTime = dateTimeUtils.convertUTCtoPST(dateTime)
    const dateTimeObj = dateTimeUtils.convertISOtoDate(pstDateTime).split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    const dateFormatted = formatters.dateFormatter(date)
    const timeFormatted = formatters.timeFormatter(time)

    return (
        <>
            {dateFormatted + " " + timeFormatted.hours + ":" + timeFormatted.mins + timeFormatted.period}
        </>
    )
}