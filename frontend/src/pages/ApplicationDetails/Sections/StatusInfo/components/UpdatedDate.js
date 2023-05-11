//components
import DateAndTime from "../../../../../components/Date/DateAndTime"

export default function UpdatedDate({dateEdited}) {

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Updated :
            </div>
            <div className="text-dark-emphasis">
                <DateAndTime date={dateEdited} />
            </div>
        </div>
    )
}