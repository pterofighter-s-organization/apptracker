import { compareDates } from "../utils/dateTimeUtils"

export const sortDataByLatest = (data) => {
    return (
        data.sort((a, b) => {
            return (-1 * compareDates(a.date_edited, b.date_edited))
        })
    )
}

export const filterDataByStatus = (status, data) => {

    return (
        status ?
            data.filter((item) => (
                item.archived === (status === "archived")
            ))
            :
            data
    )
}