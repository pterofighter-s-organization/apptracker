import { labelFormatter } from "./formatters"

export function dateInfoInitializer(dateTime, label) {

    label = labelFormatter("", label)
    // console.log(label)

    //label is what this data field gonna be called
    const dateInfoObj = {
        ["day" + label]: "",
        ["month" + label]: "",
        ["year" + label]: "",
        ["hour" + label]: "",
        ["min" + label]: "",
        ["sec" + label]: "00", //default to 00
    }

    //if null, then no need to prefill the dateTime data - everything in here should be valid
    if (dateTime) {
        const dateTimeSplitted = dateTime.split(" ")
        const dateSplitted = dateTimeSplitted[0].split("-")
        const timeSplitted = dateTimeSplitted[1].split(":")

        dateInfoObj["month" + label] = dateSplitted[0]
        dateInfoObj["day" + label] = dateSplitted[1]
        dateInfoObj["year" + label] = dateSplitted[2]

        dateInfoObj["hour" + label] = timeSplitted[0]
        dateInfoObj["min" + label] = timeSplitted[1]
        dateInfoObj["sec" + label] = "00" //default to 00
    }

    return dateInfoObj
}