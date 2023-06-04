//components
import DateAndTime from "../../../../../components/Date/DateAndTime";

export default function CreatedDate({ dateCreated }) {

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Created :
            </div>
            <div className="text-dark-emphasis">
                <DateAndTime date={dateCreated} />
            </div>
        </div>
    )
}