//utils
import { validateDateTime } from "../../dateTime/dateTime"

export default function dateTimeInitializer(dateTime, label) {

    const dateTimeObj = {
        ["day" + label]: "",
        ["month" + label]: "",
        ["year" + label]: "",
        ["hour" + label]: "",
        ["min" + label]: "",
        ["sec" + label]: "00",
    }

    if (dateTime && validateDateTime(dateTime)) {
        const dateTimeSplitted = dateTime.split(" ")
        const dateSplitted = dateTimeSplitted[0].split("-")
        const timeSplitted = dateTimeSplitted[1].split(":")

        dateTimeObj["month" + label] = dateSplitted[0]
        dateTimeObj["day" + label] = dateSplitted[1]
        dateTimeObj["year" + label] = dateSplitted[2]

        dateTimeObj["hour" + label] = timeSplitted[0]
        dateTimeObj["min" + label] = timeSplitted[1]
        dateTimeObj["sec" + label] = "00"
    }

    return dateTimeObj
}